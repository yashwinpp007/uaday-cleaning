import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { CHATBOT_SYSTEM_PROMPT } from '@/lib/chatbot/system-prompt'
import { CAPTURE_LEAD_TOOL, type CapturedLead } from '@/lib/chatbot/tools'
import { notifyLead } from '@/lib/chatbot/notify'
import { isRateLimited } from '@/lib/chatbot/rate-limit'

export const runtime = 'nodejs'

// Sonnet 5 is the default for quality; if API cost on a high-traffic FAQ bot
// becomes a concern, claude-haiku-4-5-20251001 is a cheap, fast drop-in that
// still performs well against a grounded knowledge base like this one.
const MODEL = process.env.CHATBOT_MODEL || 'claude-sonnet-5'
const MAX_HISTORY_MESSAGES = 16
const MAX_MESSAGE_LENGTH = 1500

type ChatMessage = { role: 'user' | 'assistant'; content: string }

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return req.headers.get('x-real-ip') || 'unknown'
}

function sanitizeHistory(input: unknown): ChatMessage[] {
  if (!Array.isArray(input)) return []
  return input
    .filter(
      (m): m is ChatMessage =>
        m &&
        typeof m === 'object' &&
        (m.role === 'user' || m.role === 'assistant') &&
        typeof m.content === 'string' &&
        m.content.trim().length > 0
    )
    .slice(-MAX_HISTORY_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) }))
}

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('[chatbot] ANTHROPIC_API_KEY is not set')
    return NextResponse.json(
      { error: "The assistant isn't configured yet — please call 0420 203 336 or use the contact form instead." },
      { status: 503 }
    )
  }

  const ip = getClientIp(req)
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "You've sent a lot of messages — please try again in a few minutes, or call 0420 203 336." },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const messages = sanitizeHistory((body as { messages?: unknown })?.messages)
  if (messages.length === 0) {
    return NextResponse.json({ error: 'No message provided.' }, { status: 400 })
  }
  if (messages[messages.length - 1].role !== 'user') {
    return NextResponse.json({ error: 'Last message must be from the user.' }, { status: 400 })
  }

  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  try {
    const conversation: Anthropic.MessageParam[] = messages.map((m) => ({
      role: m.role,
      content: m.content,
    }))

    // First turn.
    let response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 700,
      system: `${CHATBOT_SYSTEM_PROMPT}\n\nToday's date: ${new Date().toLocaleDateString('en-AU', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Australia/Melbourne',
      })}.`,
      tools: [CAPTURE_LEAD_TOOL],
      messages: conversation,
    })

    // If Claude wants to capture a lead, run the tool server-side, feed the
    // result back, and let it produce the actual reply to the visitor. Cap
    // at one extra round trip — this bot only ever needs to call one tool.
    if (response.stop_reason === 'tool_use') {
      const toolUse = response.content.find(
        (block): block is Anthropic.ToolUseBlock => block.type === 'tool_use'
      )

      if (toolUse && toolUse.name === 'capture_lead') {
        const lead = toolUse.input as CapturedLead
        let toolResultText = 'Lead recorded.'
        try {
          if (lead?.name) {
            await notifyLead(lead)
          } else {
            toolResultText = 'Could not record lead: missing name.'
          }
        } catch (err) {
          console.error('[chatbot] notifyLead failed:', err)
          toolResultText = 'Lead recorded locally, but the notification failed to send.'
        }

        conversation.push({ role: 'assistant', content: response.content })
        conversation.push({
          role: 'user',
          content: [
            {
              type: 'tool_result',
              tool_use_id: toolUse.id,
              content: toolResultText,
            },
          ],
        })

        response = await anthropic.messages.create({
          model: MODEL,
          max_tokens: 700,
          system: CHATBOT_SYSTEM_PROMPT,
          tools: [CAPTURE_LEAD_TOOL],
          messages: conversation,
        })
      }
    }

    const reply = response.content
      .filter((block): block is Anthropic.TextBlock => block.type === 'text')
      .map((block) => block.text)
      .join('\n')
      .trim()

    return NextResponse.json({
      reply: reply || "Sorry, I didn't quite catch that — could you rephrase, or call us on 0420 203 336?",
    })
  } catch (err) {
    console.error('[chatbot] Anthropic API error:', err)
    return NextResponse.json(
      { error: "Something went wrong on my end — please try again, or call 0420 203 336." },
      { status: 502 }
    )
  }
}
