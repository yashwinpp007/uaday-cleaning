import type { CapturedLead } from './tools'

// Sends a captured lead to wherever the team wants to hear about it.
//
// Configure ONE (or both) of these in your environment (.env.local / Vercel
// project settings) — nothing is sent if neither is set, but the chat still
// works fine for answering questions.
//
//   LEAD_WEBHOOK_URL   A Slack "Incoming Webhook" URL, or a Zapier/Make/n8n
//                       webhook — the easiest option, takes ~2 minutes to set
//                       up in Slack: api.slack.com/messaging/webhooks
//
//   LEAD_NOTIFY_EMAIL + RESEND_API_KEY
//                       Sends a plain email via Resend (resend.com) to the
//                       given address. Sign up, verify a sending domain (or
//                       use their shared onboarding domain for testing), and
//                       put the API key in RESEND_API_KEY.
//
// Both are fire-and-forget from the chat route's point of view — a failure
// here never breaks the visitor's chat experience, it's only logged.
export async function notifyLead(lead: CapturedLead) {
  const results = await Promise.allSettled([sendToWebhook(lead), sendEmail(lead)])

  for (const result of results) {
    if (result.status === 'rejected') {
      console.error('[chatbot] lead notification failed:', result.reason)
    }
  }
}

function formatLeadText(lead: CapturedLead): string {
  const lines = [
    lead.is_urgent ? '🔴 URGENT — needs prompt follow-up' : '🟢 New chatbot lead',
    `Name: ${lead.name}`,
    lead.phone ? `Phone: ${lead.phone}` : null,
    lead.email ? `Email: ${lead.email}` : null,
    lead.suburb ? `Suburb: ${lead.suburb}` : null,
    lead.service ? `Service: ${lead.service}` : null,
    lead.timeframe ? `Timeframe: ${lead.timeframe}` : null,
    lead.notes ? `Notes: ${lead.notes}` : null,
  ].filter(Boolean)
  return lines.join('\n')
}

async function sendToWebhook(lead: CapturedLead) {
  const url = process.env.LEAD_WEBHOOK_URL
  if (!url) return

  // Slack incoming webhooks expect { text }. Most generic webhook receivers
  // (Zapier, Make, n8n) are happy to take both `text` and the raw fields.
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: formatLeadText(lead), source: 'udaycleaning.com.au chatbot', ...lead }),
  })

  if (!res.ok) {
    throw new Error(`Lead webhook responded ${res.status}`)
  }
}

async function sendEmail(lead: CapturedLead) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.LEAD_NOTIFY_EMAIL
  if (!apiKey || !to) return

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.LEAD_NOTIFY_FROM || 'UDAY Cleaning Chatbot <onboarding@resend.dev>',
      to,
      subject: lead.is_urgent
        ? `🔴 Urgent chatbot lead: ${lead.name}`
        : `New chatbot lead: ${lead.name}`,
      text: formatLeadText(lead),
    }),
  })

  if (!res.ok) {
    throw new Error(`Resend email responded ${res.status}`)
  }
}
