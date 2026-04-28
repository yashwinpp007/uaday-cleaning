import type { Metadata } from 'next'
import { Raleway, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-raleway',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'UaDay Cleaning | Professional Cleaning Services in West Melbourne',
    template: '%s | UaDay Cleaning',
  },
  description:
    'Professional residential, commercial & end of lease cleaning services in West Melbourne. Eco-friendly, fully insured, bond-back guaranteed. Get a free quote today!',
  keywords: [
    'cleaning services west melbourne',
    'end of lease cleaning',
    'residential cleaning',
    'commercial cleaning',
    'bond back cleaning',
  ],
  authors: [{ name: 'UaDay Cleaning' }],
  creator: 'UaDay Cleaning',
  metadataBase: new URL('https://uadaycleaning.com.au'),
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://uadaycleaning.com.au',
    siteName: 'UaDay Cleaning',
    title: 'UaDay Cleaning | Professional Cleaning Services in West Melbourne',
    description:
      'Professional residential, commercial & end of lease cleaning services in West Melbourne.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UaDay Cleaning | West Melbourne',
    description: 'Professional cleaning services in West Melbourne.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU" className={`${raleway.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body text-body-text bg-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
