'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Home, Building2, Key, Sparkles, Phone } from 'lucide-react'
import Button3D from '@/components/ui/Button3D'

const services = [
  { name: 'Residential Cleaning', href: '/services/residential-cleaning', icon: Home, desc: 'Regular home cleaning services' },
  { name: 'Commercial Cleaning', href: '/services/commercial-cleaning', icon: Building2, desc: 'Office & business cleaning' },
  { name: 'End of Lease Cleaning', href: '/services/end-of-lease-cleaning', icon: Key, desc: 'Bond-back guaranteed cleans' },
  { name: 'Deep Cleaning', href: '/services/deep-cleaning', icon: Sparkles, desc: 'Thorough spring cleans' },
]

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-3'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`bg-white/90 backdrop-blur-xl border border-light-border transition-all duration-300 ${
            scrolled ? 'rounded-2xl shadow-lg' : 'rounded-3xl shadow-md'
          } px-6 py-3 flex items-center justify-between`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
                <path d="M20 5C12 5 6 12 8 20C10 28 20 35 20 35C20 35 30 28 32 20C34 12 28 5 20 5Z" fill="white"/>
                <path d="M20 5C20 5 20 20 30 25" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                <circle cx="26" cy="12" r="3" fill="#ffd700"/>
              </svg>
            </div>
            <div>
              <span className="font-heading font-900 text-dark-text text-lg leading-tight block">UaDay</span>
              <span className="font-body text-brand-green text-xs font-600 leading-tight block -mt-0.5">Cleaning</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className={`flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    pathname.startsWith('/services') ? 'text-brand-green bg-brand-green-light' : 'text-body-text hover:text-brand-green hover:bg-brand-green-light'
                  }`}>
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-3xl shadow-card-hover border border-light-border p-3 z-50"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="flex items-center gap-3 p-3 rounded-2xl hover:bg-brand-green-light group transition-colors"
                          >
                            <div className="w-10 h-10 bg-brand-green-light rounded-xl flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-colors">
                              <service.icon className="w-5 h-5 text-brand-green group-hover:text-white" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-dark-text">{service.name}</p>
                              <p className="text-xs text-body-text">{service.desc}</p>
                            </div>
                          </Link>
                        ))}
                        <div className="mt-2 pt-2 border-t border-light-border">
                          <Link href="/services" className="flex items-center justify-center gap-2 p-2 rounded-xl text-sm font-semibold text-brand-green hover:bg-brand-green-light transition-colors">
                            View All Services →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    pathname === link.href ? 'text-brand-green bg-brand-green-light' : 'text-body-text hover:text-brand-green hover:bg-brand-green-light'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:0414375051" className="flex items-center gap-2 text-sm font-semibold text-body-text hover:text-brand-green transition-colors">
              <Phone className="w-4 h-4" />
              0414 375 051
            </a>
            <Button3D href="/get-a-quote" size="sm">Get a Free Quote</Button3D>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-brand-green-light transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-light-border">
                <span className="font-heading font-800 text-dark-text text-lg">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-brand-green-light">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-6 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      className={`flex items-center px-4 py-3 rounded-2xl font-semibold transition-colors ${
                        pathname === link.href || (link.hasDropdown && pathname.startsWith('/services'))
                          ? 'bg-brand-green-light text-brand-green'
                          : 'text-body-text hover:bg-brand-green-light hover:text-brand-green'
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <div className="ml-4 mt-1 space-y-1">
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="flex items-center gap-3 px-4 py-2 rounded-xl text-sm text-body-text hover:text-brand-green hover:bg-brand-green-light transition-colors"
                          >
                            <s.icon className="w-4 h-4" />
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="p-6 border-t border-light-border space-y-3">
                <a href="tel:0414375051" className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-brand-green-light text-brand-green font-semibold">
                  <Phone className="w-4 h-4" />
                  Call 0414 375 051
                </a>
                <Button3D href="/get-a-quote" className="w-full text-center">Get a Free Quote</Button3D>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
