'use client'

import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import Link from 'next/link'
import FAQSchema from '@/components/schema/FAQSchema'

const categories = ['All', 'General', 'Pricing', 'End of Lease', 'Products', 'Booking']

const faqs = [
  { category: 'General', question: 'Are you fully insured?', answer: 'Yes. UaDay Cleaning carries full public liability insurance. All team members are police-checked and insured. We can provide copies of certificates on request. Learn more on our <a href="/about" class="text-brand-green underline">About page</a>.', link: '/about' },
  { category: 'General', question: 'What areas do you service?', answer: 'We service West Melbourne and surrounding suburbs including Truganina, Hoppers Crossing, Werribee, Tarneit, Point Cook, Laverton, Altona Meadows, Williams Landing, and more. See our <a href="/service-areas" class="text-brand-green underline">Service Areas page</a> for the full list.', link: '/service-areas' },
  { category: 'General', question: 'Do you bring your own products and equipment?', answer: 'Yes! We bring all necessary professional-grade equipment and eco-certified cleaning products to every job. You don\'t need to supply anything — just let us in.', link: null },
  { category: 'Pricing', question: 'How much does a standard clean cost?', answer: 'Residential cleans start from $80 for smaller properties, while commercial and end of lease jobs start from $120–$250 depending on size. Get an accurate quote using our <a href="/get-a-quote" class="text-brand-green underline">online quote form</a>.', link: '/get-a-quote' },
  { category: 'Pricing', question: 'Do you charge extra for public holidays?', answer: 'We may apply a small surcharge for public holiday bookings. This will always be communicated upfront before you confirm your booking.', link: null },
  { category: 'Pricing', question: 'Are there any hidden fees?', answer: 'Never. We believe in completely transparent pricing. Your quote will include everything, and if there are any additional charges, we\'ll always discuss them with you first.', link: null },
  { category: 'End of Lease', question: 'What is the bond-back guarantee?', answer: 'If your property manager is not satisfied with any aspect of our end of lease clean, we\'ll return and re-clean those areas at absolutely no extra charge. View our <a href="/services/end-of-lease-cleaning" class="text-brand-green underline">End of Lease</a> page for full details.', link: '/services/end-of-lease-cleaning' },
  { category: 'End of Lease', question: 'Do you follow the REIV checklist?', answer: 'Yes. We use a comprehensive checklist aligned with Real Estate Institute of Victoria (REIV) standards to ensure your property meets inspection requirements.', link: null },
  { category: 'End of Lease', question: 'How far in advance should I book?', answer: 'We strongly recommend booking at least 48 hours before your final inspection. This allows time for scheduling and a potential re-clean if needed.', link: null },
  { category: 'Products', question: 'What cleaning products do you use?', answer: 'We exclusively use certified eco-friendly, non-toxic cleaning products. They are safe for children, pets, and the environment — without compromising on cleaning power.', link: null },
  { category: 'Products', question: 'Can I request specific products be used or avoided?', answer: 'Absolutely. If you have allergies or product preferences, just let us know when booking and we\'ll accommodate your needs.', link: null },
  { category: 'Booking', question: 'Can I book a same-day clean?', answer: 'Yes, subject to availability. Call us early in the morning on 0412 345 678 to check same-day availability. We do our best to accommodate urgent requests.', link: null },
  { category: 'Booking', question: 'Do I need to be home during the clean?', answer: 'No. Many clients provide a key or access code. All our team members are police-checked, insured, and fully trustworthy.', link: null },
  { category: 'Booking', question: 'How do I cancel or reschedule?', answer: 'We ask for at least 24 hours\' notice for changes. Contact us by phone or email and we\'ll be happy to reschedule at no charge.', link: null },
]

export default function FAQPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filtered = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = activeCategory === 'All' || faq.category === activeCategory
      const matchesSearch = search === '' || faq.question.toLowerCase().includes(search.toLowerCase()) || faq.answer.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [search, activeCategory])

  return (
    <>
      <FAQSchema items={faqs.map((f) => ({ question: f.question, answer: f.answer.replace(/<[^>]*>/g, '') }))} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-green-light to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-brand-green text-white font-semibold text-sm px-4 py-2 rounded-full mb-5">FAQ</span>
          <h1 className="font-heading font-900 text-dark-text text-5xl md:text-6xl mb-5">Frequently Asked Questions</h1>
          <p className="text-body-text text-xl mb-8">Everything you need to know about UaDay Cleaning services.</p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-body-text" />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-5 py-4 rounded-2xl border-2 border-light-border focus:border-brand-green outline-none text-dark-text bg-white shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-6 bg-white border-b border-light-border">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                  activeCategory === cat ? 'bg-brand-green text-white' : 'bg-brand-green-light text-brand-green hover:bg-brand-green hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-off-white">
        <div className="max-w-3xl mx-auto px-4">
          {filtered.length > 0 ? (
            <div className="space-y-3">
              {filtered.map((faq, i) => (
                <div key={i} className="bg-white rounded-3xl border border-light-border overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-green-light/50 transition-colors"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <div>
                      <span className="text-xs text-brand-green font-semibold bg-brand-green-light px-2.5 py-1 rounded-full mr-3">{faq.category}</span>
                      <span className="font-heading font-700 text-dark-text">{faq.question}</span>
                    </div>
                    <span className={`text-brand-green text-xl ml-4 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  {openIndex === i && (
                    <div className="px-6 pb-6 text-body-text leading-relaxed border-t border-light-border pt-4" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-body-text text-lg mb-3">No questions found matching &quot;{search}&quot;</p>
              <button onClick={() => { setSearch(''); setActiveCategory('All') }} className="text-brand-green font-semibold">Clear search</button>
            </div>
          )}

          <div className="mt-10 text-center">
            <p className="text-body-text mb-3">Still have a question?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-6 py-3 rounded-2xl hover:bg-brand-green-dark transition-colors">
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
