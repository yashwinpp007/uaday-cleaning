import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for your quote request. UDAY Cleaning will be in touch within 1 hour during business hours.',
  robots: { index: false, follow: true },
}

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children
}
