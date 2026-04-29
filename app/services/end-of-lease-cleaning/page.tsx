import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Shield, Phone, AlertCircle } from 'lucide-react'
import Button3D from '@/components/ui/Button3D'
import Accordion from '@/components/ui/Accordion'
import FinalCTA from '@/components/sections/FinalCTA'
import FAQSchema from '@/components/schema/FAQSchema'
import ServiceSchema from '@/components/schema/ServiceSchema'

export const metadata: Metadata = {
  title: 'End of Lease Cleaning Deanside — Bond Back Guaranteed | UaDay',
  description:
    'End of lease cleaning in Deanside with a 100% bond-back guarantee. REIV-aligned checklists, carpet steam add-on available. Book at least 48hrs before inspection.',
  alternates: { canonical: 'https://uadaycleaning.com.au/services/end-of-lease-cleaning' },
}

const checklist = [
  'All rooms vacuumed, swept and mopped',
  'All surfaces dusted including skirting boards and architraves',
  'Kitchen: benches, stovetop, rangehood, sink thoroughly cleaned',
  'Oven cleaned inside and out (can add carpet steam)',
  'Cupboards and drawers wiped inside and out',
  'Bathroom: tiles, grout, bath, shower, toilet disinfected',
  'Mirrors and glass polished streak-free',
  'Window sills, tracks, and ledges cleaned',
  'Light fittings dusted',
  'Walls spot-cleaned for marks',
  'Garage floor swept and cleaned',
  'Laundry: sink, tub, surfaces cleaned',
]

const pricing = [
  { size: '1 Bedroom / Studio', price: '$250–$320', duration: '3–4 hrs' },
  { size: '2 Bedroom', price: '$320–$420', duration: '4–5 hrs' },
  { size: '3 Bedroom', price: '$420–$550', duration: '5–7 hrs' },
  { size: '4 Bedroom', price: '$550–$700', duration: '7–9 hrs' },
  { size: '5 Bedroom +', price: 'POA', duration: 'Contact us' },
]

const faqs = [
  { question: 'What is the bond-back guarantee?', answer: 'If your real estate agent or property manager is not satisfied with our end of lease clean, we will return to the property and re-clean the specified areas at absolutely no charge to you — until you get your bond back.' },
  { question: 'Do you follow the REIV checklist?', answer: 'Yes. We use a comprehensive cleaning checklist aligned with the Real Estate Institute of Victoria (REIV) standards to ensure every area meets inspection requirements.' },
  { question: 'How far in advance should I book?', answer: 'We strongly recommend booking at least 48 hours before your final inspection to allow time for scheduling and, if needed, a re-clean. However, we also offer urgent same-day bookings — call us for availability.' },
  { question: 'Is carpet steam cleaning included?', answer: 'Carpet steam cleaning is available as an add-on service, starting from $80 for one bedroom. We highly recommend it for properties with carpets as most leases require professional carpet cleaning.' },
  { question: 'Do you provide a receipt/invoice for the property manager?', answer: 'Yes! We provide a detailed tax invoice that you can submit to your property manager as proof of professional cleaning.' },
]

export default function EndOfLeasePage() {
  return (
    <>
      <ServiceSchema
        name="End of Lease Cleaning Deanside"
        description="Bond-back guaranteed end of lease cleaning in Deanside. REIV-aligned checklists."
        url="https://uadaycleaning.com.au/services/end-of-lease-cleaning"
      />
      <FAQSchema items={faqs} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-green-light to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Link href="/services" className="text-body-text text-sm hover:text-brand-green">Services</Link>
                <span className="text-body-text text-sm">/</span>
                <span className="text-brand-green text-sm font-semibold">End of Lease Cleaning</span>
              </div>

              {/* Bond-back guarantee banner */}
              <div className="inline-flex items-center gap-3 bg-brand-green text-white rounded-full px-5 py-3 mb-5 animate-pulse-ring">
                <Shield className="w-5 h-5" />
                <span className="font-heading font-800 text-sm">100% Bond-Back Guarantee</span>
              </div>

              <h1 className="font-heading font-900 text-dark-text text-5xl md:text-6xl mb-5 leading-tight">
                End of Lease Cleaning Deanside — Bond Back Guaranteed
              </h1>
              <p className="text-body-text text-lg leading-relaxed mb-8">
                Moving out? Our REIV-aligned end of lease cleaning service ensures your property meets every inspection standard — or we re-clean for free until you get your full bond back.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button3D href="/get-a-quote" size="lg">Book Now</Button3D>
                <a href="tel:0414375051" className="flex items-center gap-2 text-brand-green font-semibold">
                  <Phone className="w-5 h-5" /> 0414 375 051
                </a>
              </div>
            </div>
            <div>
              {/* TODO: Replace with real EOL cleaning photo */}
              <Image
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=500&fit=crop"
                alt="End of lease cleaning service Deanside"
                width={600}
                height={500}
                className="rounded-4xl shadow-2xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="bg-brand-yellow py-5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-center">
            <AlertCircle className="w-5 h-5 text-dark-text flex-shrink-0" />
            <p className="text-dark-text font-semibold text-sm">
              <strong>Important:</strong> Book your end of lease clean at least <strong>48 hours before your final inspection</strong> to allow time for scheduling and re-cleans if needed.
            </p>
          </div>
        </div>
      </section>

      {/* REIV Checklist */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-3xl md:text-4xl text-center mb-3">REIV-Aligned Cleaning Checklist</h2>
          <p className="text-body-text text-center mb-10">Every item on the real estate standard checklist — covered.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {checklist.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-brand-green-light rounded-3xl px-5 py-4">
                <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                <span className="text-dark-text text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing by property size */}
      <section className="py-16 bg-off-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-3xl md:text-4xl text-center mb-3">Pricing by Property Size</h2>
          <p className="text-body-text text-center mb-10">Indicative prices. Final quote confirmed after booking.</p>
          <div className="bg-white rounded-5xl shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-brand-green text-white">
                    <th className="text-left p-5 font-heading font-700">Property Size</th>
                    <th className="text-center p-5 font-heading font-700">Price Range</th>
                    <th className="text-center p-5 font-heading font-700">Est. Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((row, i) => (
                    <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-off-white'}>
                      <td className="p-5 font-semibold text-dark-text">{row.size}</td>
                      <td className="p-5 text-center text-brand-green font-bold">{row.price}</td>
                      <td className="p-5 text-center text-body-text text-sm">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-body-text text-sm mt-4">Carpet steam cleaning add-on from $80. Oven deep clean from $50.</p>
        </div>
      </section>

      {/* Bond Guarantee */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-brand-green rounded-5xl p-10 text-white text-center">
            <Shield className="w-16 h-16 mx-auto mb-4 text-brand-yellow" />
            <h2 className="font-heading font-900 text-white text-3xl mb-4">Our Bond-Back Guarantee</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-6">
              If your property manager is not happy with any aspect of our clean, we will return to re-clean those specific areas at <strong className="text-white">absolutely no additional cost</strong>.
            </p>
            <Button3D href="/get-a-quote" variant="yellow" size="lg">Book with Confidence</Button3D>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-off-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-3xl md:text-4xl text-center mb-10">FAQ</h2>
          <Accordion items={faqs} />
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
