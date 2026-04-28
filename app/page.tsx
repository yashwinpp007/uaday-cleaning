import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import TrustBar from '@/components/sections/TrustBar'
import ServicesOverview from '@/components/sections/ServicesOverview'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import HowItWorks from '@/components/sections/HowItWorks'
import GalleryStrip from '@/components/sections/GalleryStrip'
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel'
import ServiceAreas from '@/components/sections/ServiceAreas'
import HomeFAQ from '@/components/sections/HomeFAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import LocalBusinessSchema from '@/components/schema/LocalBusinessSchema'

export const metadata: Metadata = {
  title: 'Professional Cleaning Services in West Melbourne | UaDay Cleaning',
  description:
    'West Melbourne\'s trusted professional cleaning services. Residential, commercial & end of lease cleaning. Eco-friendly, fully insured, bond-back guaranteed. Get a free quote today!',
  alternates: { canonical: 'https://uadaycleaning.com.au' },
}

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <HeroSection />
      <TrustBar />
      <ServicesOverview />
      <WhyChooseUs />
      <HowItWorks />
      <GalleryStrip />
      <TestimonialsCarousel />
      <ServiceAreas />
      <HomeFAQ />
      <FinalCTA />
    </>
  )
}
