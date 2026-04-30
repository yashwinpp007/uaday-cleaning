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
    default: "UaDay Cleaning | Melbourne's Professional Cleaning Service",
    template: '%s | UaDay Cleaning',
  },
  description:
    "Top-rated residential, commercial & end of lease cleaning across Melbourne. Fully insured, bond-back guaranteed. Serving Deanside, Tarneit, Point Cook, Werribee & surrounds. Get a free quote today!",
  keywords: [
    'cleaning services melbourne',
    'cleaning services west melbourne',
    'end of lease cleaning melbourne',
    'residential cleaning melbourne',
    'commercial cleaning melbourne',
    'bond back cleaning',
    'deep cleaning melbourne',
    'house cleaning tarneit',
    'cleaning point cook',
    'cleaning werribee',
    'cleaning truganina',
    'cleaning hoppers crossing',
    'office cleaning melbourne',
    'spring cleaning melbourne',
  ],
  authors: [{ name: 'UaDay Cleaning' }],
  creator: 'UaDay Cleaning',
  metadataBase: new URL('https://uadaycleaning.com.au'),
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://uadaycleaning.com.au',
    siteName: 'UaDay Cleaning',
    title: "UaDay Cleaning | Melbourne's Professional Cleaning Service",
    description:
      "Top-rated residential, commercial & end of lease cleaning across Melbourne. Fully insured, bond-back guaranteed. Serving Deanside, Tarneit, Point Cook, Werribee & surrounds.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "UaDay Cleaning | Melbourne's Professional Cleaning Service",
    description: "Top-rated residential, commercial & end of lease cleaning across Melbourne. Fully insured, bond-back guaranteed.",
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
