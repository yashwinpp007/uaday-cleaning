'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react'
import Button3D from '@/components/ui/Button3D'
import FinalCTA from '@/components/sections/FinalCTA'
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider'

const categories = ['All', 'Residential', 'Commercial', 'End of Lease', 'Deep Clean']

const images = [
  { id: 1,  src: '/images/gallery/carpet-room.jpg',         alt: 'Carpet steam cleaned to perfection',            category: 'End of Lease', location: 'Truganina',        service: 'Carpet Steam Clean' },
  { id: 2,  src: '/images/gallery/carpet-steam-closeup.jpg',alt: 'Professional carpet steam cleaning in progress', category: 'Residential',  location: 'Hoppers Crossing', service: 'Carpet Steam Clean' },
  { id: 3,  src: '/images/gallery/tiles-mopped.jpg',        alt: 'Gleaming marble tiles after deep clean',        category: 'Residential',  location: 'Point Cook',       service: 'Deep Clean' },
  { id: 4,  src: '/images/gallery/bathroom-bathtub.jpg',    alt: 'Spotless bathroom with bathtub and shower',     category: 'Residential',  location: 'Tarneit',          service: 'Regular Clean' },
  { id: 5,  src: '/images/gallery/pressure-wash.jpg',       alt: 'Rangehood filters pressure washed clean',       category: 'Deep Clean',   location: 'Werribee',         service: 'Deep Clean' },
  { id: 6,  src: '/images/gallery/oven-after.jpg',          alt: 'Oven restored to showroom condition',           category: 'Deep Clean',   location: 'Tarneit',          service: 'Oven Deep Clean' },
  { id: 7,  src: '/images/gallery/bathroom-clean-1.jpg',    alt: 'End of lease bathroom — bond back ready',       category: 'End of Lease', location: 'Laverton',         service: 'End of Lease' },
  { id: 8,  src: '/images/gallery/bathroom-clean-2.jpg',    alt: 'Sparkling bathroom after end of lease clean',   category: 'End of Lease', location: 'Altona Meadows',   service: 'End of Lease' },
  { id: 9,  src: '/images/gallery/balcony-clean.jpg',       alt: 'CBD apartment balcony cleaned for inspection',  category: 'End of Lease', location: 'Melbourne CBD',    service: 'End of Lease' },
  { id: 10, src: '/images/gallery/oven-clean-2.jpg',        alt: 'Thoroughly cleaned oven interior',              category: 'Deep Clean',   location: 'Deanside',         service: 'Oven Deep Clean' },
  { id: 11, src: '/images/gallery/timber-floor.jpg',        alt: 'Polished timber floors gleaming after clean',   category: 'Residential',  location: 'Williamstown',     service: 'Deep Clean' },
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
      <section className="pt-40 pb-16 bg-gradient-to-br from-brand-green-light to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-brand-green text-white font-semibold text-sm px-4 py-2 rounded-full mb-5">Our Work</span>
          <h1 className="font-heading font-900 text-dark-text text-5xl md:text-6xl mb-5">Cleaning Gallery</h1>
          <p className="text-body-text text-xl max-w-2xl mx-auto mb-8">
            Real results from real jobs — see the UaDay difference across Melbourne and surrounding suburbs.
          </p>
        </div>
      </section>

      {/* Before / After Slider */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-3xl text-center mb-3">Before &amp; After</h2>
          <p className="text-center text-body-text mb-8">Drag the slider to reveal the transformation</p>
          <BeforeAfterSlider
            beforeSrc="/images/gallery/oven-before.jpg"
            afterSrc="/images/gallery/oven-after.jpg"
            beforeAlt="Oven before UaDay deep clean"
            afterAlt="Oven after UaDay deep clean — spotless"
          />
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

          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                height={900}
                className="rounded-4xl w-full object-contain max-h-[80vh]"
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
