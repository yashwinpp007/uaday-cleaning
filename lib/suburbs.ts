export interface SuburbData {
  name: string
  postcode: string
  blurb: string
  testimonial: { name: string; quote: string }
}

export const suburbs: Record<string, SuburbData> = {
  'truganina': {
    name: 'Truganina',
    postcode: '3029',
    blurb: 'Truganina is one of Melbourne\'s fastest-growing suburbs, with many new homes and young families. UDAY Cleaning provides professional residential, commercial, and end of lease cleaning services throughout Truganina. Whether you\'re moving in, moving out, or just need a regular clean, we\'re here to help.',
    testimonial: { name: 'Anna K.', quote: 'The deep clean they did before Christmas was outstanding. Even the oven looked brand new. Absolutely brilliant service in Truganina!' },
  },
  'hoppers-crossing': {
    name: 'Hoppers Crossing',
    postcode: '3029',
    blurb: 'Hoppers Crossing is a well-established suburb in Melbourne\'s west. Our professional cleaning team services homes and businesses throughout Hoppers Crossing with the same care and attention to detail we bring to every job.',
    testimonial: { name: 'Michael T.', quote: 'Regular fortnightly clean and they never miss a spot. Reliable and always on time. Best cleaners in Hoppers Crossing!' },
  },
  'werribee': {
    name: 'Werribee',
    postcode: '3030',
    blurb: 'Werribee is a major hub in Melbourne\'s outer west with a mix of residential and commercial properties. We\'ve been serving the Werribee community for over a decade, providing trusted cleaning services for families and businesses alike.',
    testimonial: { name: 'Emily R.', quote: 'I love that they use eco-friendly products. Safe for my kids and pets. The best cleaning service in Werribee by far!' },
  },
  'tarneit': {
    name: 'Tarneit',
    postcode: '3029',
    blurb: 'Tarneit is a booming suburb in Melbourne\'s west with many new residential estates. Our professional cleaners are fully equipped to handle everything from new-build post-construction cleans to regular home maintenance in Tarneit.',
    testimonial: { name: 'Sarah M.', quote: 'Amazing service! Got our full bond back with no issues. The team was punctual and thorough. Highly recommend in Tarneit!' },
  },
  'point-cook': {
    name: 'Point Cook',
    postcode: '3030',
    blurb: 'Point Cook is a popular family suburb on Melbourne\'s Werribee coast. UDAY Cleaning serves the Point Cook community with professional residential cleaning, end of lease cleaning, and commercial services.',
    testimonial: { name: 'James L.', quote: 'Used UDAY for our end of lease clean and got our full bond back first try. Incredible attention to detail in Point Cook!' },
  },
  'laverton': {
    name: 'Laverton',
    postcode: '3028',
    blurb: 'Laverton is a convenient suburb close to the city and the Western Ring Road. Our team regularly services homes and offices in Laverton with professional, reliable cleaning you can count on.',
    testimonial: { name: 'David W.', quote: 'Professional and thorough. Our office has never looked better. Great service in Laverton!' },
  },
  'altona-meadows': {
    name: 'Altona Meadows',
    postcode: '3028',
    blurb: 'Altona Meadows is a suburban area in Melbourne\'s west with a strong community feel. We provide residential and commercial cleaning services throughout Altona Meadows with our signature eco-friendly approach.',
    testimonial: { name: 'Lisa P.', quote: 'Same-day booking was a lifesaver. They arrived within 2 hours and left the place spotless. Amazing service in Altona Meadows!' },
  },
  'williams-landing': {
    name: 'Williams Landing',
    postcode: '3027',
    blurb: 'Williams Landing is a modern suburb centred around the Williams Landing town centre. Our professional cleaning team serves the Williams Landing community with residential, commercial, and end of lease cleaning.',
    testimonial: { name: 'Tom B.', quote: 'Got my bond back both times using UDAY. The checklist they follow is incredibly thorough. Couldn\'t recommend more for Williams Landing!' },
  },
}
