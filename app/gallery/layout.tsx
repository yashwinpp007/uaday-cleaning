import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Cleaning Gallery | Before & After Photos',
  description:
    'See real before-and-after results from UDAY Cleaning across Melbourne. Residential, commercial, end of lease and deep cleaning photos from Deanside, Tarneit, Point Cook & more.',
  alternates: { canonical: `${SITE_URL}/gallery` },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children
}
