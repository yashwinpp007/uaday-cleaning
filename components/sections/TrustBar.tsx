'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { Users, Clock, Shield, Star, Leaf } from 'lucide-react'

const stats = [
  { icon: Users, label: 'Happy Clients', value: 500, suffix: '+' },
  { icon: Clock, label: 'Years Experience', value: 10, suffix: '' },
  { icon: Shield, label: 'Fully Insured', value: 100, suffix: '%' },
  { icon: Star, label: 'Rating', value: 49, suffix: '/5', display: '4.9/5' },
  { icon: Leaf, label: 'Eco-Friendly', value: 100, suffix: '%' },
]

export default function TrustBar() {
  return (
    <section className="bg-brand-green py-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center text-white"
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="font-heading font-900 text-3xl leading-none mb-1">
                {stat.display ? stat.display : (
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <p className="text-white/80 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
