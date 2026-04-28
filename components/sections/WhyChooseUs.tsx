'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle, Leaf, Shield, Clock, Heart } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const usps = [
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    desc: 'We use only certified eco-friendly, non-toxic cleaning products that are safe for your family and the planet.',
  },
  {
    icon: Shield,
    title: 'Bond-Back Guarantee',
    desc: 'Not satisfied? We&apos;ll return and re-clean at no charge — your bond back is our commitment.',
  },
  {
    icon: Clock,
    title: 'Same-Day Availability',
    desc: 'Need a clean urgently? We offer same-day bookings subject to availability — just give us a call.',
  },
  {
    icon: Heart,
    title: 'Locally Owned & Operated',
    desc: 'We&apos;re a proud West Melbourne family business. We know the local community and care deeply about our reputation.',
  },
]

export default function WhyChooseUs() {
  return (
    <SectionWrapper className="py-20 bg-brand-green-light overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: USPs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-brand-green text-white font-semibold text-sm px-4 py-2 rounded-full mb-5">Why Us?</span>
            <h2 className="font-heading font-900 text-dark-text text-4xl md:text-5xl mb-10 leading-tight">
              Why Choose<br />UaDay Cleaning?
            </h2>

            <div className="space-y-6">
              {usps.map((usp, i) => (
                <motion.div
                  key={usp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-brand-green rounded-2xl flex items-center justify-center flex-shrink-0">
                    <usp.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-800 text-dark-text text-lg mb-1">{usp.title}</h3>
                    <p className="text-body-text text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: usp.desc }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image + stat badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-4xl overflow-hidden shadow-2xl">
              {/* TODO: Replace with real team/cleaning photo */}
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=500&fit=crop"
                alt="UaDay Cleaning team professionally cleaning a Melbourne home"
                width={600}
                height={500}
                className="w-full object-cover"
              />
            </div>

            {/* Floating stat badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-white rounded-3xl p-5 shadow-card-hover border border-light-border"
            >
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="font-heading font-900 text-brand-green text-3xl leading-none">
                    <AnimatedCounter end={500} suffix="+" />
                  </p>
                  <p className="text-body-text text-xs mt-1">Happy clients</p>
                </div>
                <div className="w-px h-10 bg-light-border" />
                <div className="text-center">
                  <p className="font-heading font-900 text-brand-green text-3xl leading-none">
                    <AnimatedCounter end={10} suffix="yrs" />
                  </p>
                  <p className="text-body-text text-xs mt-1">Experience</p>
                </div>
              </div>
            </motion.div>

            {/* Check badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-4 -right-4 bg-brand-green text-white rounded-3xl p-4 shadow-lg"
            >
              <CheckCircle className="w-8 h-8" />
              <p className="font-heading font-800 text-xs mt-1 text-center">Certified</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
