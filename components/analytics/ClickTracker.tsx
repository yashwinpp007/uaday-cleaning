'use client'

import { useEffect } from 'react'

// Pushes call / WhatsApp / quote clicks to the GTM dataLayer so conversions
// can be measured without editing every link. No personal data is sent.
export default function ClickTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest('a')
      if (!link) return
      const href = link.getAttribute('href') || ''
      let event: string | null = null
      if (href.startsWith('tel:')) event = 'click_call'
      else if (href.includes('wa.me') || href.includes('whatsapp')) event = 'click_whatsapp'
      else if (href.startsWith('mailto:')) event = 'click_email'
      else if (href.startsWith('/get-a-quote')) event = 'click_quote_cta'
      if (!event) return
      const w = window as unknown as { dataLayer?: Record<string, unknown>[] }
      w.dataLayer = w.dataLayer || []
      w.dataLayer.push({ event, link_path: window.location.pathname })
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return null
}
