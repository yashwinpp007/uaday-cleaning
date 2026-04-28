'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const images = [
  { src: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=500&fit=crop', alt: 'Kitchen after cleaning', label: 'Kitchen Clean', location: 'Tarneit' },
  { src: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&h=350&fit=crop', alt: 'Bathroom deep clean', label: 'Bathroom Deep Clean', location: 'Point Cook' },
  { src: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&h=500&fit=crop', alt: 'Living room clean', label: 'Living Room', location: 'Werribee' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop', alt: 'Office commercial clean', label: 'Commercial Office', location: 'Hoppers Crossing' },
]

export default function GalleryStrip() {
  return (
    <SectionWrapper className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4"
        >
          <div>
            <span className="inline-block bg-brand-green-light text-brand-green font-semibold text-sm px-4 py-2 rounded-full mb-3">Recent Work</span>
            <h2 className="font-heading font-900 text-dark-text text-4xl md:text-5xl">Our Work in Action</h2>
          </div>
          <Link href="/gallery" className="text-brand-green font-semibold hover:text-brand-green-dark transition-colors flex-shrink-0">
            View All Work →
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-4xl overflow-hidden group cursor-pointer shadow-card"
              style={{ height: i % 2 === 0 ? '280px' : '220px' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-heading font-700 text-sm">{img.label}</p>
                <div className="flex items-center gap-1 text-white/80 text-xs">
                  <MapPin className="w-3 h-3" />
                  {img.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
