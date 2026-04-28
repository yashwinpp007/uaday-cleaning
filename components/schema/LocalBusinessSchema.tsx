export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://uadaycleaning.com.au/#business',
        name: 'UaDay Cleaning',
        description: 'Professional residential, commercial and end of lease cleaning services in West Melbourne, VIC.',
        url: 'https://uadaycleaning.com.au',
        telephone: '+61412345678',
        email: 'hello@uadaycleaning.com.au',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'West Melbourne',
          addressLocality: 'Melbourne',
          addressRegion: 'VIC',
          postalCode: '3003',
          addressCountry: 'AU',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -37.8136,
          longitude: 144.9631,
        },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '18:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '08:00', closes: '16:00' },
        ],
        priceRange: '$$',
        image: 'https://uadaycleaning.com.au/og-image.jpg',
        sameAs: ['https://facebook.com/uadaycleaning', 'https://instagram.com/uadaycleaning'],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '500',
          bestRating: '5',
          worstRating: '1',
        },
        areaServed: [
          'Truganina', 'Hoppers Crossing', 'Werribee', 'Tarneit', 'Point Cook',
          'Laverton', 'Altona Meadows', 'Williams Landing', 'West Melbourne',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Cleaning Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Cleaning' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Cleaning' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'End of Lease Cleaning' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deep Cleaning' } },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://uadaycleaning.com.au/#website',
        url: 'https://uadaycleaning.com.au',
        name: 'UaDay Cleaning',
        publisher: { '@id': 'https://uadaycleaning.com.au/#business' },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
