'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { reviews } from '@/lib/data/reviews'

const testimonials = reviews

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
      ))}
    </div>
  )
}

export default function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <SectionWrapper className="py-20 bg-brand-green-light overflow-hidden relative">
      {/* Decorative quote mark */}
      <div className="absolute top-10 left-10 opacity-10">
        <Quote className="w-32 h-32 text-brand-green" />
      </div>

      <div className="max-w-6xl mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block bg-brand-green text-white font-semibold text-sm px-4 py-2 rounded-full mb-4">Real Reviews</span>
          <h2 className="font-heading font-900 text-dark-text text-4xl md:text-5xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-body-text text-lg">Trusted by hundreds of families and businesses across Deanside</p>
        </motion.div>
      </div>

      {/* Auto-scrolling carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-4"
        style={{ cursor: 'grab' }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % testimonials.length) * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="flex-shrink-0 w-80 md:w-96 bg-white rounded-5xl p-7 shadow-card"
          >
            <StarRating count={t.stars} />
            <Quote className="w-8 h-8 text-brand-green/20 mt-3 mb-2" />
            <p className="text-body-text text-sm leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
            <div className="flex items-center gap-3 pt-4 border-t border-light-border">
              <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-heading font-800 text-sm">
                {t.name[0]}
              </div>
              <div>
                <p className="font-heading font-700 text-dark-text text-sm">{t.name}</p>
                <p className="text-body-text text-xs">Google Review</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
