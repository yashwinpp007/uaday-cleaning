'use client'

import { motion } from 'framer-motion'
import { CalendarCheck, Sparkles, Smile } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const steps = [
  {
    number: '01',
    icon: CalendarCheck,
    title: 'Book Online',
    desc: 'Fill out our quick quote form or call us. We&apos;ll confirm your booking within the hour.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'We Clean',
    desc: 'Our trained, insured cleaners arrive on time with all eco-friendly products and equipment.',
  },
  {
    number: '03',
    icon: Smile,
    title: 'You Relax',
    desc: 'Enjoy your spotlessly clean home or office. We guarantee you&apos;ll love the results.',
  },
]

export default function HowItWorks() {
  return (
    <SectionWrapper className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-brand-green-light text-brand-green font-semibold text-sm px-4 py-2 rounded-full mb-4">Simple Process</span>
          <h2 className="font-heading font-900 text-dark-text text-4xl md:text-5xl mb-4">
            How It Works
          </h2>
          <p className="text-body-text text-lg max-w-xl mx-auto">
            Getting a professional clean has never been easier. Three simple steps to a spotless home.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-brand-green via-brand-yellow to-brand-green" />

          <div className="grid lg:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 200 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Numbered circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center shadow-lg relative z-10">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center text-dark-text font-heading font-900 text-xs shadow">
                    {step.number}
                  </div>
                </div>
                <h3 className="font-heading font-800 text-dark-text text-2xl mb-3">{step.title}</h3>
                <p className="text-body-text leading-relaxed" dangerouslySetInnerHTML={{ __html: step.desc }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
