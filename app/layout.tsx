import type { Metadata, Viewport } from 'next'
import { Raleway, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/widgets/WhatsAppButton'
import CallButton from '@/components/widgets/CallButton'
import { SITE_URL } from '@/lib/site'

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
    default: "UDAY Cleaning | Melbourne's Professional Cleaning Service",
    template: '%s | UDAY Cleaning',
  },
  description:
    "Top-rated residential, commercial & end of lease cleaning across Melbourne. Fully insured, bond-back guaranteed. Serving Tarneit, Point Cook, Werribee & surrounds. Get a free quote today!",
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
  authors: [{ name: 'UDAY Cleaning' }],
  creator: 'UDAY Cleaning',
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: SITE_URL,
    siteName: 'UDAY Cleaning',
    title: "UDAY Cleaning | Melbourne's Professional Cleaning Service",
    description:
      "Top-rated residential, commercial & end of lease cleaning across Melbourne. Fully insured, bond-back guaranteed. Serving Tarneit, Point Cook, Werribee & surrounds.",
    images: [{ url: '/opengraph-image?v=2', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "UDAY Cleaning | Melbourne's Professional Cleaning Service",
    description: "Top-rated residential, commercial & end of lease cleaning across Melbourne. Fully insured, bond-back guaranteed.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#5da832',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU" className={`${raleway.variable} ${plusJakarta.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TGFS3B2C');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body text-body-text bg-white antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TGFS3B2C"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CallButton />
      </body>
    </html>
  )
}
