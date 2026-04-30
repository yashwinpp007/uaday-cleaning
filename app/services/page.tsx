import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, Building2, Key, Sparkles, CheckCircle, ArrowRight, Plus } from 'lucide-react'
import Button3D from '@/components/ui/Button3D'
import FinalCTA from '@/components/sections/FinalCTA'
import ServiceSchema from '@/components/schema/ServiceSchema'

export const metadata: Metadata = {
  title: 'Cleaning Services in Deanside | UaDay Cleaning',
  description:
    'Professional residential, commercial, end of lease and deep cleaning services in Deanside. Eco-friendly, fully insured. View pricing and get a free quote.',
  alternates: { canonical: 'https://uadaycleaning.com.au/services' },
}

const services = [
  {
    icon: Home,
    title: 'Residential Cleaning',
    desc: 'Regular weekly, fortnightly or one-off cleans for homes of all sizes. Tailored checklists and eco-friendly products.',
    href: '/services/residential-cleaning',
    from: '$80',
    features: ['Weekly / Fortnightly', 'One-off Deep Cleans', 'Eco-friendly Products', 'All Areas Covered'],
  },
  {
    icon: Building2,
    title: 'Commercial Cleaning',
    desc: 'Professional office and business cleaning including retail, medical centres, childcare and more.',
    href: '/services/commercial-cleaning',
    from: '$120',
    features: ['Offices & Retail', 'Medical Centres', 'Childcare Facilities', 'Flexible Scheduling'],
  },
  {
    icon: Key,
    title: 'End of Lease Cleaning',
    desc: 'Bond-back guaranteed REIV-aligned cleans. We work to your property manager\'s checklist to ensure you get your full bond back.',
    href: '/services/end-of-lease-cleaning',
    from: '$250',
    features: ['Bond-Back Guarantee', 'REIV Checklist', 'Carpet Steam Add-on', 'Re-clean Guarantee'],
    featured: true,
  },
  {
    icon: Sparkles,
    title: 'Deep / Spring Cleaning',
    desc: 'A thorough room-by-room clean to restore any property to its best condition. Perfect for seasonal cleaning or post-renovation.',
    href: '/services/deep-cleaning',
    from: '$180',
    features: ['Room-by-Room Scope', 'Oven & Appliances', 'Window Tracks & Sills', 'Eco Products'],
  },
]

const addOns = [
  { name: 'Carpet Steam Cleaning', price: 'From $80' },
  { name: 'Oven Deep Clean', price: 'From $50' },
  { name: 'Window Cleaning (interior)', price: 'From $40' },
  { name: 'Garage Clean', price: 'From $60' },
  { name: 'Wall Washing', price: 'From $45' },
  { name: 'Balcony / Outdoor Clean', price: 'From $35' },
]

const comparisonRows = [
  { feature: 'Regular scheduling', residential: true, commercial: true, eol: false },
  { feature: 'Bond-back guarantee', residential: false, commercial: false, eol: true },
  { feature: 'Eco-friendly products', residential: true, commercial: true, eol: true },
  { feature: 'REIV checklist', residential: false, commercial: false, eol: true },
  { feature: 'Flexible scheduling', residential: true, commercial: true, eol: false },
  { feature: 'Carpet steam (add-on)', residential: true, commercial: true, eol: true },
]

export default function ServicesPage() {
  return (
    <>
      <ServiceSchema
        name="Cleaning Services Deanside"
        description="Professional residential, commercial and end of lease cleaning services in Deanside, VIC."
        url="https://uadaycleaning.com.au/services"
      />

      {/* Hero */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-brand-green-light to-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-brand-green text-white font-semibold text-sm px-4 py-2 rounded-full mb-5">All Services</span>
          <h1 className="font-heading font-900 text-dark-text text-5xl md:text-6xl mb-6">
            Cleaning Services in<br />Deanside
          </h1>
          <p className="text-body-text text-xl max-w-2xl mx-auto mb-8">
            From regular home maintenance to full bond-back guarantees — we have the right cleaning solution for every situation.
          </p>
          <Button3D href="/get-a-quote" size="lg">Get a Free Quote</Button3D>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`rounded-5xl p-8 border-2 relative ${service.featured ? 'bg-brand-green-light border-brand-green' : 'bg-off-white border-light-border'}`}
              >
                {service.featured && (
                  <span className="absolute -top-3 left-6 bg-brand-green text-white text-xs font-bold px-4 py-1.5 rounded-full">Most Popular</span>
                )}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0">
                    <service.icon className="w-7 h-7 text-brand-green" />
                  </div>
                  <div>
                    <h2 className="font-heading font-800 text-dark-text text-2xl">{service.title}</h2>
                    <p className="text-brand-green font-semibold text-sm">From {service.from}</p>
                  </div>
                </div>
                <p className="text-body-text leading-relaxed mb-6">{service.desc}</p>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-body-text">
                      <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-5 py-2.5 rounded-2xl hover:bg-brand-green-dark transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-off-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-3xl md:text-4xl text-center mb-10">Compare Services</h2>
          <div className="bg-white rounded-5xl shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-brand-green-light">
                    <th className="text-left p-5 font-heading font-700 text-dark-text">Feature</th>
                    <th className="text-center p-5 font-heading font-700 text-dark-text">Residential</th>
                    <th className="text-center p-5 font-heading font-700 text-dark-text">Commercial</th>
                    <th className="text-center p-5 font-heading font-700 text-brand-green">End of Lease</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-off-white'}>
                      <td className="p-5 text-body-text text-sm">{row.feature}</td>
                      <td className="p-5 text-center">{row.residential ? <CheckCircle className="w-5 h-5 text-brand-green mx-auto" /> : <span className="text-gray-300 text-lg">—</span>}</td>
                      <td className="p-5 text-center">{row.commercial ? <CheckCircle className="w-5 h-5 text-brand-green mx-auto" /> : <span className="text-gray-300 text-lg">—</span>}</td>
                      <td className="p-5 text-center">{row.eol ? <CheckCircle className="w-5 h-5 text-brand-green mx-auto" /> : <span className="text-gray-300 text-lg">—</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading font-900 text-dark-text text-3xl md:text-4xl mb-3">Service Add-Ons</h2>
            <p className="text-body-text">Enhance any booking with these additional services</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon) => (
              <div key={addon.name} className="flex items-center justify-between bg-brand-green-light rounded-3xl px-5 py-4 border border-brand-green/10">
                <div className="flex items-center gap-3">
                  <Plus className="w-4 h-4 text-brand-green" />
                  <span className="font-semibold text-dark-text text-sm">{addon.name}</span>
                </div>
                <span className="text-brand-green font-bold text-sm">{addon.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-body-text text-sm mt-6">* Prices are indicative. Final price confirmed at time of booking.</p>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
