import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Sparkles, Leaf, Phone } from 'lucide-react'
import Button3D from '@/components/ui/Button3D'
import Accordion from '@/components/ui/Accordion'
import FinalCTA from '@/components/sections/FinalCTA'
import FAQSchema from '@/components/schema/FAQSchema'
import ServiceSchema from '@/components/schema/ServiceSchema'

export const metadata: Metadata = {
  title: 'Deep Cleaning Service Deanside | UaDay Cleaning',
  description:
    'Professional deep cleaning services in Deanside. Thorough room-by-room cleans, eco-friendly products. Perfect for spring cleans, post-renovation or pre-sale. Book online.',
  alternates: { canonical: 'https://uadaycleaning.com.au/services/deep-cleaning' },
}

const roomScope = [
  {
    room: 'Kitchen',
    items: ['Oven cleaned inside and out', 'Rangehood degreased', 'All cupboards wiped inside/out', 'Fridge cleaned inside/out', 'Sink descaled and polished', 'Benches scrubbed'],
  },
  {
    room: 'Bathrooms',
    items: ['Grout scrubbed and treated', 'Tiles descaled', 'Shower screen polished', 'Exhaust fan cleaned', 'Vanity and storage wiped', 'Toilet disinfected'],
  },
  {
    room: 'Living Areas',
    items: ['Walls wiped for marks', 'Skirting boards scrubbed', 'Light fittings cleaned', 'Window sills and tracks', 'Blinds dusted/wiped', 'Behind/under furniture'],
  },
  {
    room: 'Bedrooms',
    items: ['Wardrobe interiors wiped', 'Ceiling fan blades cleaned', 'Under-bed area vacuumed', 'Window tracks cleaned', 'Door handles sanitised', 'Carpets steam-vacuumed'],
  },
]

const faqs = [
  { question: 'What is a deep clean vs a regular clean?', answer: 'A deep clean is a thorough, room-by-room cleaning that goes beyond the surface. Unlike a regular maintenance clean, a deep clean tackles built-up grime, inside appliances, grout lines, behind furniture, and areas often missed in routine cleans.' },
  { question: 'How long does a deep clean take?', answer: 'A typical deep clean takes 4–8 hours depending on property size and condition. We recommend clearing your schedule for the day as our team will go through every area methodically.' },
  { question: 'When should I book a deep clean?', answer: 'Deep cleans are ideal for: moving into a new home, spring cleaning, before/after hosting events, post-renovation cleanup, or when a property needs a complete reset.' },
  { question: 'Is a deep clean different from end of lease cleaning?', answer: 'They are similar but have different objectives. A deep clean is a thorough general clean, while an end of lease clean follows a specific REIV checklist designed to meet property management standards for bond return.' },
]

export default function DeepCleaningPage() {
  return (
    <>
      <ServiceSchema
        name="Deep Cleaning Service Deanside"
        description="Professional deep cleaning services in Deanside. Thorough room-by-room cleans with eco-friendly products."
        url="https://uadaycleaning.com.au/services/deep-cleaning"
      />
      <FAQSchema items={faqs} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-amber-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Link href="/services" className="text-body-text text-sm hover:text-brand-green">Services</Link>
                <span className="text-body-text text-sm">/</span>
                <span className="text-brand-green text-sm font-semibold">Deep Cleaning</span>
              </div>
              <span className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 rounded-full px-4 py-2 mb-5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span className="text-amber-700 font-semibold text-sm">The Ultimate Spring Clean</span>
              </span>
              <h1 className="font-heading font-900 text-dark-text text-5xl md:text-6xl mb-5 leading-tight">
                Deep Cleaning Service Deanside
              </h1>
              <p className="text-body-text text-lg leading-relaxed mb-4">
                A deep clean is a thorough, top-to-bottom cleaning service that goes far beyond a standard maintenance clean. Our team works room-by-room to tackle built-up grime, appliance interiors, grout lines, and hard-to-reach areas — leaving your home completely refreshed.
              </p>
              <p className="text-body-text text-base leading-relaxed mb-8">
                Ideal for moving into a new home, spring cleaning, post-renovation cleanup, or when your home needs a complete reset.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button3D href="/get-a-quote" size="lg">Get a Free Quote</Button3D>
                <a href="tel:0414375051" className="flex items-center gap-2 text-brand-green font-semibold">
                  <Phone className="w-5 h-5" /> 0414 375 051
                </a>
              </div>
            </div>
            <div>
              {/* TODO: Replace with real deep clean photo */}
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=500&fit=crop"
                alt="Professional deep spring cleaning service Deanside"
                width={600}
                height={500}
                className="rounded-4xl shadow-2xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Room-by-room scope */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-3xl md:text-4xl text-center mb-10">Room-by-Room Scope</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {roomScope.map((room) => (
              <div key={room.room} className="bg-off-white rounded-4xl p-7 border border-light-border">
                <h3 className="font-heading font-800 text-brand-green text-xl mb-4">{room.room}</h3>
                <ul className="space-y-2">
                  {room.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-body-text">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eco Products */}
      <section className="py-12 bg-brand-green-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center flex-shrink-0">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-heading font-800 text-dark-text text-xl mb-2">100% Eco-Friendly Products</h3>
              <p className="text-body-text">Even in a deep clean, we only use certified eco-friendly, non-toxic products. Safe for your family, pets, and the environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading font-900 text-dark-text text-3xl md:text-4xl mb-4">Deep Clean Pricing</h2>
          <p className="text-body-text mb-8">Pricing is based on property size and current condition. Get a personalised quote.</p>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { size: '1–2 Bedrooms', from: 'From $180', duration: '4–5 hrs' },
              { size: '3–4 Bedrooms', from: 'From $280', duration: '6–7 hrs' },
              { size: '5+ Bedrooms', from: 'From $380', duration: '8+ hrs' },
            ].map((p) => (
              <div key={p.size} className="bg-off-white rounded-4xl p-6 border border-light-border">
                <p className="font-heading font-800 text-dark-text text-lg mb-2">{p.size}</p>
                <p className="text-brand-green font-bold text-2xl mb-1">{p.from}</p>
                <p className="text-body-text text-sm">{p.duration}</p>
              </div>
            ))}
          </div>
          <Button3D href="/get-a-quote" size="lg">Get My Custom Quote</Button3D>
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
