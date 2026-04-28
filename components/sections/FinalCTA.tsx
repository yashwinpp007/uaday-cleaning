'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import Button3D from '@/components/ui/Button3D'
import DotPattern from '@/components/ui/DotPattern'

export default function FinalCTA() {
  return (
    <section className="bg-brand-green-dark relative overflow-hidden py-20">
      <DotPattern />

      {/* Blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #ffd700 0%, transparent 70%)', filter: 'blur(50px)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-white/10 text-white font-semibold text-sm px-4 py-2 rounded-full mb-6">
            Ready to Book?
          </span>
          <h2 className="font-heading font-900 text-white text-4xl md:text-6xl mb-6 leading-tight">
            Ready for a<br />Spotless Home?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Join 500+ satisfied customers across West Melbourne. Get your free, no-obligation quote today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Button3D href="/get-a-quote" size="lg">Get a Free Quote</Button3D>
            <a
              href="tel:0412345678"
              className="flex items-center gap-3 text-white font-semibold text-lg hover:text-brand-yellow transition-colors"
            >
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              0412 345 678
            </a>
          </div>

          <p className="text-white/50 text-sm mt-8">
            No lock-in contracts · Same-day availability · Fully insured
          </p>
        </motion.div>
      </div>
    </section>
  )
}
