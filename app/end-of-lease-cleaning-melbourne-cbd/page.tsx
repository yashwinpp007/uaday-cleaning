import type { Metadata } from 'next'
import LandingPage from '@/components/sections/LandingPage'
import { endOfLeaseCbd as page } from '@/lib/data/landing-pages'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  alternates: { canonical: `${SITE_URL}${page.path}` },
  openGraph: { title: page.metaTitle, description: page.metaDescription, url: `${SITE_URL}${page.path}` },
}

export default function EndOfLeaseMelbourneCbdPage() {
  return <LandingPage page={page} />
}
