import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | UaDay Cleaning',
  description: 'UaDay Cleaning terms and conditions of service.',
  alternates: { canonical: 'https://uadaycleaning.com.au/terms' },
  robots: { index: false },
}

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-heading font-900 text-dark-text text-4xl md:text-5xl mb-3">Terms & Conditions</h1>
        <p className="text-body-text text-sm mb-10">Last updated: 1 January 2025</p>

        <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-dark-text prose-p:text-body-text prose-p:leading-relaxed prose-a:text-brand-green">
          <h2>1. Agreement to Terms</h2>
          <p>By engaging UaDay Cleaning (&quot;the Company&quot;) for any cleaning services, you (&quot;the Client&quot;) agree to be bound by these Terms and Conditions. These terms apply to all bookings, whether made online, by phone, or in person.</p>

          <h2>2. Services</h2>
          <p>UaDay Cleaning provides professional cleaning services including residential cleaning, commercial cleaning, end of lease cleaning, and deep cleaning. All services are provided as agreed at the time of booking.</p>

          <h2>3. Bookings and Quotes</h2>
          <ul>
            <li>All quotes are estimates based on the information provided at the time of booking.</li>
            <li>Final pricing may vary if the property condition differs significantly from what was described.</li>
            <li>We reserve the right to adjust pricing with notice if additional work is required.</li>
            <li>A confirmed booking constitutes a contract between UaDay Cleaning and the Client.</li>
          </ul>

          <h2>4. Payment</h2>
          <ul>
            <li>Payment is due on completion of service unless alternative arrangements are agreed in writing.</li>
            <li>We accept cash, bank transfer, and major credit cards.</li>
            <li>Commercial clients may be offered net 14-day payment terms upon application.</li>
            <li>Outstanding invoices attract 5% per month interest after 30 days.</li>
          </ul>

          <h2>5. Cancellation Policy</h2>
          <ul>
            <li>Cancellations made more than 24 hours in advance: no charge.</li>
            <li>Cancellations made within 24 hours: 50% of the booking fee applies.</li>
            <li>No-shows or cancellations on the day: full booking fee applies.</li>
            <li>We reserve the right to cancel bookings due to unforeseen circumstances and will provide as much notice as possible.</li>
          </ul>

          <h2>6. Bond-Back Guarantee</h2>
          <p>Our bond-back guarantee applies to end of lease cleaning services only, subject to the following conditions:</p>
          <ul>
            <li>The property must not have been re-occupied or used after our clean.</li>
            <li>The re-clean request must be made within 72 hours of the original inspection.</li>
            <li>The guarantee covers items listed on our cleaning checklist only.</li>
            <li>Damage pre-existing before our clean is not covered.</li>
          </ul>

          <h2>7. Access to Property</h2>
          <ul>
            <li>The Client must ensure safe and unobstructed access to the property at the agreed time.</li>
            <li>If access is not provided, the cancellation policy will apply.</li>
            <li>The Client is responsible for securing any valuables before our team arrives.</li>
          </ul>

          <h2>8. Liability</h2>
          <ul>
            <li>UaDay Cleaning carries public liability insurance covering accidental damage caused by our team.</li>
            <li>Claims must be reported within 24 hours of the service.</li>
            <li>We are not liable for pre-existing damage, normal wear and tear, or damage caused by faulty products or appliances.</li>
            <li>Our liability is limited to the cost of the cleaning service provided.</li>
          </ul>

          <h2>9. Eco-Friendly Products</h2>
          <p>We use certified eco-friendly cleaning products. Clients with specific allergies or product preferences must notify us at the time of booking. We cannot be held liable for reactions to products where no prior notice was given.</p>

          <h2>10. Privacy</h2>
          <p>Personal information is collected and used in accordance with our <a href="/privacy-policy">Privacy Policy</a>.</p>

          <h2>11. Governing Law</h2>
          <p>These Terms and Conditions are governed by the laws of Victoria, Australia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Victoria.</p>

          <h2>12. Contact</h2>
          <p>For questions about these Terms, contact us at <a href="mailto:hello@uadaycleaning.com.au">hello@uadaycleaning.com.au</a> or call 0412 345 678.</p>
        </div>
      </div>
    </div>
  )
}
