import type { Metadata } from 'next'
import { Star, Quote, ExternalLink } from 'lucide-react'
import FinalCTA from '@/components/sections/FinalCTA'
import { reviews } from '@/lib/data/reviews'
import { BUSINESS_RATING, BUSINESS_REVIEW_COUNT, GOOGLE_REVIEW_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Customer Testimonials & Reviews | Melbourne',
  description: `Read real customer reviews for UDAY Cleaning. ${BUSINESS_RATING}/5 rating from ${BUSINESS_REVIEW_COUNT} Google reviews across Melbourne. See why families and businesses trust us.`,
  alternates: { canonical: 'https://udaycleaning.com.au/testimonials' },
}

const testimonials = reviews

const aggregateSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'UDAY Cleaning',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: BUSINESS_RATING,
    reviewCount: BUSINESS_REVIEW_COUNT,
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
      <section className="pt-40 pb-16 bg-gradient-to-br from-brand-green-light to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-brand-green text-white font-semibold text-sm px-4 py-2 rounded-full mb-5">⭐ {BUSINESS_RATING}-Star Rated on Google</span>
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
            <span className="font-heading font-900 text-dark-text text-5xl">{BUSINESS_RATING}</span>
            <span className="text-body-text text-lg">/ 5</span>
          </div>
          <p className="text-body-text text-lg">Based on {BUSINESS_REVIEW_COUNT} verified Google reviews from Melbourne families and businesses</p>
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
                      <p className="text-body-text text-xs">Google Review</p>
                    </div>
                  </div>
                  {t.service && (
                    <span className="bg-brand-green-light text-brand-green text-xs font-semibold px-3 py-1 rounded-full">{t.service}</span>
                  )}
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
            <p className="text-body-text mb-6">We&apos;d be so grateful if you shared your experience. Your review helps other Melbourne families find trusted cleaners.</p>
            <a
              href={GOOGLE_REVIEW_URL}
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
