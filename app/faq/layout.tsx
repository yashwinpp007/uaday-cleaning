import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about UDAY Cleaning\'s pricing, bond-back guarantee, eco-friendly products, booking process and service areas across Melbourne\'s west.',
  alternates: { canonical: `${SITE_URL}/faq` },
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children
}
