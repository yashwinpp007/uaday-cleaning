import type { Metadata } from 'next'
import { Star, Quote, ExternalLink } from 'lucide-react'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Customer Testimonials & Reviews | UaDay Cleaning West Melbourne',
  description:
    'Read real customer reviews for UaDay Cleaning. 4.9/5 rating from 500+ clients across West Melbourne. See why families and businesses trust us.',
  alternates: { canonical: 'https://uadaycleaning.com.au/testimonials' },
}

const testimonials = [
  { name: 'Sarah M.', suburb: 'Tarneit', stars: 5, service: 'End of Lease', quote: 'Absolutely amazing service! Got our full bond back with no issues. The team was punctual, thorough, and so professional. Highly recommend to anyone moving out.' },
  { name: 'James L.', suburb: 'Point Cook', stars: 5, service: 'End of Lease', quote: 'Used UaDay for our end of lease clean and got our full bond back first try. The attention to detail was incredible — they even cleaned the tracks of the sliding doors!' },
  { name: 'Emily R.', suburb: 'Werribee', stars: 5, service: 'Residential', quote: 'I love that they use eco-friendly products. My kids and pets are safe, and the house smells fresh without harsh chemicals. Best cleaning service in Werribee!' },
  { name: 'Michael T.', suburb: 'Hoppers Crossing', stars: 5, service: 'Residential', quote: 'Regular fortnightly clean and they never miss a spot. Reliable, trustworthy, and always on time. We\'ve been with them for 3 years now.' },
  { name: 'Anna K.', suburb: 'Truganina', stars: 5, service: 'Deep Clean', quote: 'The deep clean they did before Christmas was outstanding. Even the oven looked brand new. I had no idea how dirty it had gotten — now it\'s spotless!' },
  { name: 'David W.', suburb: 'Laverton', stars: 5, service: 'Commercial', quote: 'Professional, thorough, and incredibly friendly. Our office has never looked better — staff morale has genuinely improved. Worth every dollar.' },
  { name: 'Lisa P.', suburb: 'Altona Meadows', stars: 5, service: 'Residential', quote: 'Same-day booking was a lifesaver. They arrived within 2 hours and left the place spotless. I was hosting guests that evening and they saved me completely.' },
  { name: 'Tom B.', suburb: 'Williams Landing', stars: 5, service: 'End of Lease', quote: 'Second time using UaDay for end of lease. Got my bond back both times! The checklist they follow is incredibly thorough. Wouldn\'t use anyone else.' },
  { name: 'Grace N.', suburb: 'Deer Park', stars: 5, service: 'Residential', quote: 'Such a lovely team of cleaners. They go above and beyond every single time. My house is always gleaming when they\'re done. I genuinely look forward to cleaning day!' },
]

const aggregateSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'UaDay Cleaning',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
  review: testimonials.slice(0, 5).map((t) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name },
    reviewRating: { '@type': 'Rating', ratingValue: t.stars.toString(), bestRating: '5' },
    reviewBody: t.quote,
  })),
}

export default function TestimonialsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-green-light to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-brand-green text-white font-semibold text-sm px-4 py-2 rounded-full mb-5">⭐ Trusted by 500+ Clients</span>
          <h1 className="font-heading font-900 text-dark-text text-5xl md:text-6xl mb-5">
            What Our Clients Say
          </h1>

          {/* Average rating display */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-brand-yellow fill-brand-yellow" />
              ))}
            </div>
            <span className="font-heading font-900 text-dark-text text-5xl">4.9</span>
            <span className="text-body-text text-lg">/ 5</span>
          </div>
          <p className="text-body-text text-lg">Based on 500+ verified reviews from West Melbourne families and businesses</p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-off-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-5xl p-7 shadow-card">
                <div className="flex gap-1 mb-3">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-brand-green/20 mb-2" />
                <p className="text-body-text text-sm leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center justify-between pt-4 border-t border-light-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-heading font-800 text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-heading font-700 text-dark-text text-sm">{t.name}</p>
                      <p className="text-body-text text-xs">{t.suburb}</p>
                    </div>
                  </div>
                  <span className="bg-brand-green-light text-brand-green text-xs font-semibold px-3 py-1 rounded-full">{t.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-brand-green-light rounded-5xl p-10">
            <h2 className="font-heading font-900 text-dark-text text-3xl mb-4">Happy with Our Service?</h2>
            <p className="text-body-text mb-6">We&apos;d be so grateful if you shared your experience. Your review helps other West Melbourne families find trusted cleaners.</p>
            <a
              href="https://g.page/r/uaday-cleaning/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-green text-white font-heading font-800 px-7 py-4 rounded-3xl shadow-3d-green hover:bg-brand-green-dark transition-colors"
            >
              Leave a Google Review <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
