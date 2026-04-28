'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BouncyCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function BouncyCard({ children, className = '', delay = 0 }: BouncyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{
        scale: 1.04,
        rotate: 0.8,
        boxShadow: '0 25px 50px rgba(0,0,0,0.12)',
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      className={`bg-white rounded-5xl p-6 shadow-card ${className}`}
    >
      {children}
    </motion.div>
  )
}
