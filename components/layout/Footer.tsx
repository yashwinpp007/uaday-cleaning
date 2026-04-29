import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const services = [
  { name: 'Residential Cleaning', href: '/services/residential-cleaning' },
  { name: 'Commercial Cleaning', href: '/services/commercial-cleaning' },
  { name: 'End of Lease Cleaning', href: '/services/end-of-lease-cleaning' },
  { name: 'Deep / Spring Cleaning', href: '/services/deep-cleaning' },
]

const areas = [
  { name: 'Truganina', href: '/service-areas/truganina' },
  { name: 'Hoppers Crossing', href: '/service-areas/hoppers-crossing' },
  { name: 'Werribee', href: '/service-areas/werribee' },
  { name: 'Tarneit', href: '/service-areas/tarneit' },
  { name: 'Point Cook', href: '/service-areas/point-cook' },
  { name: 'Laverton', href: '/service-areas/laverton' },
]

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Blog', href: '/blog' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-green-dark text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
                  <path d="M20 5C12 5 6 12 8 20C10 28 20 35 20 35C20 35 30 28 32 20C34 12 28 5 20 5Z" fill="white"/>
                  <path d="M20 5C20 5 20 20 30 25" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                  <circle cx="26" cy="12" r="3" fill="#ffd700"/>
                </svg>
              </div>
              <div>
                <span className="font-heading font-800 text-white text-lg leading-tight block">UaDay Cleaning</span>
                <span className="text-white/60 text-xs leading-tight block">Deanside, VIC</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Deanside&apos;s trusted cleaning professionals. Eco-friendly, fully insured, and dedicated to making your space sparkle.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-green transition-colors">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-green transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-green transition-colors">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-800 text-white text-lg mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-white/70 text-sm hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-green rounded-full flex-shrink-0" />
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/get-a-quote" className="text-brand-yellow text-sm font-semibold hover:text-white transition-colors">
                  → Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-heading font-800 text-white text-lg mb-5">Areas We Serve</h3>
            <ul className="space-y-3">
              {areas.map((a) => (
                <li key={a.href}>
                  <Link href={a.href} className="text-white/70 text-sm hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-green rounded-full flex-shrink-0" />
                    {a.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="text-brand-yellow text-sm font-semibold hover:text-white transition-colors">
                  → View All Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-800 text-white text-lg mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:0414375051" className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-green group-hover:text-brand-yellow" />
                  <span className="text-sm">0414 375 051</span>
                </a>
              </li>
              <li>
                <a href="mailto:uadaycleaning@gmail.com" className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-green group-hover:text-brand-yellow" />
                  <span className="text-sm">uadaycleaning@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-green" />
                  <span className="text-sm">Deanside, VIC 3336</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-green" />
                  <div className="text-sm">
                    <p>Mon–Sun: 8am – 10pm</p>
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-5 pt-5 border-t border-white/10">
              <h4 className="font-heading font-800 text-white text-sm mb-3">Company</h4>
              <div className="grid grid-cols-2 gap-2">
                {company.slice(0, 6).map((c) => (
                  <Link key={c.href} href={c.href} className="text-white/60 text-xs hover:text-white transition-colors">
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-white/50 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} UaDay Cleaning. All rights reserved. ABN: 12 345 678 901
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-white/50 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/50 text-sm hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
