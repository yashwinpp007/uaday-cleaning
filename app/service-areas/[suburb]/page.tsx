import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, CheckCircle, Star, Phone } from 'lucide-react'
import Button3D from '@/components/ui/Button3D'
import FinalCTA from '@/components/sections/FinalCTA'

const suburbs: Record<string, { name: string; postcode: string; blurb: string; testimonial: { name: string; quote: string } }> = {
  'truganina': {
    name: 'Truganina',
    postcode: '3029',
    blurb: 'Truganina is one of Melbourne\'s fastest-growing suburbs, with many new homes and young families. UaDay Cleaning provides professional residential, commercial, and end of lease cleaning services throughout Truganina. Whether you\'re moving in, moving out, or just need a regular clean, we\'re here to help.',
    testimonial: { name: 'Anna K.', quote: 'The deep clean they did before Christmas was outstanding. Even the oven looked brand new. Absolutely brilliant service in Truganina!' },
  },
  'hoppers-crossing': {
    name: 'Hoppers Crossing',
    postcode: '3029',
    blurb: 'Hoppers Crossing is a well-established suburb in Melbourne\'s west. Our professional cleaning team services homes and businesses throughout Hoppers Crossing with the same care and attention to detail we bring to every job.',
    testimonial: { name: 'Michael T.', quote: 'Regular fortnightly clean and they never miss a spot. Reliable and always on time. Best cleaners in Hoppers Crossing!' },
  },
  'werribee': {
    name: 'Werribee',
    postcode: '3030',
    blurb: 'Werribee is a major hub in Melbourne\'s outer west with a mix of residential and commercial properties. We\'ve been serving the Werribee community for over a decade, providing trusted cleaning services for families and businesses alike.',
    testimonial: { name: 'Emily R.', quote: 'I love that they use eco-friendly products. Safe for my kids and pets. The best cleaning service in Werribee by far!' },
  },
  'tarneit': {
    name: 'Tarneit',
    postcode: '3029',
    blurb: 'Tarneit is a booming suburb in Melbourne\'s west with many new residential estates. Our professional cleaners are fully equipped to handle everything from new-build post-construction cleans to regular home maintenance in Tarneit.',
    testimonial: { name: 'Sarah M.', quote: 'Amazing service! Got our full bond back with no issues. The team was punctual and thorough. Highly recommend in Tarneit!' },
  },
  'point-cook': {
    name: 'Point Cook',
    postcode: '3030',
    blurb: 'Point Cook is a popular family suburb on Melbourne\'s Werribee coast. UaDay Cleaning serves the Point Cook community with professional residential cleaning, end of lease cleaning, and commercial services.',
    testimonial: { name: 'James L.', quote: 'Used UaDay for our end of lease clean and got our full bond back first try. Incredible attention to detail in Point Cook!' },
  },
  'laverton': {
    name: 'Laverton',
    postcode: '3028',
    blurb: 'Laverton is a convenient suburb close to the city and the Western Ring Road. Our team regularly services homes and offices in Laverton with professional, reliable cleaning you can count on.',
    testimonial: { name: 'David W.', quote: 'Professional and thorough. Our office has never looked better. Great service in Laverton!' },
  },
  'altona-meadows': {
    name: 'Altona Meadows',
    postcode: '3028',
    blurb: 'Altona Meadows is a suburban area in Melbourne\'s west with a strong community feel. We provide residential and commercial cleaning services throughout Altona Meadows with our signature eco-friendly approach.',
    testimonial: { name: 'Lisa P.', quote: 'Same-day booking was a lifesaver. They arrived within 2 hours and left the place spotless. Amazing service in Altona Meadows!' },
  },
  'williams-landing': {
    name: 'Williams Landing',
    postcode: '3027',
    blurb: 'Williams Landing is a modern suburb centred around the Williams Landing town centre. Our professional cleaning team serves the Williams Landing community with residential, commercial, and end of lease cleaning.',
    testimonial: { name: 'Tom B.', quote: 'Got my bond back both times using UaDay. The checklist they follow is incredibly thorough. Couldn\'t recommend more for Williams Landing!' },
  },
}

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
    title: `Cleaning Services in ${data.name} | UaDay Cleaning`,
    description: `Professional residential, commercial and end of lease cleaning in ${data.name}, VIC ${data.postcode}. Eco-friendly, fully insured. Get a free quote today.`,
    alternates: { canonical: `https://uadaycleaning.com.au/service-areas/${params.suburb}` },
  }
}

export default function SuburbPage({ params }: Props) {
  const data = suburbs[params.suburb]
  if (!data) notFound()

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'UaDay Cleaning',
    url: `https://uadaycleaning.com.au/service-areas/${params.suburb}`,
    telephone: '+61412345678',
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

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-green-light to-white">
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
            <a href="tel:0412345678" className="flex items-center gap-2 text-brand-green font-semibold">
              <Phone className="w-5 h-5" /> 0412 345 678
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
