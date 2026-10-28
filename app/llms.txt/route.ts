import { SITE_URL, SITE_NAME, BUSINESS_PHONE, BUSINESS_EMAIL } from '@/lib/site'

export function GET() {
  const body = `# ${SITE_NAME}

> ${SITE_NAME} is a fully insured, family-run professional cleaning company based in Deanside, Victoria, servicing Melbourne's west and travelling into the Melbourne CBD, Docklands and Southbank. Services: end of lease (bond back) cleaning, residential, deep, commercial, gym, retail, office, cafe and medical cleaning. Police-checked cleaners, eco-friendly products, free quotes.

## Key facts
- Business: ${SITE_NAME}, Deanside VIC 3336
- Phone: ${BUSINESS_PHONE}
- Email: ${BUSINESS_EMAIL}
- Guarantee: 100% bond-back guarantee on end of lease cleaning (re-clean at no charge if the agent is not satisfied)
- Quotes: free and no-obligation

## Main pages
- [End of lease cleaning, Melbourne CBD](${SITE_URL}/end-of-lease-cleaning-melbourne-cbd): vacate cleaning for CBD, Docklands and Southbank apartments
- [Commercial cleaning, Melbourne CBD](${SITE_URL}/commercial-cleaning-melbourne-cbd): offices, gyms, shops, cafes, clinics, strata
- [All services](${SITE_URL}/services)
- [End of lease cleaning](${SITE_URL}/services/end-of-lease-cleaning)
- [Gym and fitness cleaning](${SITE_URL}/services/gyms-fitness-cleaning)
- [Retail shop cleaning](${SITE_URL}/services/retail-shop-cleaning)
- [Service areas](${SITE_URL}/service-areas)
- [FAQ](${SITE_URL}/faq)
- [Get a quote](${SITE_URL}/get-a-quote)

## Guides
- [End of lease cleaning checklist: what agents inspect](${SITE_URL}/blog/end-of-lease-cleaning-checklist-melbourne)
- [End of lease cleaning Melbourne CBD apartments](${SITE_URL}/blog/end-of-lease-cleaning-melbourne-cbd-apartments)
- [Bond cleaning vs DIY in Victoria](${SITE_URL}/blog/bond-cleaning-vs-diy-victoria)
- [Choosing a gym cleaner](${SITE_URL}/blog/choose-commercial-cleaner-gym-fitness-studio-melbourne)
- [Retail shop cleaning scope and cost](${SITE_URL}/blog/retail-shop-cleaning-melbourne-scope-and-cost)
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
