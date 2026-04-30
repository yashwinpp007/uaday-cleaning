import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

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
            <Link href="/" className="inline-block mb-5">
              <div className="bg-white rounded-2xl px-3 py-2 inline-block">
                <Image
                  src="/images/logo.png"
                  alt="UaDay Cleaning"
                  width={160}
                  height={70}
                  className="h-14 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Deanside&apos;s trusted cleaning professionals. Eco-friendly, fully insured, and dedicated to making your space sparkle.
            </p>
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
                  <span className="text-sm">Mon–Sun: 8am – 10pm</span>
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
            © {new Date().getFullYear()} UaDay Cleaning. All rights reserved.
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
