// Navigation grouping for the header Services menu: category → sub-category → services.
// Names, icons and URLs come from lib/data/services.ts; this file only decides the grouping.
// Every service slug in services.ts must appear exactly once here.

import { categoryLabels, categoryOrder, servicesBySlug } from './services'
import type { Service, ServiceCategory } from './services'

interface SubCategoryDef {
  label: string
  slugs: string[]
}

const subCategoryDefs: Record<ServiceCategory, SubCategoryDef[]> = {
  residential: [
    {
      label: 'Home Cleaning',
      slugs: ['residential-cleaning', 'once-off-cleaning', 'deep-cleaning', 'airbnb-cleaning'],
    },
    { label: 'Moving', slugs: ['end-of-lease-cleaning', 'moving-in-out-cleaning'] },
    {
      label: 'Specialty Cleans',
      slugs: ['carpet-cleaning', 'window-cleaning', 'oven-cleaning', 'pressure-washing', 'wall-washing'],
    },
  ],
  commercial: [
    {
      label: 'Business and Offices',
      slugs: ['commercial-cleaning', 'office-cleaning', 'owners-corporation-cleaning'],
    },
    {
      label: 'Sites and Venues',
      slugs: ['builders-cleaning', 'gyms-fitness-cleaning', 'event-venues-cleaning'],
    },
  ],
  health: [
    { label: 'Care Services', slugs: ['ndis-cleaning', 'aged-care-cleaning', 'childcare-cleaning'] },
    { label: 'Clinics', slugs: ['medical-centre-cleaning', 'dental-clinics-cleaning'] },
  ],
  community: [
    { label: 'Community', slugs: ['church-cleaning', 'community-centres-cleaning'] },
    { label: 'Government', slugs: ['government-buildings-cleaning'] },
  ],
}

export interface ServiceMenuSubCategory {
  label: string
  services: Service[]
}

export interface ServiceMenuCategory {
  key: ServiceCategory
  label: string
  subCategories: ServiceMenuSubCategory[]
}

export const serviceMenu: ServiceMenuCategory[] = categoryOrder.map((key) => ({
  key,
  label: categoryLabels[key],
  subCategories: subCategoryDefs[key].map((sub) => ({
    label: sub.label,
    services: sub.slugs.map((slug) => servicesBySlug[slug]).filter(Boolean),
  })),
}))
