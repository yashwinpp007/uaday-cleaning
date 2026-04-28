'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const suburbs = [
  'Truganina', 'Hoppers Crossing', 'Werribee', 'Tarneit',
  'Point Cook', 'Laverton', 'Altona Meadows', 'Williams Landing',
  'Deer Park', 'Sunshine', 'Footscray', 'Yarraville',
  'Williamstown', 'Newport', 'Altona', 'Brooklyn',
]

const suburbSlugs: Record<string, string> = {
  'Truganina': 'truganina',
  'Hoppers Crossing': 'hoppers-crossing',
  'Werribee': 'werribee',
  'Tarneit': 'tarneit',
  'Point Cook': 'point-cook',
  'Laverton': 'laverton',
  'Altona Meadows': 'altona-meadows',
  'Williams Landing': 'williams-landing',
}

export default function ServiceAreas() {
  return (
    <SectionWrapper className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-brand-green-light text-brand-green font-semibold text-sm px-4 py-2 rounded-full mb-4">Coverage Area</span>
          <h2 className="font-heading font-900 text-dark-text text-4xl md:text-5xl mb-4">
            Serving West Melbourne<br />& Surrounding Suburbs
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-4xl overflow-hidden shadow-lg border border-light-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200755.31744388296!2d144.6287!3d-37.8136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d514af0b56b%3A0x5045675218ce720!2sWest%20Melbourne%20VIC%203003!5e0!3m2!1sen!2sau!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="UaDay Cleaning service areas in West Melbourne"
            />
          </motion.div>

          {/* Suburb chips */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <MapPin className="w-5 h-5 text-brand-green" />
              <h3 className="font-heading font-800 text-dark-text text-xl">Suburbs We Serve</h3>
            </div>
            <div className="flex flex-wrap gap-3 mb-6">
              {suburbs.map((suburb, i) => {
                const slug = suburbSlugs[suburb]
                const chip = (
                  <motion.span
                    key={suburb}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                      slug
                        ? 'bg-brand-green-light border-brand-green/20 text-brand-green hover:bg-brand-green hover:text-white cursor-pointer'
                        : 'bg-off-white border-light-border text-body-text'
                    }`}
                  >
                    <MapPin className="w-3 h-3" />
                    {suburb}
                  </motion.span>
                )

                return slug ? (
                  <Link key={suburb} href={`/service-areas/${slug}`}>{chip}</Link>
                ) : chip
              })}
            </div>
            <p className="text-body-text text-sm leading-relaxed mb-5">
              Don&apos;t see your suburb? We may still service your area. Give us a call or send an enquiry and we&apos;ll let you know.
            </p>
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
            >
              View All Service Areas →
            </Link>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
