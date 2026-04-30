import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import Button3D from '@/components/ui/Button3D'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Cleaning Services Across Western Melbourne | UaDay Cleaning',
  description:
    'Professional cleaning services in Truganina, Hoppers Crossing, Werribee, Tarneit, Point Cook, Laverton and more. Based in Deanside, servicing all of Western Melbourne.',
  alternates: { canonical: 'https://uadaycleaning.com.au/service-areas' },
}

const linkedSuburbs = [
  { name: 'Truganina', slug: 'truganina', postcode: '3029' },
  { name: 'Hoppers Crossing', slug: 'hoppers-crossing', postcode: '3029' },
  { name: 'Werribee', slug: 'werribee', postcode: '3030' },
  { name: 'Tarneit', slug: 'tarneit', postcode: '3029' },
  { name: 'Point Cook', slug: 'point-cook', postcode: '3030' },
  { name: 'Laverton', slug: 'laverton', postcode: '3028' },
  { name: 'Altona Meadows', slug: 'altona-meadows', postcode: '3028' },
  { name: 'Williams Landing', slug: 'williams-landing', postcode: '3027' },
]

const otherSuburbs = [
  'Deer Park', 'Sunshine', 'Footscray', 'Yarraville', 'Williamstown',
  'Newport', 'Altona', 'Brooklyn', 'Laverton North', 'Derrimut',
  'Melbourne CBD', 'Toorak', 'South Yarra', 'Brunswick',
  'Epping', 'Thomastown', 'Tullamarine',
]

export default function ServiceAreasPage() {
  return (
    <>
      <section className="pt-40 pb-16 bg-gradient-to-br from-brand-green-light to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-brand-green text-white font-semibold text-sm px-4 py-2 rounded-full mb-5">Coverage</span>
          <h1 className="font-heading font-900 text-dark-text text-5xl md:text-6xl mb-5">
            Cleaning Services Across Western Melbourne
          </h1>
          <p className="text-body-text text-xl max-w-2xl mx-auto mb-8">
            We service Deanside and all surrounding suburbs. Professional residential, commercial and end of lease cleaning wherever you are.
          </p>
          <Button3D href="/get-a-quote" size="lg">Get a Free Quote</Button3D>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-4xl overflow-hidden shadow-lg border border-light-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.123456789!2d144.729!3d-37.683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6778e3e8a4dcb%3A0x1a2b3c4d5e6f7a8b!2sDeanside%20VIC%203336!5e0!3m2!1sen!2sau!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="UaDay Cleaning service areas map"
            />
          </div>
        </div>
      </section>

      {/* Suburb pages */}
      <section className="py-16 bg-off-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-3xl mb-3">Suburbs We Serve</h2>
          <p className="text-body-text mb-8">Click your suburb to see local cleaning information and pricing.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {linkedSuburbs.map((suburb) => (
              <Link
                key={suburb.slug}
                href={`/service-areas/${suburb.slug}`}
                className="bg-white rounded-3xl p-5 border-2 border-light-border hover:border-brand-green hover:bg-brand-green-light transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-green-light rounded-xl flex items-center justify-center group-hover:bg-brand-green transition-colors">
                    <MapPin className="w-5 h-5 text-brand-green group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-heading font-700 text-dark-text text-sm group-hover:text-brand-green">{suburb.name}</p>
                    <p className="text-body-text text-xs">{suburb.postcode}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <h3 className="font-heading font-800 text-dark-text text-xl mb-4">Also Servicing</h3>
          <div className="flex flex-wrap gap-3">
            {otherSuburbs.map((suburb) => (
              <span key={suburb} className="bg-white border border-light-border rounded-full px-4 py-2 text-sm text-body-text flex items-center gap-2">
                <MapPin className="w-3 h-3 text-brand-green" />
                {suburb}
              </span>
            ))}
          </div>
          <p className="text-body-text text-sm mt-5">
            Don&apos;t see your suburb? <Link href="/contact" className="text-brand-green underline">Contact us</Link> — we may still service your area!
          </p>
        </div>
      </section>

      {/* Local SEO Text */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-2xl mb-4">Professional Cleaning Across Western Melbourne</h2>
          <div className="text-body-text leading-relaxed space-y-4">
            <p>UaDay Cleaning, based in Deanside, provides professional residential, commercial, and end of lease cleaning services throughout Western Melbourne, Victoria.</p>
            <p>Our service area covers the rapidly growing corridors of Tarneit, Truganina, and Hoppers Crossing in Melbourne&apos;s outer west, through to established suburbs like Werribee, Point Cook, and Altona Meadows. We also service the inner-west suburbs of Footscray, Yarraville, and Williamstown.</p>
            <p>Whether you&apos;re in a new estate in Williams Landing, a family home in Laverton, or a commercial property in Sunshine — UaDay Cleaning brings the same level of professionalism, eco-friendly products, and guaranteed results to every clean.</p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
