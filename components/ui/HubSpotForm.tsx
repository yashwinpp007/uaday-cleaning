'use client'

import Script from 'next/script'
import { useCallback, useEffect, useRef } from 'react'

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: Record<string, string>) => void
      }
    }
  }
}

export default function HubSpotForm() {
  const containerRef = useRef<HTMLDivElement>(null)
  const created = useRef(false)

  const createForm = useCallback(() => {
    if (created.current || !window.hbspt || !containerRef.current) return
    created.current = true
    const id = `hs-form-${Math.random().toString(36).slice(2)}`
    containerRef.current.id = id
    window.hbspt.forms.create({
      portalId: '443122259',
      formId: '2c635eb3-3a02-45f4-893d-d1dd1475f3a7',
      region: 'ap1',
      target: `#${id}`,
    })
  }, [])

  // If the HubSpot script was already loaded by a previous page visit
  // (client-side navigation), onLoad won't fire — initialise immediately.
  useEffect(() => {
    if (window.hbspt) {
      createForm()
    }
  }, [createForm])

  return (
    <>
      <Script
        src="//js-ap1.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={createForm}
      />
      <div ref={containerRef} className="hs-form-wrapper" />
    </>
  )
}
