import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Building2, Clock, Shield, Phone } from 'lucide-react'
import Button3D from '@/components/ui/Button3D'
import Accordion from '@/components/ui/Accordion'
import FinalCTA from '@/components/sections/FinalCTA'
import FAQSchema from '@/components/schema/FAQSchema'
import ServiceSchema from '@/components/schema/ServiceSchema'

export const metadata: Metadata = {
  title: 'Commercial Cleaning West Melbourne | UaDay Cleaning',
  description:
    'Professional commercial cleaning in West Melbourne. Offices, retail, medical centres & childcare. Flexible scheduling, fully insured. Get a free quote today.',
  alternates: { canonical: 'https://uadaycleaning.com.au/services/commercial-cleaning' },
}

const industries = [
  { icon: Building2, name: 'Office Buildings', desc: 'Keep your workspace productive and professional' },
  { icon: Building2, name: 'Retail Stores', desc: 'Create a welcoming shopping environment' },
  { icon: Shield, name: 'Medical Centres', desc: 'Hospital-grade hygiene and sanitation' },
  { icon: Clock, name: 'Childcare Centres', desc: 'Safe, non-toxic cleaning for young children' },
  { icon: Building2, name: 'Restaurants & Cafes', desc: 'Kitchen and front-of-house cleaning' },
  { icon: Building2, name: 'Warehouses', desc: 'Large-scale industrial cleaning solutions' },
]

const faqs = [
  { question: 'Do you offer after-hours commercial cleaning?', answer: 'Yes! We can schedule cleans outside business hours — before opening, after closing, or overnight — to minimise disruption to your operations.' },
  { question: 'Can I set up a regular commercial cleaning contract?', answer: 'Absolutely. We offer daily, weekly, and fortnightly commercial cleaning contracts with service level agreements to suit your business needs.' },
  { question: 'Are your commercial cleaners police-checked?', answer: 'Yes. All our commercial cleaning team members are police-checked and fully insured. We can provide copies of certificates upon request.' },
  { question: 'Do you supply all cleaning equipment for commercial sites?', answer: 'Yes, we bring all professional-grade equipment and eco-friendly commercial cleaning products to every job. No setup required on your end.' },
]

export default function CommercialCleaningPage() {
  return (
    <>
      <ServiceSchema
        name="Commercial Cleaning West Melbourne"
        description="Professional commercial cleaning for offices, retail, medical centres and more in West Melbourne."
        url="https://uadaycleaning.com.au/services/commercial-cleaning"
      />
      <FAQSchema items={faqs} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Link href="/services" className="text-body-text text-sm hover:text-brand-green">Services</Link>
                <span className="text-body-text text-sm">/</span>
                <span className="text-brand-green text-sm font-semibold">Commercial Cleaning</span>
              </div>
              <h1 className="font-heading font-900 text-dark-text text-5xl md:text-6xl mb-5 leading-tight">
                Commercial Cleaning West Melbourne
              </h1>
              <p className="text-body-text text-lg leading-relaxed mb-8">
                A clean workplace is a productive one. We provide professional commercial cleaning services across West Melbourne — tailored to your industry, schedule, and standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button3D href="/get-a-quote" size="lg">Get a Free Quote</Button3D>
                <a href="tel:0412345678" className="flex items-center gap-2 text-brand-green font-semibold">
                  <Phone className="w-5 h-5" /> 0412 345 678
                </a>
              </div>
            </div>
            <div>
              {/* TODO: Replace with real commercial cleaning photo */}
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop"
                alt="Professional commercial office cleaning in West Melbourne"
                width={600}
                height={500}
                className="rounded-4xl shadow-2xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-3xl md:text-4xl text-center mb-10">Industries We Serve</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-purple-50 rounded-4xl p-6 border border-purple-100">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                  <ind.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-heading font-800 text-dark-text text-lg mb-2">{ind.name}</h3>
                <p className="text-body-text text-sm">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Scheduling */}
      <section className="py-16 bg-off-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-5xl p-10">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-14 h-14 bg-brand-green rounded-2xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="font-heading font-800 text-dark-text text-2xl mb-2">Flexible Scheduling Around Your Business</h2>
                <p className="text-body-text">We work around your business hours — early morning, after-hours, or overnight cleans available.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {['Before Opening (6am–9am)', 'After Hours (6pm–10pm)', 'Weekend Cleans'].map((time) => (
                <div key={time} className="bg-brand-green-light rounded-3xl px-4 py-3 text-sm font-semibold text-brand-green text-center">
                  {time}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-brand-green rounded-5xl p-10 text-white">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="font-heading font-800 text-white text-2xl mb-3">Compliance & Safety First</h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  All our commercial cleaning practices meet Australian workplace health and safety standards. We carry full public liability insurance and can provide documentation for compliance purposes.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Public Liability Insurance', 'WHS Compliant', 'Police Checked Staff', 'MSDS Available'].map((item) => (
                    <span key={item} className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Enquiry Form */}
      <section className="py-16 bg-off-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-900 text-dark-text text-3xl md:text-4xl mb-4">Request a Commercial Quote</h2>
          <p className="text-body-text mb-8">Tell us about your business and we&apos;ll prepare a custom cleaning proposal.</p>
          <Button3D href="/get-a-quote" size="lg">Request a Quote</Button3D>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-3xl md:text-4xl text-center mb-10">FAQ</h2>
          <Accordion items={faqs} />
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
