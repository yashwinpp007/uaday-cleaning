'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import Button3D from '@/components/ui/Button3D'

const hours = [
  { day: 'Monday', hours: '7:00am – 6:00pm' },
  { day: 'Tuesday', hours: '7:00am – 6:00pm' },
  { day: 'Wednesday', hours: '7:00am – 6:00pm' },
  { day: 'Thursday', hours: '7:00am – 6:00pm' },
  { day: 'Friday', hours: '7:00am – 6:00pm' },
  { day: 'Saturday', hours: '8:00am – 4:00pm' },
  { day: 'Sunday', hours: '8:00am – 4:00pm' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-green-light to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-brand-green text-white font-semibold text-sm px-4 py-2 rounded-full mb-5">Get in Touch</span>
          <h1 className="font-heading font-900 text-dark-text text-5xl md:text-6xl mb-5">Contact Us</h1>
          <p className="text-body-text text-xl max-w-2xl mx-auto">Have a question or ready to book? We&apos;d love to hear from you.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-brand-green-light rounded-5xl p-10 text-center">
                  <CheckCircle className="w-16 h-16 text-brand-green mx-auto mb-4" />
                  <h2 className="font-heading font-900 text-dark-text text-2xl mb-3">Message Received!</h2>
                  <p className="text-body-text">Thank you for getting in touch. We&apos;ll get back to you within the hour during business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="font-heading font-900 text-dark-text text-2xl mb-6">Send Us a Message</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl border-2 border-light-border focus:border-brand-green outline-none text-dark-text"
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl border-2 border-light-border focus:border-brand-green outline-none text-dark-text"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl border-2 border-light-border focus:border-brand-green outline-none text-dark-text"
                  />
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl border-2 border-light-border focus:border-brand-green outline-none text-dark-text bg-white"
                  >
                    <option value="">Select a Service (optional)</option>
                    <option>Residential Cleaning</option>
                    <option>Commercial Cleaning</option>
                    <option>End of Lease Cleaning</option>
                    <option>Deep / Spring Cleaning</option>
                    <option>General Enquiry</option>
                  </select>
                  <textarea
                    placeholder="Your message... *"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl border-2 border-light-border focus:border-brand-green outline-none text-dark-text resize-none"
                  />
                  <Button3D type="submit" size="md">
                    Send Message <Send className="w-4 h-4 inline ml-2" />
                  </Button3D>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div className="bg-off-white rounded-5xl p-7">
                <h3 className="font-heading font-800 text-dark-text text-xl mb-5">Contact Information</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="tel:0412345678" className="flex items-center gap-3 text-body-text hover:text-brand-green transition-colors group">
                      <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-dark-text">0412 345 678</p>
                        <p className="text-xs">Call or SMS</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@uadaycleaning.com.au" className="flex items-center gap-3 text-body-text hover:text-brand-green transition-colors">
                      <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-dark-text">hello@uadaycleaning.com.au</p>
                        <p className="text-xs">We reply within the hour</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark-text">West Melbourne, VIC 3003</p>
                      <p className="text-xs">Servicing all of West Melbourne</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div className="bg-off-white rounded-5xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <Clock className="w-5 h-5 text-brand-green" />
                  <h3 className="font-heading font-800 text-dark-text text-xl">Operating Hours</h3>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {hours.map((row) => (
                      <tr key={row.day} className="border-b border-light-border last:border-0">
                        <td className="py-2.5 font-semibold text-dark-text">{row.day}</td>
                        <td className="py-2.5 text-right text-body-text">{row.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-4xl overflow-hidden shadow-lg border border-light-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200755.31744388296!2d144.6287!3d-37.8136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d514af0b56b%3A0x5045675218ce720!2sWest%20Melbourne%20VIC%203003!5e0!3m2!1sen!2sau!4v1234567890"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="UaDay Cleaning location in West Melbourne"
            />
          </div>
        </div>
      </section>
    </>
  )
}
