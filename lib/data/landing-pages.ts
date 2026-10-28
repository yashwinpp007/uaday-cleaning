// Content for the Melbourne CBD landing pages (rendered by
// components/sections/LandingPage.tsx).
//
// Content rules: only claim what the site already states (fully insured,
// police-checked, eco-friendly products, free quotes, 100% bond-back guarantee
// on end of lease, REIV-aligned checklist). No invented prices, statistics,
// awards, client names or CBD street address. We are based in Deanside and
// travel into the CBD, so CBD is presented as a service area.

export interface LandingFaq {
  question: string
  answer: string
}

export interface LandingSection {
  heading: string
  intro?: string
  /** Rendered as a two-column tick list. */
  items?: string[]
  /** Rendered as paragraphs. */
  body?: string[]
}

export interface AudienceCard {
  label: string
  /** id of the section to jump to. */
  target: string
  blurb: string
}

export interface LandingPageData {
  path: string
  serviceName: string
  metaTitle: string
  metaDescription: string
  breadcrumbName: string
  eyebrow: string
  h1: string
  heroSubtitle: string
  /** 40-60 word direct answer shown under the hero. */
  quickAnswer: string
  image: string
  imageAlt: string
  audience: AudienceCard[]
  sections: (LandingSection & { id: string })[]
  faqs: LandingFaq[]
  areaServed: string[]
  related: { name: string; href: string; desc: string }[]
  blogLinks: { title: string; href: string }[]
  lastUpdated: string
}

const CBD_AREAS = [
  'Melbourne CBD', 'Docklands', 'Southbank', 'Southern Cross', 'East Melbourne',
  'West Melbourne', 'North Melbourne', 'Carlton', 'Parkville', 'Fitzroy', 'Richmond', 'South Yarra',
]

export const endOfLeaseCbd: LandingPageData = {
  path: '/end-of-lease-cleaning-melbourne-cbd',
  serviceName: 'End of Lease Cleaning Melbourne CBD',
  metaTitle: 'End of Lease Cleaning Melbourne CBD | Bond Back Guarantee',
  metaDescription:
    'End of lease and bond cleaning for Melbourne CBD, Docklands and Southbank apartments. REIV-aligned checklist, 100% bond-back guarantee, fully insured. Free quote.',
  breadcrumbName: 'End of Lease Cleaning Melbourne CBD',
  eyebrow: 'Melbourne CBD, Docklands and Southbank',
  h1: 'End of Lease Cleaning in Melbourne CBD, Bond Back Guaranteed',
  heroSubtitle:
    'Apartment and unit vacate cleans for CBD renters, landlords and property managers. We work to an REIV-aligned checklist and re-clean for free if your agent is not satisfied.',
  quickAnswer:
    'End of lease cleaning in Melbourne CBD is a full top-to-bottom vacate clean of an apartment or unit so it passes the agent’s exit inspection. Uday Cleaning travels into the CBD, Docklands and Southbank, follows an REIV-aligned checklist, issues a tax invoice for your agent and re-cleans free if the agent is not satisfied.',
  image: '/images/gallery/bathroom-clean-1.jpg',
  imageAlt: 'Bathroom cleaned to end of lease standard by Uday Cleaning in Melbourne',
  audience: [
    { label: 'I’m a renter', target: 'renters', blurb: 'Get your bond back without the stress.' },
    { label: 'I’m a property manager', target: 'agents', blurb: 'Reliable turnarounds between tenants.' },
    { label: 'I’m a landlord', target: 'agents', blurb: 'Get the unit re-let ready.' },
  ],
  sections: [
    {
      id: 'renters',
      heading: 'How we clean a CBD apartment for your final inspection',
      intro:
        'Most CBD rentals are apartments, so the clean is compact but detailed. The areas agents look at hardest are the kitchen, bathroom, balcony doors and window tracks.',
      items: [
        'Kitchen: benches, sink, cupboards inside and out, stovetop and rangehood',
        'Oven cleaned inside and out, including racks and door glass',
        'Bathrooms: tiles, grout, shower screen, bath, vanity, toilet and tapware',
        'Floors vacuumed and mopped, including under movable furniture',
        'Skirting boards, doors, door frames and light switches wiped',
        'Window sills, tracks and sliding balcony door tracks cleaned',
        'Mirrors and glass polished streak-free',
        'Wardrobes and built-in storage wiped out',
        'Laundry cupboard or alcove cleaned',
        'Walls spot-cleaned for marks',
      ],
    },
    {
      id: 'agents',
      heading: 'For agents, property managers and landlords',
      body: [
        'Between tenants, a consistent clean to the same standard is what gets a CBD apartment listed quickly. We can quote on a per-unit basis, provide a tax invoice for each job and work around the access and booking arrangements your building has in place.',
        'If you manage several units, tell us in the quote form and we will talk through a repeat arrangement.',
      ],
    },
    {
      id: 'building-access',
      heading: 'Access, lifts and loading docks in CBD buildings',
      intro:
        'High-rise buildings often have rules that affect a cleaning booking. Check these with your building manager or owners corporation before the clean, and tell us when you request a quote.',
      items: [
        'Whether a lift booking or loading dock booking is needed for equipment',
        'Permitted working hours for trades and cleaners in the building',
        'How we collect keys, fobs or access cards, and where to return them',
        'Where we can park or unload for the duration of the clean',
        'Any waste or recycling rules for removing cleaning rubbish',
      ],
    },
    {
      id: 'carpets',
      heading: 'Carpets and add-ons',
      body: [
        'Many Victorian leases require carpets to be professionally steam cleaned, and agents commonly ask for the receipt. Carpet steam cleaning is available as an add-on from $80 for one bedroom, and we can combine it with the clean on the same visit.',
        'Balcony cleaning and wall washing can also be added. Mention them when you request your free quote.',
      ],
    },
    {
      id: 'how-it-works',
      heading: 'How booking works',
      items: [
        '1. Request a free quote online, by phone or on WhatsApp',
        '2. Tell us the apartment size, building access details and inspection date',
        '3. We confirm a time and price',
        '4. We clean to our REIV-aligned checklist and send a tax invoice',
        '5. If the agent is not satisfied, we re-clean the specified areas at no charge',
      ],
    },
  ],
  faqs: [
    {
      question: 'Do you do end of lease cleaning in Melbourne CBD apartments?',
      answer:
        'Yes. Uday Cleaning cleans apartments and units in the Melbourne CBD, Docklands, Southbank and nearby inner suburbs. We are based in Deanside and travel to you.',
    },
    {
      question: 'How much does end of lease cleaning cost in the Melbourne CBD?',
      answer:
        'The price depends on the size of the apartment, the number of bathrooms, the condition of the property and any add-ons such as carpet steam cleaning. We give free, no-obligation quotes. Carpet steam cleaning starts from $80 for one bedroom.',
    },
    {
      question: 'Do I need professional cleaning to get my bond back in Victoria?',
      answer:
        'Under Victorian tenancy law you must leave the property reasonably clean and in the same condition as when you moved in, apart from fair wear and tear. Professional cleaning is not always legally required, but many leases ask for carpets to be professionally cleaned and a professional clean is the most reliable way to pass the exit inspection.',
    },
    {
      question: 'What if the agent says the apartment is not clean enough?',
      answer:
        'Our 100% bond-back guarantee means we return and re-clean the areas the agent specifies at no charge until you get your bond back.',
    },
    {
      question: 'How far ahead should I book?',
      answer:
        'We recommend at least 48 hours before your final inspection so there is time for a re-clean if needed. Urgent same-day bookings may be possible, so call us for availability.',
    },
    {
      question: 'Will you give me an invoice for my property manager?',
      answer: 'Yes. We provide a detailed tax invoice you can submit to your agent as proof of professional cleaning.',
    },
    {
      question: 'Do you handle building access and lift bookings?',
      answer:
        'You or your building manager arrange lift and loading dock bookings. Tell us the access rules when you request your quote and we will plan the visit around them.',
    },
  ],
  areaServed: CBD_AREAS,
  related: [
    { name: 'End of lease cleaning (full details)', href: '/services/end-of-lease-cleaning', desc: 'Checklist, guarantee and FAQs' },
    { name: 'Moving in/out cleaning', href: '/services/moving-in-out-cleaning', desc: 'Clean before you move in' },
    { name: 'Carpet cleaning', href: '/services/carpet-cleaning', desc: 'Steam cleaning for bond' },
    { name: 'Commercial cleaning Melbourne CBD', href: '/commercial-cleaning-melbourne-cbd', desc: 'Offices, gyms and shops' },
  ],
  blogLinks: [
    { title: 'End of lease cleaning checklist: what agents inspect', href: '/blog/end-of-lease-cleaning-checklist-melbourne' },
    { title: 'How to prepare for your end of lease inspection', href: '/blog/how-to-prepare-for-end-of-lease-inspection' },
    { title: 'End of lease cleaning Melbourne CBD apartments: checklist, cost and building rules', href: '/blog/end-of-lease-cleaning-melbourne-cbd-apartments' },
    { title: 'Bond cleaning vs DIY: what Victorian renters need to do', href: '/blog/bond-cleaning-vs-diy-victoria' },
  ],
  lastUpdated: '2026-10-28',
}

export const commercialCbd: LandingPageData = {
  path: '/commercial-cleaning-melbourne-cbd',
  serviceName: 'Commercial Cleaning Melbourne CBD',
  metaTitle: 'Commercial Cleaning Melbourne CBD | Offices, Gyms & Shops',
  metaDescription:
    'Commercial cleaning for Melbourne CBD offices, gyms, retail shops, cafes and medical centres. After-hours, fully insured, police-checked cleaners. Free quote.',
  breadcrumbName: 'Commercial Cleaning Melbourne CBD',
  eyebrow: 'Melbourne CBD, Docklands and Southbank',
  h1: 'Commercial Cleaning in Melbourne CBD for Offices, Gyms and Shops',
  heroSubtitle:
    'Scheduled cleaning for businesses that need a spotless space without disruption. Fully insured, police-checked cleaners, eco-friendly products and after-hours options.',
  quickAnswer:
    'Commercial cleaning in Melbourne CBD is a scheduled service that keeps offices, gyms, shops, cafes and clinics clean and hygienic. Uday Cleaning plans a checklist around your trading hours, cleans after hours where needed, and uses fully insured, police-checked cleaners. Quotes are free after a walk-through or a few details.',
  image: '/images/gallery/tiles-mopped.jpg',
  imageAlt: 'Commercial floor cleaning by Uday Cleaning in Melbourne',
  audience: [
    { label: 'Gym or studio owner', target: 'gyms', blurb: 'Equipment, change rooms and showers.' },
    { label: 'Shop or retail manager', target: 'retail', blurb: 'Floors, glass and fitting rooms.' },
    { label: 'Office manager', target: 'offices', blurb: 'Daily or weekly office cleaning.' },
    { label: 'Cafe, clinic or strata', target: 'other', blurb: 'Food-safe, clinical and common areas.' },
  ],
  sections: [
    {
      id: 'offices',
      heading: 'Office cleaning',
      intro: 'A clean office supports staff wellbeing and the impression clients get when they walk in.',
      items: [
        'Desks, shared surfaces and touch points wiped',
        'Kitchenettes, microwaves and fridges cleaned',
        'Floors vacuumed and mopped',
        'Bathrooms cleaned and restocked on request',
        'Bins emptied and recycling removed',
        'Reception and meeting rooms presented for the day',
      ],
    },
    {
      id: 'gyms',
      heading: 'Gym and fitness studio cleaning',
      intro: 'Members notice cleanliness straight away. We focus on the surfaces people touch and the wet areas that need extra care.',
      items: [
        'Equipment and touch-point surfaces wiped down',
        'Gym floors vacuumed and mopped',
        'Change rooms and lockers cleaned',
        'Showers, tiles and toilets sanitised',
        'Mirrors and glass polished',
        'Bins emptied and reception cleaned',
      ],
    },
    {
      id: 'retail',
      heading: 'Shop and retail cleaning',
      intro: 'Presentation drives sales. We clean around trading hours so customers always walk into a tidy store.',
      items: [
        'Shopfront and internal glass cleaned',
        'Shop floors vacuumed, swept and mopped',
        'Counters, displays and shelving dusted',
        'Fitting rooms, mirrors and handles wiped',
        'Staff areas, stockrooms and toilets cleaned',
        'Entrances and door frames kept presentable',
      ],
    },
    {
      id: 'other',
      heading: 'Cafes, medical centres and strata common areas',
      body: [
        'Cafes and restaurants need food-safe surfaces and floors cleaned after service. Medical and dental clinics need careful, hygiene-focused cleaning of waiting rooms, consulting rooms and bathrooms. Owners corporations need lobbies, lifts, stairwells and shared amenities kept tidy.',
        'We write a scope for each, and you can see more on the service pages linked below.',
      ],
    },
    {
      id: 'how-we-work',
      heading: 'How we work in CBD buildings',
      items: [
        'We plan visits around your trading hours, including early morning and late night',
        'We agree key, fob and alarm arrangements before the first clean',
        'Tell us about lift bookings, loading docks and any building induction rules',
        'We are fully insured, police-checked and use eco-friendly products',
        'You get a written scope so there are no surprises',
      ],
    },
    {
      id: 'frequency',
      heading: 'How often should a business be cleaned?',
      body: [
        'Gyms and cafes are typically cleaned daily or several times a week. Retail shops are often cleaned daily or weekly depending on foot traffic, and offices range from daily to a few times a week. After a walk-through we recommend a frequency that suits your space and budget.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Do you offer commercial cleaning in the Melbourne CBD?',
      answer:
        'Yes. Uday Cleaning provides scheduled commercial cleaning for CBD, Docklands and Southbank businesses including offices, gyms, retail shops, cafes and medical centres. We are based in Deanside and travel to you.',
    },
    {
      question: 'Can you clean after hours?',
      answer:
        'Yes. We can clean early in the morning, late at night or between classes so your staff and customers are not disrupted.',
    },
    {
      question: 'How often should a gym be professionally cleaned?',
      answer:
        'Most gyms clean daily or several times a week, depending on membership and opening hours. We suggest a frequency after a walk-through, and quotes are free.',
    },
    {
      question: 'Do you clean retail shops and shopfront windows?',
      answer:
        'Yes. We clean shop floors, counters, fitting rooms, stockrooms, toilets and shopfront glass, scheduled around trading hours.',
    },
    {
      question: 'Are your cleaners insured and police-checked?',
      answer: 'Yes. Every job is carried out by fully insured, police-checked cleaners using eco-friendly products.',
    },
    {
      question: 'How do I get a quote?',
      answer:
        'Use the online quote form, call 0420 203 336 or message us on WhatsApp. Tell us the type of business, floor area, cleaning frequency and building access rules, and we will quote for free.',
    },
    {
      question: 'Do you handle building access, keys and alarms?',
      answer:
        'We agree key, fob and alarm arrangements before the first clean. Tell us about lift bookings, loading docks or building induction requirements when you request your quote.',
    },
  ],
  areaServed: CBD_AREAS,
  related: [
    { name: 'Commercial cleaning (overview)', href: '/services/commercial-cleaning', desc: 'All commercial services' },
    { name: 'Office cleaning', href: '/services/office-cleaning', desc: 'Daily or weekly office cleans' },
    { name: 'Gyms and fitness cleaning', href: '/services/gyms-fitness-cleaning', desc: 'Change rooms, showers, equipment' },
    { name: 'Retail shop cleaning', href: '/services/retail-shop-cleaning', desc: 'Floors, glass, fitting rooms' },
    { name: 'Cafe and restaurant cleaning', href: '/services/cafe-restaurant-cleaning', desc: 'Food-safe kitchen and floors' },
    { name: 'Medical centre cleaning', href: '/services/medical-centre-cleaning', desc: 'Clinical, hygiene-focused' },
    { name: 'Owners corporation cleaning', href: '/services/owners-corporation-cleaning', desc: 'Lobbies, lifts, stairwells' },
    { name: 'End of lease cleaning Melbourne CBD', href: '/end-of-lease-cleaning-melbourne-cbd', desc: 'Apartment vacate cleans' },
  ],
  blogLinks: [
    { title: 'How often should an office be cleaned?', href: '/blog/how-often-commercial-office-cleaning' },
    { title: 'How to choose a commercial cleaner for your gym or fitness studio', href: '/blog/choose-commercial-cleaner-gym-fitness-studio-melbourne' },
    { title: 'Retail shop cleaning in Melbourne: scope and cost', href: '/blog/retail-shop-cleaning-melbourne-scope-and-cost' },
  ],
  lastUpdated: '2026-10-28',
}
