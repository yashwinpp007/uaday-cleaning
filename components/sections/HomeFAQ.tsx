'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Accordion from '@/components/ui/Accordion'

const faqs = [
  {
    question: 'Do you bring your own cleaning products and equipment?',
    answer: 'Yes! We bring all necessary eco-friendly cleaning products and professional equipment to every job. You don\'t need to supply anything — just let us in and we\'ll handle the rest.',
  },
  {
    question: 'Are you fully insured?',
    answer: 'Absolutely. UaDay Cleaning is fully insured with public liability coverage. You can have complete peace of mind knowing your property and belongings are protected during every clean.',
  },
  {
    question: 'Do you offer a bond-back guarantee for end of lease cleaning?',
    answer: 'Yes! We offer a 100% bond-back guarantee on all end of lease cleans. If your real estate agent is not satisfied, we\'ll return and re-clean the specified areas at no additional charge.',
  },
  {
    question: 'How do I get a quote?',
    answer: 'Getting a quote is easy. You can fill out our online quote form, call us on 0414 375 051, or email us. We\'ll get back to you within the hour with a transparent, no-obligation price.',
  },
  {
    question: 'Can I book a same-day clean?',
    answer: 'We do offer same-day cleaning services subject to availability. Call us early in the morning to check availability for that day. We always try our best to accommodate urgent requests.',
  },
  {
    question: 'What areas do you service?',
    answer: 'We service all of Deanside and surrounding suburbs including Truganina, Hoppers Crossing, Werribee, Tarneit, Point Cook, Laverton, Altona Meadows, Williams Landing, and more.',
  },
]

export default function HomeFAQ() {
  return (
    <SectionWrapper className="py-20 bg-off-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-brand-green-light text-brand-green font-semibold text-sm px-4 py-2 rounded-full mb-4">FAQ</span>
          <h2 className="font-heading font-900 text-dark-text text-4xl md:text-5xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-body-text text-lg">Everything you need to know about our cleaning services</p>
        </motion.div>

        <Accordion items={faqs} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-body-text mb-3">Still have questions?</p>
          <Link href="/faq" className="text-brand-green font-semibold hover:text-brand-green-dark transition-colors">
            View all FAQs →
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
