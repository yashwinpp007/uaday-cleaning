'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import Button3D from '@/components/ui/Button3D'
import { serviceMenu } from '@/lib/data/service-menu'
import { serviceIcons } from '@/lib/data/service-icons'

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
  const [mobileCategory, setMobileCategory] = useState<string | null>(null)
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
          } relative px-6 py-2 flex items-center justify-between`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="UDAY Cleaning"
              width={200}
              height={200}
              className="h-20 w-auto object-contain group-hover:scale-105 transition-transform mix-blend-multiply"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
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
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 pt-3 z-50"
                      >
                        <div className="bg-white rounded-3xl shadow-card-hover border border-light-border p-6 max-h-[calc(100vh-8rem)] overflow-y-auto">
                          <div className="grid grid-cols-4 gap-6">
                            {serviceMenu.map((cat) => (
                              <div key={cat.key}>
                                <Link
                                  href="/services"
                                  className="block font-heading font-800 text-dark-text text-sm uppercase tracking-wide pb-2 mb-3 border-b-2 border-brand-green hover:text-brand-green transition-colors"
                                >
                                  {cat.label}
                                </Link>
                                <div className="space-y-4">
                                  {cat.subCategories.map((sub) => (
                                    <div key={sub.label}>
                                      <p className="px-2 mb-1 text-xs font-semibold uppercase tracking-wider text-brand-green-dark">
                                        {sub.label}
                                      </p>
                                      <ul>
                                        {sub.services.map((sv) => {
                                          const Icon = serviceIcons[sv.icon]
                                          return (
                                            <li key={sv.slug}>
                                              <Link
                                                href={`/services/${sv.slug}`}
                                                onClick={() => setServicesOpen(false)}
                                                className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm text-body-text hover:bg-brand-green-light hover:text-brand-green transition-colors"
                                              >
                                                <Icon className="w-4 h-4 shrink-0 text-brand-green" />
                                                {sv.name}
                                              </Link>
                                            </li>
                                          )
                                        })}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-5 pt-3 border-t border-light-border text-center">
                            <Link href="/services" onClick={() => setServicesOpen(false)} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-brand-green hover:bg-brand-green-light transition-colors">
                              View All Services →
                            </Link>
                          </div>
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
            <a href="tel:0420203336" className="flex items-center gap-2 text-sm font-semibold text-body-text hover:text-brand-green transition-colors">
              <Phone className="w-4 h-4" />
              0420 203 336
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
                        {serviceMenu.map((cat) => {
                          const open = mobileCategory === cat.key
                          return (
                            <div key={cat.key}>
                              <button
                                onClick={() => setMobileCategory(open ? null : cat.key)}
                                aria-expanded={open}
                                className="flex w-full items-center justify-between px-4 py-2 rounded-xl text-sm font-semibold text-dark-text hover:bg-brand-green-light transition-colors"
                              >
                                {cat.label}
                                <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
                              </button>
                              {open && (
                                <div className="ml-2 mb-2 space-y-2">
                                  {cat.subCategories.map((sub) => (
                                    <div key={sub.label}>
                                      <p className="px-4 pt-1 text-xs font-semibold uppercase tracking-wider text-brand-green-dark">
                                        {sub.label}
                                      </p>
                                      {sub.services.map((sv) => {
                                        const Icon = serviceIcons[sv.icon]
                                        return (
                                          <Link
                                            key={sv.slug}
                                            href={`/services/${sv.slug}`}
                                            className="flex items-center gap-3 px-4 py-2 rounded-xl text-sm text-body-text hover:text-brand-green hover:bg-brand-green-light transition-colors"
                                          >
                                            <Icon className="w-4 h-4 shrink-0" />
                                            {sv.name}
                                          </Link>
                                        )
                                      })}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="p-6 border-t border-light-border space-y-3">
                <a href="tel:0420203336" className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-brand-green-light text-brand-green font-semibold">
                  <Phone className="w-4 h-4" />
                  Call 0420 203 336
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
