'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react'
import Button3D from '@/components/ui/Button3D'
import FinalCTA from '@/components/sections/FinalCTA'
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider'

const categories = ['All', 'Residential', 'Commercial', 'End of Lease']

// TODO: Replace with real before/after photos
const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=500&fit=crop', alt: 'Spotless kitchen after professional clean', category: 'Residential', location: 'Tarneit', service: 'Deep Clean' },
  { id: 2, src: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&h=500&fit=crop', alt: 'Sparkling bathroom after end of lease clean', category: 'End of Lease', location: 'Point Cook', service: 'End of Lease' },
  { id: 3, src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop', alt: 'Clean modern office space', category: 'Commercial', location: 'Hoppers Crossing', service: 'Commercial' },
  { id: 4, src: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&h=500&fit=crop', alt: 'Pristine living room after residential clean', category: 'Residential', location: 'Werribee', service: 'Regular Clean' },
  { id: 5, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop', alt: 'Gleaming lounge after deep clean', category: 'Residential', location: 'Truganina', service: 'Deep Clean' },
  { id: 6, src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=500&fit=crop', alt: 'Professional team cleaning', category: 'Commercial', location: 'Laverton', service: 'Commercial' },
  { id: 7, src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600&h=500&fit=crop', alt: 'Clean bedroom after end of lease', category: 'End of Lease', location: 'Altona Meadows', service: 'End of Lease' },
  { id: 8, src: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600&h=500&fit=crop', alt: 'Spotless laundry room', category: 'Residential', location: 'Williams Landing', service: 'Regular Clean' },
]

export default function GalleryPage() {
  const [filter, setFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = filter === 'All' ? images : images.filter((img) => img.category === filter)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null))
  const nextImage = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null))

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-green-light to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-brand-green text-white font-semibold text-sm px-4 py-2 rounded-full mb-5">Our Work</span>
          <h1 className="font-heading font-900 text-dark-text text-5xl md:text-6xl mb-5">Cleaning Gallery</h1>
          <p className="text-body-text text-xl max-w-2xl mx-auto mb-8">
            See the results of our professional cleaning services across Deanside and surrounding suburbs.
          </p>
        </div>
      </section>

      {/* Before/After Slider */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-3xl text-center mb-8">Before & After</h2>
          <BeforeAfterSlider
            beforeSrc="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=500&fit=crop"
            afterSrc="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&h=500&fit=crop"
            beforeAlt="Kitchen before professional cleaning"
            afterAlt="Kitchen after professional cleaning by UaDay"
          />
          <p className="text-center text-body-text text-sm mt-4">Drag the slider to reveal the transformation</p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-16 bg-off-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  filter === cat
                    ? 'bg-brand-green text-white shadow-3d-green'
                    : 'bg-white text-body-text border border-light-border hover:border-brand-green hover:text-brand-green'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openLightbox(i)}
                  className="relative rounded-4xl overflow-hidden group cursor-pointer shadow-card"
                  style={{ height: i % 3 === 0 ? '280px' : '220px' }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-white font-heading font-700 text-sm">{img.service}</p>
                    <div className="flex items-center gap-1 text-white/80 text-xs">
                      <MapPin className="w-3 h-3" />
                      {img.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); prevImage() }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); nextImage() }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                width={1200}
                height={800}
                className="rounded-4xl w-full object-cover max-h-[80vh]"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm px-4 py-2 rounded-2xl backdrop-blur-sm">
                <p className="font-semibold">{filtered[lightboxIndex].service}</p>
                <p className="text-white/70 text-xs flex items-center gap-1">
                  <MapPin className="w-3 h-3" />{filtered[lightboxIndex].location}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-12 bg-white text-center">
        <p className="text-body-text text-lg mb-5">Like what you see? Let us transform your space too.</p>
        <Button3D href="/get-a-quote" size="lg">Get a Free Quote</Button3D>
      </section>

      <FinalCTA />
    </>
  )
}
