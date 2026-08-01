import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, CheckCircle, Star, Phone } from 'lucide-react'
import Button3D from '@/components/ui/Button3D'
import FinalCTA from '@/components/sections/FinalCTA'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { suburbs } from '@/lib/suburbs'
import { SITE_URL, BUSINESS_PHONE_E164 } from '@/lib/site'

interface Props {
  params: { suburb: string }
}

export async function generateStaticParams() {
  return Object.keys(suburbs).map((slug) => ({ suburb: slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = suburbs[params.suburb]
  if (!data) return {}

  return {
    title: `Cleaning Services in ${data.name}`,
    description: `Professional residential, commercial and end of lease cleaning in ${data.name}, VIC ${data.postcode}. Eco-friendly, fully insured. Get a free quote today.`,
    alternates: { canonical: `${SITE_URL}/service-areas/${params.suburb}` },
  }
}

export default function SuburbPage({ params }: Props) {
  const data = suburbs[params.suburb]
  if (!data) notFound()

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'UDAY Cleaning',
    url: `${SITE_URL}/service-areas/${params.suburb}`,
    telephone: BUSINESS_PHONE_E164,
    areaServed: {
      '@type': 'City',
      name: data.name,
      postalCode: data.postcode,
      addressRegion: 'VIC',
      addressCountry: 'AU',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/service-areas' },
          { name: data.name, path: `/service-areas/${params.suburb}` },
        ]}
      />

      {/* Hero */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-brand-green-light to-white">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-body-text mb-5">
            <Link href="/" className="hover:text-brand-green">Home</Link>
            <span>/</span>
            <Link href="/service-areas" className="hover:text-brand-green">Service Areas</Link>
            <span>/</span>
            <span className="text-dark-text font-medium">{data.name}</span>
          </nav>
          <div className="flex items-center gap-3 mb-5">
            <MapPin className="w-6 h-6 text-brand-green" />
            <span className="text-brand-green font-semibold">{data.name}, VIC {data.postcode}</span>
          </div>
          <h1 className="font-heading font-900 text-dark-text text-5xl md:text-6xl mb-5 leading-tight">
            Cleaning Services in {data.name}
          </h1>
          <p className="text-body-text text-xl leading-relaxed mb-8 max-w-2xl">{data.blurb}</p>
          <div className="flex flex-wrap gap-4">
            <Button3D href="/get-a-quote" size="lg">Get a Free Quote</Button3D>
            <a href="tel:0420203336" className="flex items-center gap-2 text-brand-green font-semibold">
              <Phone className="w-5 h-5" /> 0420 203 336
            </a>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-3xl mb-8">Services Available in {data.name}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: 'Residential Cleaning', href: '/services/residential-cleaning', desc: 'Regular or one-off home cleans' },
              { name: 'Commercial Cleaning', href: '/services/commercial-cleaning', desc: 'Office and business cleaning' },
              { name: 'End of Lease Cleaning', href: '/services/end-of-lease-cleaning', desc: 'Bond-back guaranteed' },
              { name: 'Deep / Spring Cleaning', href: '/services/deep-cleaning', desc: 'Full top-to-bottom clean' },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="flex items-start gap-3 bg-brand-green-light rounded-3xl p-5 hover:bg-brand-green group transition-colors">
                <CheckCircle className="w-5 h-5 text-brand-green group-hover:text-white mt-0.5 flex-shrink-0 transition-colors" />
                <div>
                  <p className="font-heading font-700 text-dark-text group-hover:text-white transition-colors">{s.name}</p>
                  <p className="text-body-text text-sm group-hover:text-white/80 transition-colors">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Testimonial */}
      <section className="py-12 bg-off-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-5xl p-8 shadow-card">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-brand-yellow fill-brand-yellow" />)}
            </div>
            <p className="text-body-text text-lg italic mb-5">&ldquo;{data.testimonial.quote}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-heading font-800">
                {data.testimonial.name[0]}
              </div>
              <div>
                <p className="font-heading font-700 text-dark-text">{data.testimonial.name}</p>
                <p className="text-body-text text-xs">{data.name} resident</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-900 text-dark-text text-3xl mb-4">Get a Quote for {data.name}</h2>
          <p className="text-body-text mb-8">Fast, free quotes with no obligation. We&apos;ll get back to you within the hour.</p>
          <Button3D href="/get-a-quote" size="lg">Get My Free Quote</Button3D>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
