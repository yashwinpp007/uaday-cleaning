interface ServiceSchemaProps {
  name: string
  description: string
  url: string
  areaServed?: string[]
}

export default function ServiceSchema({ name, description, url, areaServed }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'LocalBusiness',
      name: 'UaDay Cleaning',
      url: 'https://uadaycleaning.com.au',
    },
    areaServed: areaServed ?? ['West Melbourne', 'Truganina', 'Hoppers Crossing', 'Werribee', 'Tarneit', 'Point Cook'],
    serviceType: 'Cleaning Service',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
