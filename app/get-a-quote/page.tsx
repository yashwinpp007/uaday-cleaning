import type { Metadata } from 'next'
import { Shield, Star, CheckCircle, Phone } from 'lucide-react'
import HubSpotForm from '@/components/ui/HubSpotForm'

export const metadata: Metadata = {
  title: 'Get a Free Quote | UaDay Cleaning Deanside',
  description:
    'Get a free, no-obligation cleaning quote from UaDay Cleaning. Residential, commercial and end of lease cleaning in Deanside and surrounding suburbs.',
  alternates: { canonical: 'https://uadaycleaning.com.au/get-a-quote' },
}

export default function GetAQuotePage() {
  return (
    <div className="min-h-screen bg-off-white pt-40 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="font-heading font-900 text-dark-text text-4xl md:text-5xl mb-3">Get a Free Quote</h1>
          <p className="text-body-text text-lg">No obligation. We&apos;ll get back to you within the hour.</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          {/* HubSpot Form */}
          <div className="bg-white rounded-5xl p-8 shadow-card">
            <HubSpotForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Trust badges */}
            <div className="bg-white rounded-4xl p-6 shadow-card">
              <h3 className="font-heading font-800 text-dark-text text-lg mb-4">Why UaDay?</h3>
              <ul className="space-y-3">
                {[
                  { icon: Shield, text: 'Fully Insured & Police Checked' },
                  { icon: CheckCircle, text: 'Bond-Back Guarantee' },
                  { icon: Star, text: '4.9/5 Rating — 500+ Reviews' },
                  { icon: CheckCircle, text: 'Eco-Friendly Products' },
                  { icon: CheckCircle, text: 'No Lock-In Contracts' },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-sm text-body-text">
                    <item.icon className="w-4 h-4 text-brand-green flex-shrink-0" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-green-light rounded-4xl p-6">
              <p className="font-heading font-800 text-dark-text text-lg mb-2">Prefer to Call?</p>
              <a href="tel:0414375051" className="flex items-center gap-2 text-brand-green font-semibold text-xl">
                <Phone className="w-5 h-5" /> 0414 375 051
              </a>
              <p className="text-body-text text-xs mt-2">Mon–Sun: 8am – 10pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
