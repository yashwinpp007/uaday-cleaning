import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Leaf, Phone } from 'lucide-react'
import Button3D from '@/components/ui/Button3D'
import Accordion from '@/components/ui/Accordion'
import FinalCTA from '@/components/sections/FinalCTA'
import FAQSchema from '@/components/schema/FAQSchema'
import ServiceSchema from '@/components/schema/ServiceSchema'

export const metadata: Metadata = {
  title: 'Residential Cleaning Services Deanside | UaDay Cleaning',
  description:
    'Professional residential cleaning services in Deanside. Regular weekly, fortnightly & one-off cleans. Eco-friendly products, fully insured. Book online today.',
  alternates: { canonical: 'https://uadaycleaning.com.au/services/residential-cleaning' },
}

const checklist = [
  'All rooms vacuumed and mopped',
  'Dusting of all surfaces, shelves, and skirting boards',
  'Kitchen benches, stovetop, and appliance exteriors cleaned',
  'Bathrooms and toilets scrubbed and sanitised',
  'Mirrors and glass surfaces streak-free polished',
  'Bins emptied throughout the home',
  'Cobwebs removed from ceilings and corners',
  'Light switches and door handles wiped down',
  'Laundry sink and surfaces cleaned',
  'Window sills and tracks cleaned',
]

const faqs = [
  { question: 'How often should I have my home professionally cleaned?', answer: 'Most households benefit from a fortnightly professional clean. Busy families or those with pets may prefer weekly. We tailor our schedule to your lifestyle and budget.' },
  { question: 'Do I need to be home during the clean?', answer: 'No, many of our clients provide a key or door code. We are fully insured and our team is background-checked and trustworthy.' },
  { question: 'What is not included in a standard residential clean?', answer: 'Standard cleans do not include inside ovens, inside fridges, or inside windows. These can be added for an additional fee. Our deep clean package includes these items.' },
  { question: 'Do you use eco-friendly products?', answer: 'Yes! We exclusively use certified eco-friendly, non-toxic cleaning products that are safe for children, pets, and the environment.' },
]

export default function ResidentialCleaningPage() {
  return (
    <>
      <ServiceSchema
        name="Residential Cleaning Deanside"
        description="Professional residential cleaning services in Deanside. Regular weekly, fortnightly and one-off cleans with eco-friendly products."
        url="https://uadaycleaning.com.au/services/residential-cleaning"
      />
      <FAQSchema items={faqs} />

      {/* Hero */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-brand-green-light to-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Link href="/services" className="text-body-text text-sm hover:text-brand-green">Services</Link>
                <span className="text-body-text text-sm">/</span>
                <span className="text-brand-green text-sm font-semibold">Residential Cleaning</span>
              </div>
              <span className="inline-flex items-center gap-2 bg-brand-green-light border border-brand-green/20 rounded-full px-4 py-2 mb-5">
                <span className="w-2 h-2 bg-brand-green rounded-full" />
                <span className="text-brand-green font-semibold text-sm">Deanside&apos;s #1 Home Cleaners</span>
              </span>
              <h1 className="font-heading font-900 text-dark-text text-5xl md:text-6xl mb-5 leading-tight">
                Residential Cleaning Services Deanside
              </h1>
              <p className="text-body-text text-lg leading-relaxed mb-8">
                We offer professional residential cleaning services tailored to your home and lifestyle. Whether you need a regular clean to keep on top of things, or a one-off tidy before guests arrive — our trusted, insured team has you covered.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button3D href="/get-a-quote" size="lg">Get a Free Quote</Button3D>
                <a href="tel:0414375051" className="flex items-center gap-2 text-brand-green font-semibold">
                  <Phone className="w-5 h-5" /> 0414 375 051
                </a>
              </div>
            </div>
            <div className="relative">
              {/* TODO: Replace with real residential clean photo */}
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop"
                alt="Professionally cleaned home in Deanside"
                width={600}
                height={500}
                className="rounded-4xl shadow-2xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-3xl md:text-4xl text-center mb-10">What&apos;s Included in Every Clean</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {checklist.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-brand-green-light rounded-3xl px-5 py-4"
              >
                <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                <span className="text-dark-text text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-off-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-3xl md:text-4xl text-center mb-3">Simple, Transparent Pricing</h2>
          <p className="text-body-text text-center mb-10">Final pricing confirmed after booking. No hidden fees.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: 'Regular Clean', price: 'From $80', desc: 'Ideal for fortnightly or weekly maintenance cleans.', features: ['2–3 bedrooms', '1–2 bathrooms', 'All standard areas'] },
              { name: 'Standard Clean', price: 'From $120', desc: 'For larger homes or first-time clients.', features: ['3–4 bedrooms', '2 bathrooms', 'Laundry included'], popular: true },
              { name: 'Large Home Clean', price: 'From $180', desc: 'For large or executive homes with extra areas.', features: ['5+ bedrooms', 'Multiple bathrooms', 'Additional areas'] },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-5xl p-7 border-2 ${plan.popular ? 'bg-brand-green-light border-brand-green' : 'bg-white border-light-border'}`}>
                {plan.popular && <span className="inline-block bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Most Popular</span>}
                <h3 className="font-heading font-800 text-dark-text text-xl mb-1">{plan.name}</h3>
                <p className="text-brand-green font-bold text-2xl mb-3">{plan.price}</p>
                <p className="text-body-text text-sm mb-4">{plan.desc}</p>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-body-text">
                      <CheckCircle className="w-4 h-4 text-brand-green" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eco Products */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-brand-green-light rounded-5xl p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-brand-green rounded-3xl flex items-center justify-center flex-shrink-0">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="font-heading font-800 text-dark-text text-2xl mb-3">We Use Only Eco-Friendly Products</h2>
              <p className="text-body-text leading-relaxed mb-4">
                All our cleaning products are certified eco-friendly, non-toxic, and biodegradable. Safe for children, pets, and the environment — without sacrificing cleaning power.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Certified Non-Toxic', 'Child Safe', 'Pet Safe', 'Biodegradable', 'Australian Made'].map((tag) => (
                  <span key={tag} className="bg-brand-green text-white text-xs font-semibold px-3 py-1.5 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-off-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-3xl md:text-4xl text-center mb-10">Frequently Asked Questions</h2>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* Sticky Book Now */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:block">
        <div className="bg-white/90 backdrop-blur-xl rounded-full px-6 py-3 shadow-card-hover border border-light-border flex items-center gap-4">
          <span className="text-dark-text font-semibold text-sm">Ready to book?</span>
          <Button3D href="/get-a-quote" size="sm">Book Now</Button3D>
        </div>
      </div>

      <FinalCTA />
    </>
  )
}
