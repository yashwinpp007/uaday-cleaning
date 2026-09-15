'use client'

import { useEffect, useRef, useState } from 'react'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'

type Role = 'user' | 'assistant'
interface ChatMessage {
  role: Role
  content: string
}

const STORAGE_KEY = 'uday-chat-history'
const GREETING: ChatMessage = {
  role: 'assistant',
  content:
    "Hi, I'm Uday's virtual assistant 👋 Ask me about pricing, service areas, bond-back cleans, or how to book — I'm here 24/7.",
}
const SUGGESTIONS = [
  'How much for an end of lease clean?',
  'What suburbs do you cover?',
  'Can I book a same-day clean?',
]

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Restore conversation within this browser tab so a visitor doesn't lose
  // context if they navigate between pages. Never synced anywhere else.
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved) as ChatMessage[]
        if (Array.isArray(parsed) && parsed.length > 0) setMessages(parsed)
      }
    } catch {
      // ignore corrupt/unavailable storage
    }
  }, [])

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    } catch {
      // ignore quota/privacy-mode errors
    }
  }, [messages])

  useEffect(() => {
    if (open) scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, open, loading])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  async function sendMessage(text: string) {
    const trimmed = text.trim()
    if (!trimmed || loading) return

    const next = [...messages, { role: 'user' as const, content: trimmed }]
    setMessages(next)
    setInput('')
    setError(null)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong — please try again.')
        return
      }

      setMessages([...next, { role: 'assistant', content: data.reply }])
    } catch {
      setError("Couldn't reach the assistant — check your connection and try again, or call 0420 203 336.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Chat with UDAY Cleaning'}
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-brand-green text-white shadow-3d-green hover:bg-brand-green-dark transition-colors active:translate-y-1 active:shadow-none"
      >
        {open ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[min(23rem,calc(100vw-2.5rem))] h-[min(32rem,calc(100vh-8rem))] bg-white rounded-4xl shadow-card-hover border border-light-border flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-brand-green text-white px-5 py-4 flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-heading font-800">
              U
            </div>
            <div>
              <p className="font-heading font-800 leading-tight">UDAY Cleaning</p>
              <p className="text-xs text-white/80 leading-tight">Usually replies instantly</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-off-white">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-3xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'bg-brand-green text-white rounded-br-md'
                      : 'bg-white text-dark-text border border-light-border rounded-bl-md'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-light-border rounded-3xl rounded-bl-md px-4 py-2.5 flex items-center gap-2 text-body-text text-sm">
                  <Loader2 className="w-4 h-4 animate-spin" /> Thinking…
                </div>
              </div>
            )}

            {error && (
              <div className="flex justify-start">
                <div className="bg-red-50 text-red-700 border border-red-200 rounded-3xl px-4 py-2.5 text-sm">
                  {error}
                </div>
              </div>
            )}

            {messages.length === 1 && !loading && (
              <div className="flex flex-col gap-2 pt-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="text-left text-sm bg-brand-green-light text-brand-green-dark font-semibold px-4 py-2 rounded-2xl hover:bg-brand-green hover:text-white transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              sendMessage(input)
            }}
            className="flex items-center gap-2 p-3 border-t border-light-border bg-white flex-shrink-0"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
              maxLength={1500}
              disabled={loading}
              className="flex-1 px-4 py-2.5 rounded-2xl border border-light-border focus:border-brand-green outline-none text-sm text-dark-text disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send"
              className="w-10 h-10 flex-shrink-0 rounded-2xl bg-brand-green text-white flex items-center justify-center hover:bg-brand-green-dark transition-colors disabled:opacity-40"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
