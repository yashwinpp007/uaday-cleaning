import Link from 'next/link'
import { Home, ArrowRight } from 'lucide-react'
import Button3D from '@/components/ui/Button3D'

const popularLinks = [
  { name: 'Residential Cleaning', href: '/services/residential-cleaning' },
  { name: 'End of Lease Cleaning', href: '/services/end-of-lease-cleaning' },
  { name: 'Commercial Cleaning', href: '/services/commercial-cleaning' },
  { name: 'Get a Free Quote', href: '/get-a-quote' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'About Us', href: '/about' },
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-green-light to-white flex items-center pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 text-center w-full">
        {/* Large 404 */}
        <div className="font-heading font-900 text-9xl text-brand-green/20 leading-none mb-4 select-none">
          404
        </div>

        <h1 className="font-heading font-900 text-dark-text text-4xl md:text-5xl mb-4">
          Page Not Found
        </h1>
        <p className="text-body-text text-xl mb-10 max-w-lg mx-auto">
          Oops! The page you&apos;re looking for seems to have disappeared — a bit like the mess after one of our cleans. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button3D href="/" size="lg">
            <Home className="w-5 h-5 inline mr-2" /> Go to Homepage
          </Button3D>
          <Button3D href="/get-a-quote" variant="yellow" size="lg">
            Get a Free Quote
          </Button3D>
        </div>

        {/* Popular pages */}
        <div className="bg-white rounded-5xl p-8 shadow-card">
          <h2 className="font-heading font-800 text-dark-text text-xl mb-6">Popular Pages</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {popularLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-brand-green-light text-body-text hover:text-brand-green transition-colors text-sm font-semibold text-left group"
              >
                <ArrowRight className="w-4 h-4 text-brand-green group-hover:translate-x-1 transition-transform" />
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
