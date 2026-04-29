import type { Metadata } from 'next'
import Image from 'next/image'
import { Heart, Leaf, Shield, Star } from 'lucide-react'
import Button3D from '@/components/ui/Button3D'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'About UaDay Cleaning | Deanside Cleaning Company',
  description:
    'Learn about UaDay Cleaning — Deanside\'s trusted family-owned cleaning business. Our story, values, and commitment to the community.',
  alternates: { canonical: 'https://uadaycleaning.com.au/about' },
}

const values = [
  { icon: Heart, title: 'Integrity', desc: 'We do what we say. Honest pricing, reliable service, and genuine care for every client.' },
  { icon: Leaf, title: 'Sustainability', desc: 'Eco-friendly products that protect your family and our environment — never compromising on results.' },
  { icon: Shield, title: 'Trustworthiness', desc: 'Fully insured, background-checked cleaners you can trust in your home or office.' },
]

const team = [
  { name: 'Sarah Johnson', role: 'Founder & Head Cleaner', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&face', rotation: '-2deg' },
  { name: 'Michael Chen', role: 'Commercial Lead', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&face', rotation: '1.5deg' },
  { name: 'Emma Williams', role: 'EOL Specialist', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&face', rotation: '-1deg' },
  { name: 'David Park', role: 'Deep Clean Expert', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&face', rotation: '2deg' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-green-light to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-brand-green text-white font-semibold text-sm px-4 py-2 rounded-full mb-5">Our Story</span>
              <h1 className="font-heading font-900 text-dark-text text-5xl md:text-6xl mb-6 leading-tight">
                Hard Work, Integrity, and a Fresh Start
              </h1>
              <p className="text-body-text text-lg leading-relaxed mb-8">
                UaDay Cleaning was born from a simple belief: everyone deserves a clean, healthy home — and the people providing that service deserve to be treated with respect. We&apos;ve spent over 10 years building a reputation in Deanside that we&apos;re incredibly proud of.
              </p>
              <Button3D href="/get-a-quote" size="lg">Book a Clean Today</Button3D>
            </div>
            <div className="relative">
              {/* TODO: Replace with founder photo */}
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=500&fit=crop"
                alt="Sarah Johnson, founder of UaDay Cleaning"
                width={600}
                height={500}
                className="rounded-4xl shadow-2xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-3xl md:text-4xl mb-6">Our Story</h2>
          <div className="space-y-4 text-body-text leading-relaxed text-lg">
            <p>
              UaDay Cleaning was founded in 2014 by Sarah Johnson, a Deanside local who saw a gap in the market for reliable, trustworthy, and genuinely eco-friendly cleaning services.
            </p>
            <p>
              Starting with just a van, a handful of products, and a commitment to doing things right, Sarah grew UaDay into a team of dedicated professionals who share the same values: integrity, quality, and care for the community we live in.
            </p>
            <p>
              Today, we&apos;ve helped over 500 families and businesses across Deanside and the surrounding suburbs — from routine fortnightly cleans to complex end-of-lease jobs that reunite tenants with their full bond.
            </p>
            <p>
              We&apos;re proudly local, proudly independent, and proudly committed to the environment. Every product we use is certified eco-friendly, because we believe a clean home shouldn&apos;t come at the cost of a clean planet.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-brand-green-light">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-3xl md:text-4xl text-center mb-10">Our Values</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-5xl p-7 text-center shadow-card">
                <div className="w-14 h-14 bg-brand-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-800 text-dark-text text-xl mb-3">{v.title}</h3>
                <p className="text-body-text text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-3xl md:text-4xl text-center mb-10">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center"
                style={{ transform: `rotate(${member.rotation})` }}
              >
                <div className="bg-white rounded-3xl p-3 shadow-card-hover border border-light-border">
                  <Image
                    src={member.img}
                    alt={`${member.name} - ${member.role} at UaDay Cleaning`}
                    width={300}
                    height={300}
                    className="rounded-2xl w-full object-cover aspect-square"
                  />
                  <div className="pt-3 pb-2">
                    <p className="font-heading font-800 text-dark-text text-sm">{member.name}</p>
                    <p className="text-body-text text-xs">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-12 bg-off-white">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="font-heading font-800 text-dark-text text-xl text-center mb-8">Accreditations & Insurance</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Fully Insured – Public Liability', 'Police Checked Staff', 'Eco-Certified Products', 'WorkCover Insurance', 'ABN: 12 345 678 901'].map((item) => (
              <div key={item} className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-sm border border-light-border">
                <Shield className="w-4 h-4 text-brand-green" />
                <span className="text-dark-text text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-brand-green-light rounded-5xl p-10">
            <Star className="w-12 h-12 text-brand-yellow mx-auto mb-4" />
            <h2 className="font-heading font-900 text-dark-text text-2xl mb-4">Community Commitment</h2>
            <p className="text-body-text leading-relaxed">
              We give back to Deanside by partnering with local charities, offering discounted cleans to community organisations, and sourcing our products from Australian suppliers where possible. We&apos;re not just cleaners — we&apos;re your neighbours.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
