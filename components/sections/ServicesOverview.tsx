'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, Building2, Key, Sparkles, ArrowRight } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import DotPattern from '@/components/ui/DotPattern'

const services = [
  {
    icon: Home,
    title: 'Residential Cleaning',
    blurb: 'Regular weekly, fortnightly or one-off cleans for homes of all sizes. Tailored to your schedule and needs.',
    href: '/services/residential-cleaning',
    color: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Building2,
    title: 'Commercial Cleaning',
    blurb: 'Professional office and business cleaning for a spotless, productive work environment.',
    href: '/services/commercial-cleaning',
    color: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: Key,
    title: 'End of Lease Cleaning',
    blurb: 'Bond-back guaranteed cleans that meet real estate standards. REIV-aligned checklists.',
    href: '/services/end-of-lease-cleaning',
    color: 'bg-brand-green-light',
    iconBg: 'bg-brand-green/10',
    iconColor: 'text-brand-green',
    featured: true,
  },
  {
    icon: Sparkles,
    title: 'Deep / Spring Cleaning',
    blurb: 'A thorough, room-by-room deep clean to restore your home to its best condition.',
    href: '/services/deep-cleaning',
    color: 'bg-amber-50',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
]

export default function ServicesOverview() {
  return (
    <SectionWrapper className="py-20 relative overflow-hidden bg-white">
      <DotPattern />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-brand-green-light text-brand-green font-semibold text-sm px-4 py-2 rounded-full mb-4">Our Services</span>
          <h2 className="font-heading font-900 text-dark-text text-4xl md:text-5xl mb-4">
            Cleaning Services for<br />Every Need
          </h2>
          <p className="text-body-text text-lg max-w-2xl mx-auto">
            From regular home cleans to full end-of-lease packages — we have a cleaning solution tailored for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
              whileHover={{ scale: 1.04, rotate: 0.5, boxShadow: '0 25px 50px rgba(0,0,0,0.12)' }}
              className={`${service.color} rounded-5xl p-7 flex flex-col border border-white/80 cursor-pointer group ${service.featured ? 'ring-2 ring-brand-green' : ''}`}
            >
              <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-5`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              {service.featured && (
                <span className="inline-block bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">Most Popular</span>
              )}
              <h3 className="font-heading font-800 text-dark-text text-xl mb-3">{service.title}</h3>
              <p className="text-body-text text-sm leading-relaxed flex-1">{service.blurb}</p>
              <Link
                href={service.href}
                className="mt-5 flex items-center gap-2 text-brand-green font-semibold text-sm group-hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
