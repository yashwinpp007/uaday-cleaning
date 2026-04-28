'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Clock, Phone, Star } from 'lucide-react'
import Button3D from '@/components/ui/Button3D'

const steps = [
  { icon: CheckCircle, title: 'Quote Received', desc: 'We\'ve received your quote request and will review the details.' },
  { icon: Clock, title: 'We\'ll Be in Touch', desc: 'Our team will call or email you within 1 hour during business hours.' },
  { icon: Star, title: 'Book & Relax', desc: 'Confirm your booking and we\'ll handle everything from there.' },
]

export default function ThankYouPage() {
  useEffect(() => {
    // GA4 conversion event
    type GtagFn = (...args: unknown[]) => void
    const win = window as unknown as { gtag?: GtagFn }
    if (typeof window !== 'undefined' && win.gtag) {
      win.gtag('event', 'conversion', {
        event_category: 'lead',
        event_label: 'thank_you_page_view',
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-green-light via-white to-white flex items-center pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 text-center w-full">
        {/* Animated check */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="w-28 h-28 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
        >
          <CheckCircle className="w-14 h-14 text-white" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="font-heading font-900 text-dark-text text-4xl md:text-6xl mb-4">
            Thank You! 🎉
          </h1>
          <p className="text-body-text text-xl mb-10 max-w-lg mx-auto">
            Your quote request has been received. We&apos;ll get back to you within <strong>1 hour</strong> during business hours.
          </p>
        </motion.div>

        {/* What happens next */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white rounded-5xl p-8 shadow-card mb-10"
        >
          <h2 className="font-heading font-800 text-dark-text text-2xl mb-8">What Happens Next?</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-14 h-14 bg-brand-green-light rounded-2xl flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-brand-green" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-green rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-heading font-700 text-dark-text text-base mb-2">{step.title}</h3>
                <p className="text-body-text text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <Button3D href="/" size="md">← Back to Home</Button3D>
          <a
            href="https://g.page/r/uaday-cleaning/review"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-yellow text-dark-text font-heading font-900 px-7 py-4 rounded-3xl shadow-3d-yellow hover:bg-yellow-400 transition-colors"
          >
            <Star className="w-5 h-5" /> Leave Us a Review
          </a>
          <a href="tel:0412345678" className="flex items-center gap-2 text-brand-green font-semibold">
            <Phone className="w-5 h-5" /> 0412 345 678
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-10 text-body-text text-sm"
        >
          Need something urgent? Call us directly on{' '}
          <a href="tel:0412345678" className="text-brand-green font-semibold">0412 345 678</a>
        </motion.p>
      </div>
    </div>
  )
}
