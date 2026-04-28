'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Building2, Key, Sparkles, CheckCircle, ChevronRight, ChevronLeft, Shield, Star, Phone } from 'lucide-react'
import Button3D from '@/components/ui/Button3D'

const TOTAL_STEPS = 5

const serviceTypes = [
  { id: 'residential', label: 'Residential Cleaning', icon: Home, desc: 'Home cleaning — regular or one-off' },
  { id: 'commercial', label: 'Commercial Cleaning', icon: Building2, desc: 'Office or business cleaning' },
  { id: 'eol', label: 'End of Lease', icon: Key, desc: 'Bond-back guaranteed' },
  { id: 'deep', label: 'Deep / Spring Clean', icon: Sparkles, desc: 'Full top-to-bottom clean' },
]

const suburbs = [
  'Truganina', 'Hoppers Crossing', 'Werribee', 'Tarneit', 'Point Cook',
  'Laverton', 'Altona Meadows', 'Williams Landing', 'Deer Park', 'Sunshine',
  'Footscray', 'Yarraville', 'Williamstown', 'Newport', 'Altona', 'Brooklyn',
  'Other',
]

const timeSlots = ['7am – 9am', '9am – 12pm', '12pm – 3pm', '3pm – 6pm', 'Flexible']

interface FormData {
  serviceType: string
  bedrooms: string
  bathrooms: string
  extras: string[]
  suburb: string
  postcode: string
  date: string
  timeSlot: string
  name: string
  email: string
  phone: string
  notes: string
}

export default function GetAQuotePage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormData>({
    serviceType: '',
    bedrooms: '',
    bathrooms: '',
    extras: [],
    suburb: '',
    postcode: '',
    date: '',
    timeSlot: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  })

  const update = (key: keyof FormData, value: string | string[]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const toggleExtra = (extra: string) => {
    const current = form.extras
    const updated = current.includes(extra)
      ? current.filter((e) => e !== extra)
      : [...current, extra]
    update('extras', updated)
  }

  const handleSubmit = async () => {
    // GA4 conversion event
    type GtagFn = (...args: unknown[]) => void
    const win = window as unknown as { gtag?: GtagFn }
    if (typeof window !== 'undefined' && win.gtag) {
      win.gtag('event', 'conversion', {
        event_category: 'lead',
        event_label: 'quote_form_submit',
        service_type: form.serviceType,
      })
    }
    router.push('/thank-you')
  }

  const canProceed = () => {
    if (step === 1) return form.serviceType !== ''
    if (step === 2) return form.bedrooms !== '' && form.bathrooms !== ''
    if (step === 3) return form.suburb !== ''
    if (step === 4) return form.date !== '' && form.timeSlot !== ''
    if (step === 5) return form.name !== '' && form.email !== '' && form.phone !== ''
    return true
  }

  const stepLabels = ['Service Type', 'Property Details', 'Location', 'Date & Time', 'Your Details']

  return (
    <div className="min-h-screen bg-off-white pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="font-heading font-900 text-dark-text text-4xl md:text-5xl mb-3">Get a Free Quote</h1>
          <p className="text-body-text text-lg">Takes less than 2 minutes. No obligation.</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          {/* Form */}
          <div className="bg-white rounded-5xl p-8 shadow-card">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                {stepLabels.map((label, i) => (
                  <div key={i} className={`flex flex-col items-center gap-1 ${i < stepLabels.length - 1 ? 'flex-1' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      i + 1 < step ? 'bg-brand-green text-white' :
                      i + 1 === step ? 'bg-brand-green text-white ring-4 ring-brand-green/20' :
                      'bg-light-border text-body-text'
                    }`}>
                      {i + 1 < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                    </div>
                    <span className={`hidden sm:block text-xs font-medium ${i + 1 === step ? 'text-brand-green' : 'text-body-text'}`}>{label}</span>
                    {i < stepLabels.length - 1 && (
                      <div className={`h-0.5 flex-1 mx-1 mt-4 ${i + 1 < step ? 'bg-brand-green' : 'bg-light-border'}`} style={{ position: 'absolute', display: 'none' }} />
                    )}
                  </div>
                ))}
              </div>
              <div className="h-2 bg-light-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-green rounded-full transition-all duration-500"
                  style={{ width: `${((step - 1) / (TOTAL_STEPS - 1)) * 100}%` }}
                />
              </div>
              <p className="text-right text-body-text text-sm mt-1">Step {step} of {TOTAL_STEPS}</p>
            </div>

            {/* Step Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step 1: Service Type */}
                {step === 1 && (
                  <div>
                    <h2 className="font-heading font-800 text-dark-text text-2xl mb-6">What type of clean do you need?</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {serviceTypes.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => update('serviceType', s.id)}
                          className={`flex items-center gap-4 p-5 rounded-3xl border-2 transition-all text-left ${
                            form.serviceType === s.id
                              ? 'border-brand-green bg-brand-green-light'
                              : 'border-light-border hover:border-brand-green/50 hover:bg-brand-green-light/30'
                          }`}
                        >
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                            form.serviceType === s.id ? 'bg-brand-green' : 'bg-brand-green-light'
                          }`}>
                            <s.icon className={`w-6 h-6 ${form.serviceType === s.id ? 'text-white' : 'text-brand-green'}`} />
                          </div>
                          <div>
                            <p className="font-heading font-700 text-dark-text">{s.label}</p>
                            <p className="text-body-text text-xs">{s.desc}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Property Details */}
                {step === 2 && (
                  <div>
                    <h2 className="font-heading font-800 text-dark-text text-2xl mb-6">Tell us about the property</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block font-semibold text-dark-text mb-3">Number of Bedrooms</label>
                        <div className="flex flex-wrap gap-3">
                          {['Studio', '1', '2', '3', '4', '5+'].map((n) => (
                            <button
                              key={n}
                              onClick={() => update('bedrooms', n)}
                              className={`w-14 h-14 rounded-2xl border-2 font-heading font-700 transition-all ${
                                form.bedrooms === n ? 'border-brand-green bg-brand-green text-white' : 'border-light-border text-dark-text hover:border-brand-green/50'
                              }`}
                            >
                              {n}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block font-semibold text-dark-text mb-3">Number of Bathrooms</label>
                        <div className="flex flex-wrap gap-3">
                          {['1', '2', '3', '4+'].map((n) => (
                            <button
                              key={n}
                              onClick={() => update('bathrooms', n)}
                              className={`w-14 h-14 rounded-2xl border-2 font-heading font-700 transition-all ${
                                form.bathrooms === n ? 'border-brand-green bg-brand-green text-white' : 'border-light-border text-dark-text hover:border-brand-green/50'
                              }`}
                            >
                              {n}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block font-semibold text-dark-text mb-3">Extras (optional)</label>
                        <div className="flex flex-wrap gap-3">
                          {['Carpet Steam Clean', 'Oven Deep Clean', 'Windows Interior', 'Garage', 'Balcony'].map((extra) => (
                            <button
                              key={extra}
                              onClick={() => toggleExtra(extra)}
                              className={`px-4 py-2 rounded-full border-2 text-sm font-semibold transition-all ${
                                form.extras.includes(extra) ? 'border-brand-green bg-brand-green text-white' : 'border-light-border text-body-text hover:border-brand-green/50'
                              }`}
                            >
                              {extra}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Location */}
                {step === 3 && (
                  <div>
                    <h2 className="font-heading font-800 text-dark-text text-2xl mb-6">Where is the property?</h2>
                    <div className="space-y-5">
                      <div>
                        <label className="block font-semibold text-dark-text mb-2">Suburb</label>
                        <select
                          value={form.suburb}
                          onChange={(e) => update('suburb', e.target.value)}
                          className="w-full px-5 py-3.5 rounded-2xl border-2 border-light-border focus:border-brand-green outline-none text-dark-text bg-white"
                        >
                          <option value="">Select your suburb...</option>
                          {suburbs.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block font-semibold text-dark-text mb-2">Postcode</label>
                        <input
                          type="text"
                          value={form.postcode}
                          onChange={(e) => update('postcode', e.target.value)}
                          placeholder="e.g. 3029"
                          className="w-full px-5 py-3.5 rounded-2xl border-2 border-light-border focus:border-brand-green outline-none text-dark-text"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Date & Time */}
                {step === 4 && (
                  <div>
                    <h2 className="font-heading font-800 text-dark-text text-2xl mb-6">When would you like the clean?</h2>
                    <div className="space-y-5">
                      <div>
                        <label className="block font-semibold text-dark-text mb-2">Preferred Date</label>
                        <input
                          type="date"
                          value={form.date}
                          onChange={(e) => update('date', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-5 py-3.5 rounded-2xl border-2 border-light-border focus:border-brand-green outline-none text-dark-text"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-dark-text mb-3">Preferred Time Slot</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              onClick={() => update('timeSlot', slot)}
                              className={`py-3 px-4 rounded-2xl border-2 text-sm font-semibold transition-all ${
                                form.timeSlot === slot ? 'border-brand-green bg-brand-green text-white' : 'border-light-border text-body-text hover:border-brand-green/50'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Contact Info */}
                {step === 5 && (
                  <div>
                    <h2 className="font-heading font-800 text-dark-text text-2xl mb-6">Your Contact Details</h2>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Full Name *"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        className="w-full px-5 py-3.5 rounded-2xl border-2 border-light-border focus:border-brand-green outline-none text-dark-text"
                      />
                      <input
                        type="email"
                        placeholder="Email Address *"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        className="w-full px-5 py-3.5 rounded-2xl border-2 border-light-border focus:border-brand-green outline-none text-dark-text"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        className="w-full px-5 py-3.5 rounded-2xl border-2 border-light-border focus:border-brand-green outline-none text-dark-text"
                      />
                      <textarea
                        placeholder="Additional notes or special requests (optional)"
                        value={form.notes}
                        onChange={(e) => update('notes', e.target.value)}
                        rows={4}
                        className="w-full px-5 py-3.5 rounded-2xl border-2 border-light-border focus:border-brand-green outline-none text-dark-text resize-none"
                      />
                      <p className="text-body-text text-xs">By submitting, you agree to our <a href="/privacy-policy" className="text-brand-green underline">Privacy Policy</a>. We never share your details.</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-light-border">
              {step > 1 ? (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="flex items-center gap-2 text-body-text font-semibold hover:text-brand-green transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
              ) : <div />}

              {step < TOTAL_STEPS ? (
                <Button3D
                  onClick={canProceed() ? () => setStep((s) => s + 1) : undefined}
                  disabled={!canProceed()}
                  size="md"
                >
                  Continue <ChevronRight className="w-4 h-4 inline ml-1" />
                </Button3D>
              ) : (
                <Button3D
                  onClick={canProceed() ? handleSubmit : undefined}
                  disabled={!canProceed()}
                  size="md"
                >
                  Submit Quote Request
                </Button3D>
              )}
            </div>
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
              <a href="tel:0412345678" className="flex items-center gap-2 text-brand-green font-semibold text-xl">
                <Phone className="w-5 h-5" /> 0412 345 678
              </a>
              <p className="text-body-text text-xs mt-2">Mon–Fri 7am–6pm, Sat–Sun 8am–4pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
