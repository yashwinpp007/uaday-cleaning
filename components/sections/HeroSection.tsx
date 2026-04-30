'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button3D from '@/components/ui/Button3D'
import FloatingBlobs from '@/components/ui/FloatingBlobs'
import DotPattern from '@/components/ui/DotPattern'
import { CheckCircle, Star, Phone } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-green-light via-white to-white overflow-hidden pt-36 pb-16">
      <DotPattern />
      <FloatingBlobs />

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand-green-light border border-brand-green/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse-ring" />
              <span className="text-brand-green font-semibold text-sm">Deanside&apos;s Trusted Cleaners</span>
            </motion.div>

            {/* H1 */}
            <h1 className="font-heading font-900 text-dark-text text-5xl md:text-6xl lg:text-7xl leading-[1.0] mb-6">
              Professional
              <span className="text-brand-green block">Cleaning</span>
              Services
              <span className="text-brand-green block">in Melbourne</span>
            </h1>

            <p className="text-body-text text-lg leading-relaxed mb-8 max-w-lg">
              Eco-friendly, fully insured cleaning services you can trust. Residential, commercial, and end-of-lease cleaning with a bond-back guarantee.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['Fully Insured', 'Eco-Friendly', 'Bond-Back Guarantee'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm font-semibold text-body-text">
                  <CheckCircle className="w-4 h-4 text-brand-green" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button3D href="/get-a-quote" size="lg">Get a Free Quote</Button3D>
              <a href="tel:0414375051" className="flex items-center gap-2 text-brand-green font-semibold text-lg hover:text-brand-green-dark transition-colors group">
                <div className="w-12 h-12 bg-brand-green-light rounded-2xl flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-brand-green group-hover:text-white" />
                </div>
                0414 375 051
              </a>
            </div>
          </motion.div>

          {/* Right: Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main hero image with float */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="relative rounded-4xl overflow-hidden border-[12px] border-white shadow-2xl" style={{ transform: 'rotate(2deg)' }}>
                {/* TODO: Replace with real hero photo of cleaned home */}
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop"
                  alt="Professionally cleaned modern living room in Deanside"
                  width={600}
                  height={500}
                  className="w-full object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Before/After floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 300 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-3xl p-4 shadow-card-hover border border-light-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-green rounded-2xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <p className="font-heading font-800 text-dark-text text-xl leading-none">4.9/5</p>
                  <p className="text-body-text text-xs">500+ Reviews</p>
                </div>
              </div>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
                ))}
              </div>
            </motion.div>

            {/* Insured badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 300 }}
              className="absolute -top-4 -right-4 bg-brand-green text-white rounded-3xl px-4 py-3 shadow-lg"
            >
              <p className="font-heading font-800 text-sm">✓ Fully</p>
              <p className="font-heading font-800 text-sm">Insured</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
