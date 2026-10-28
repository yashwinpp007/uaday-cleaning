import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Shield, Leaf, BadgeCheck, Phone, ArrowRight, MapPin } from 'lucide-react'
import Button3D from '@/components/ui/Button3D'
import Accordion from '@/components/ui/Accordion'
import FinalCTA from '@/components/sections/FinalCTA'
import FAQSchema from '@/components/schema/FAQSchema'
import ServiceSchema from '@/components/schema/ServiceSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import type { LandingPageData } from '@/lib/data/landing-pages'
import { SITE_URL, BUSINESS_PHONE, BUSINESS_PHONE_E164 } from '@/lib/site'

const promises = [
  { icon: Shield, text: 'Fully insured' },
  { icon: BadgeCheck, text: 'Police-checked cleaners' },
  { icon: Leaf, text: 'Eco-friendly products' },
]

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function LandingPage({ page }: { page: LandingPageData }) {
  return (
    <>
      <ServiceSchema
        name={page.serviceName}
        description={page.quickAnswer}
        url={`${SITE_URL}${page.path}`}
        areaServed={page.areaServed}
      />
      <FAQSchema items={page.faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: page.breadcrumbName, path: page.path },
        ]}
      />

      {/* Hero */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-brand-green-light to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-5 text-sm">
            <Link href="/" className="text-body-text hover:text-brand-green">Home</Link>
            <span className="text-body-text">/</span>
            <Link href="/services" className="text-body-text hover:text-brand-green">Services</Link>
            <span className="text-body-text">/</span>
            <span className="text-brand-green font-semibold">{page.breadcrumbName}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4 text-brand-green font-semibold">
                <MapPin className="w-5 h-5" /> {page.eyebrow}
              </div>
              <h1 className="font-heading font-900 text-dark-text text-4xl md:text-5xl mb-5 leading-tight">{page.h1}</h1>
              <p className="text-body-text text-lg leading-relaxed mb-8">{page.heroSubtitle}</p>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Button3D href="/get-a-quote" size="lg">Get a Free Quote</Button3D>
                <a href={`tel:${BUSINESS_PHONE_E164}`} className="flex items-center gap-2 text-brand-green font-semibold">
                  <Phone className="w-5 h-5" /> {BUSINESS_PHONE}
                </a>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {promises.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2 text-sm text-dark-text font-medium">
                    <Icon className="w-4 h-4 text-brand-green" /> {text}
                  </li>
                ))}
              </ul>
            </div>
            <Image
              src={page.image}
              alt={page.imageAlt}
              width={600}
              height={500}
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="rounded-4xl shadow-2xl object-cover w-full h-80 lg:h-[420px]"
            />
          </div>

          <div className="bg-white rounded-3xl border border-brand-green/20 p-6 shadow-card mt-10">
            <p className="text-brand-green font-heading font-800 text-sm uppercase tracking-wide mb-2">In short</p>
            <p className="text-dark-text leading-relaxed">{page.quickAnswer}</p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-2xl mb-5">Jump to what you need</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {page.audience.map((a) => (
              <a
                key={a.label}
                href={`#${a.target}`}
                className="bg-brand-green-light rounded-3xl p-5 hover:bg-brand-green group transition-colors"
              >
                <p className="font-heading font-800 text-dark-text group-hover:text-white transition-colors">{a.label}</p>
                <p className="text-body-text text-sm group-hover:text-white/80 transition-colors">{a.blurb}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-14">
          {page.sections.map((s) => (
            <div key={s.id} id={s.id} className="scroll-mt-32">
              <h2 className="font-heading font-900 text-dark-text text-3xl mb-4">{s.heading}</h2>
              {s.intro && <p className="text-body-text leading-relaxed mb-5">{s.intro}</p>}
              {s.body?.map((p, i) => (
                <p key={i} className="text-body-text leading-relaxed mb-4">{p}</p>
              ))}
              {s.items && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {s.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-brand-green-light rounded-3xl px-5 py-4">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-dark-text text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Areas */}
      <section className="py-12 bg-off-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-2xl mb-4">Areas we travel to</h2>
          <p className="text-body-text mb-4">
            We are based in Deanside, Victoria, and travel to: {page.areaServed.join(', ')}. Our regular coverage is{' '}
            <Link href="/service-areas" className="text-brand-green font-semibold hover:underline">Melbourne&apos;s west and surrounds</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading font-900 text-dark-text text-3xl mb-8">Frequently asked questions</h2>
          <Accordion items={page.faqs} />
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-off-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-heading font-900 text-dark-text text-2xl mb-4">Related services</h2>
            <ul className="space-y-3">
              {page.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="flex items-start gap-2 group">
                    <ArrowRight className="w-4 h-4 text-brand-green mt-1 flex-shrink-0" />
                    <span>
                      <span className="font-semibold text-dark-text group-hover:text-brand-green">{r.name}</span>
                      <span className="block text-body-text text-sm">{r.desc}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading font-900 text-dark-text text-2xl mb-4">Helpful guides</h2>
            <ul className="space-y-3">
              {page.blogLinks.map((b) => (
                <li key={b.href}>
                  <Link href={b.href} className="flex items-start gap-2 group">
                    <ArrowRight className="w-4 h-4 text-brand-green mt-1 flex-shrink-0" />
                    <span className="font-semibold text-dark-text group-hover:text-brand-green">{b.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="max-w-5xl mx-auto px-4 mt-8 text-xs text-body-text">Last updated {formatDate(page.lastUpdated)}</p>
      </section>

      <FinalCTA />
    </>
  )
}
