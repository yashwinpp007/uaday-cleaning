import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { CheckCircle, Shield, Leaf, BadgeCheck, Phone, MapPin, ArrowRight } from 'lucide-react'
import Button3D from '@/components/ui/Button3D'
import Accordion from '@/components/ui/Accordion'
import FinalCTA from '@/components/sections/FinalCTA'
import FAQSchema from '@/components/schema/FAQSchema'
import ServiceSchema from '@/components/schema/ServiceSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { services, getService } from '@/lib/data/services'
import { serviceIcons } from '@/lib/data/service-icons'
import { suburbs } from '@/lib/suburbs'
import { SITE_URL, BUSINESS_PHONE, BUSINESS_PHONE_E164 } from '@/lib/site'

interface Props {
  params: { slug: string }
}

// Suburbs linked from the sidebar. The full list lives on /service-areas.
const SIDEBAR_SUBURBS = [
  'truganina', 'tarneit', 'werribee', 'point-cook',
  'hoppers-crossing', 'laverton', 'altona-meadows', 'williams-landing',
]

const promises = [
  { icon: Shield, text: 'Fully insured' },
  { icon: BadgeCheck, text: 'Police-checked cleaners' },
  { icon: Leaf, text: 'Eco-friendly products' },
]

export async function generateStaticParams() {
  return services.filter((s) => !s.customPage).map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService(params.slug)
  if (!service || service.customPage) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${SITE_URL}/services/${service.slug}` },
  }
}

export default function ServicePage({ params }: Props) {
  const service = getService(params.slug)
  if (!service || service.customPage) notFound()

  const Icon = serviceIcons[service.icon]
  const related = service.relatedSlugs
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  return (
    <>
      <ServiceSchema
        name={`${service.name} Melbourne`}
        description={service.quickAnswer}
        url={`${SITE_URL}/services/${service.slug}`}
      />
      <FAQSchema items={service.faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-brand-green-light to-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-5 text-sm">
            <Link href="/services" className="text-body-text hover:text-brand-green">Services</Link>
            <span className="text-body-text">/</span>
            <span className="text-brand-green font-semibold">{service.name}</span>
          </nav>
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-5">
            <Icon className="w-8 h-8 text-brand-green" />
          </div>
          <h1 className="font-heading font-900 text-dark-text text-4xl md:text-6xl mb-5 leading-tight">
            {service.name} in Melbourne
          </h1>
          <p className="text-body-text text-lg leading-relaxed mb-8 max-w-2xl">{service.heroSubtitle}</p>
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Button3D href="/get-a-quote" size="lg">Get a Free Quote</Button3D>
            <a href={`tel:${BUSINESS_PHONE_E164}`} className="flex items-center gap-2 text-brand-green font-semibold">
              <Phone className="w-5 h-5" /> {BUSINESS_PHONE}
            </a>
          </div>
          <div className="bg-white rounded-3xl border border-brand-green/20 p-6 shadow-card">
            <p className="text-brand-green font-heading font-800 text-sm uppercase tracking-wide mb-2">In short</p>
            <p className="text-dark-text leading-relaxed">{service.quickAnswer}</p>
          </div>
        </div>
      </section>

      {/* Photo */}
      <section className="relative h-64 md:h-96 w-full">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </section>

      {/* Content + sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-heading font-900 text-dark-text text-3xl mb-5">About this service</h2>
            <div className="space-y-4 mb-12">
              {service.description.map((p, i) => (
                <p key={i} className="text-body-text leading-relaxed">{p}</p>
              ))}
            </div>

            <h2 className="font-heading font-900 text-dark-text text-3xl mb-5">What&apos;s included</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.features.map((f) => (
                <div key={f} className="flex items-start gap-3 bg-brand-green-light rounded-3xl px-5 py-4">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-dark-text text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-32 self-start space-y-6">
            <div className="bg-off-white border border-light-border rounded-4xl p-6">
              <h3 className="font-heading font-800 text-dark-text text-lg mb-4">Ideal for</h3>
              <ul className="space-y-3">
                {service.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-body-text">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-off-white border border-light-border rounded-4xl p-6">
              <h3 className="font-heading font-800 text-dark-text text-lg mb-4">Servicing Melbourne&apos;s west</h3>
              <ul className="grid grid-cols-2 gap-2">
                {SIDEBAR_SUBURBS.filter((slug) => suburbs[slug]).map((slug) => (
                  <li key={slug}>
                    <Link
                      href={`/service-areas/${slug}`}
                      className="flex items-center gap-1.5 text-sm text-body-text hover:text-brand-green"
                    >
                      <MapPin className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
                      {suburbs[slug].name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/service-areas" className="mt-4 inline-flex items-center gap-1 text-brand-green font-semibold text-sm">
                View all areas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Promises */}
      <section className="py-12 bg-brand-green">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-900 text-white text-2xl md:text-3xl text-center mb-8">
            Every UDAY Cleaning job
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {promises.map(({ icon: PIcon, text }) => (
              <div key={text} className="flex items-center justify-center gap-3 bg-white/10 rounded-3xl px-5 py-4 text-white font-semibold">
                <PIcon className="w-5 h-5 text-brand-yellow" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-off-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-3xl md:text-4xl text-center mb-10">
            {service.shortName} cleaning — common questions
          </h2>
          <Accordion items={service.faqs} />
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-3xl text-center mb-10">Related services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => {
              const RIcon = serviceIcons[r.icon]
              return (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group bg-off-white border border-light-border rounded-4xl p-6 hover:border-brand-green hover:shadow-card-hover transition-all"
                >
                  <div className="w-12 h-12 bg-brand-green-light rounded-2xl flex items-center justify-center mb-4">
                    <RIcon className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="font-heading font-800 text-dark-text text-lg mb-2">{r.name}</h3>
                  <p className="text-body-text text-sm mb-4">{r.tagline}</p>
                  <span className="inline-flex items-center gap-1 text-brand-green font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
