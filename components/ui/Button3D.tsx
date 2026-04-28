'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Button3DProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'green' | 'yellow'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const sizeClasses = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-8 py-4 text-base',
  lg: 'px-10 py-5 text-lg',
}

const variantClasses = {
  green: {
    bg: 'bg-brand-green',
    shadow: '0 8px 0 0 #3a7a10',
    text: 'text-white',
  },
  yellow: {
    bg: 'bg-brand-yellow',
    shadow: '0 8px 0 0 #c9a800',
    text: 'text-dark-text',
  },
}

export default function Button3D({
  children,
  href,
  onClick,
  variant = 'green',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
}: Button3DProps) {
  const v = variantClasses[variant]
  const s = sizeClasses[size]

  const buttonContent = (
    <motion.span
      className={`inline-block font-heading font-900 rounded-3xl cursor-pointer ${v.bg} ${v.text} ${s} ${className} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
      style={{ boxShadow: v.shadow }}
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { y: 4, boxShadow: 'none' }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.span>
  )

  if (href && !disabled) {
    return <Link href={href}>{buttonContent}</Link>
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="inline-block">
      {buttonContent}
    </button>
  )
}
