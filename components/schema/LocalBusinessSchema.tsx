export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://udaycleaning.com.au/#business',
        name: 'UDAY Cleaning',
        description: 'Professional residential, commercial and end of lease cleaning services in Deanside, VIC.',
        url: 'https://udaycleaning.com.au',
        telephone: '+61420203336',
        email: 'support@udaycleaning.com.au',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Deanside',
          addressLocality: 'Deanside',
          addressRegion: 'VIC',
          postalCode: '3336',
          addressCountry: 'AU',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -37.683,
          longitude: 144.729,
        },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '08:00', closes: '22:00' },
        ],
        priceRange: '$$',
        image: 'https://udaycleaning.com.au/og-image.jpg',
        sameAs: ['https://facebook.com/udaycleaning', 'https://instagram.com/udaycleaning'],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '500',
          bestRating: '5',
          worstRating: '1',
        },
        areaServed: [
          'Truganina', 'Hoppers Crossing', 'Werribee', 'Tarneit', 'Point Cook',
          'Laverton', 'Altona Meadows', 'Williams Landing', 'Deanside',
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
        '@id': 'https://udaycleaning.com.au/#website',
        url: 'https://udaycleaning.com.au',
        name: 'UDAY Cleaning',
        publisher: { '@id': 'https://udaycleaning.com.au/#business' },
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
