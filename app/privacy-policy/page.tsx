import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | UaDay Cleaning',
  description: 'UaDay Cleaning privacy policy — how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://uadaycleaning.com.au/privacy-policy' },
  robots: { index: false },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-heading font-900 text-dark-text text-4xl md:text-5xl mb-3">Privacy Policy</h1>
        <p className="text-body-text text-sm mb-10">Last updated: 1 January 2025</p>

        <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-dark-text prose-p:text-body-text prose-p:leading-relaxed prose-a:text-brand-green">
          <h2>1. About This Policy</h2>
          <p>UaDay Cleaning (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs). This policy explains how we collect, use, disclose, and manage your personal information.</p>

          <h2>2. What Information We Collect</h2>
          <p>We collect personal information that is necessary to provide our cleaning services, including:</p>
          <ul>
            <li>Name, email address, phone number</li>
            <li>Property address and service requirements</li>
            <li>Payment information (processed securely via third-party providers)</li>
            <li>Communications you send us (enquiries, feedback)</li>
            <li>Website usage data collected via cookies and analytics tools</li>
          </ul>

          <h2>3. How We Collect Information</h2>
          <p>We collect information when you:</p>
          <ul>
            <li>Complete our online quote or contact forms</li>
            <li>Call or email us directly</li>
            <li>Book a cleaning service</li>
            <li>Browse our website (via cookies and analytics)</li>
            <li>Subscribe to our newsletter or marketing communications</li>
          </ul>

          <h2>4. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and schedule cleaning services</li>
            <li>Process payments and issue invoices</li>
            <li>Communicate with you about your bookings</li>
            <li>Respond to enquiries and complaints</li>
            <li>Send you relevant marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>5. Disclosure of Information</h2>
          <p>We do not sell your personal information to third parties. We may share your information with:</p>
          <ul>
            <li>Our cleaning team members (as necessary to perform your booking)</li>
            <li>Payment processors and accounting software providers</li>
            <li>Analytics and marketing platforms (Google Analytics, etc.) in anonymised form</li>
            <li>Law enforcement or regulatory bodies where required by law</li>
          </ul>

          <h2>6. Cookies and Tracking</h2>
          <p>Our website uses cookies to improve your browsing experience and to collect analytics data. You can control cookie settings through your browser. We use Google Analytics 4 to understand how visitors use our site — this data is anonymised and aggregated.</p>

          <h2>7. Data Security</h2>
          <p>We take reasonable steps to protect your personal information from misuse, interference, and loss. We use industry-standard security measures including HTTPS encryption and secure payment processing.</p>

          <h2>8. Data Retention</h2>
          <p>We retain personal information for as long as necessary to provide our services and comply with legal obligations. Client records are typically retained for 7 years in accordance with Australian tax law.</p>

          <h2>9. Access and Correction</h2>
          <p>You have the right to access the personal information we hold about you and to request corrections. To do so, contact us at <a href="mailto:hello@uadaycleaning.com.au">hello@uadaycleaning.com.au</a>.</p>

          <h2>10. Marketing Communications</h2>
          <p>We may send you marketing emails if you have opted in. You can unsubscribe at any time by clicking the &quot;unsubscribe&quot; link in any marketing email or by contacting us directly.</p>

          <h2>11. Changes to This Policy</h2>
          <p>We may update this policy from time to time. The latest version will always be available on this page. Continued use of our services after any changes constitutes acceptance of the updated policy.</p>

          <h2>12. Contact Us</h2>
          <p>For privacy-related enquiries, contact us at:</p>
          <ul>
            <li>Email: <a href="mailto:hello@uadaycleaning.com.au">hello@uadaycleaning.com.au</a></li>
            <li>Phone: 0412 345 678</li>
            <li>Address: West Melbourne, VIC 3003</li>
          </ul>
          <p>If you are not satisfied with our response, you may contact the <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">Office of the Australian Information Commissioner (OAIC)</a>.</p>
        </div>
      </div>
    </div>
  )
}
