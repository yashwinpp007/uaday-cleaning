// Real Google reviews, copied from the live Google Business Profile
// (17 reviews, 5.0 average, checked 27 Sept 2026). Quotes are verbatim apart
// from spacing/capitalisation fixes. Google reviews don't include a suburb, so
// don't add one. `service` is only set where the reviewer actually names it.
export interface Review {
  name: string
  stars: number
  quote: string
  service?: string
}

export const reviews: Review[] = [
  { name: 'Isabella Stefanoski', stars: 5, quote: 'Extremely impressed with Raj’s work. Our townhouse was borderline beyond repair, but somehow he transformed it and made it look amazing. His attention to detail, professionalism, and dedication to achieving a great result really exceeded our expectations. We couldn’t be happier with the outcome and would highly recommend him to anyone looking for quality workmanship.' },
  { name: 'Joe Sequeira', stars: 5, quote: 'Raj is experienced & knowledgeable Cleaner takes into consideration every detail & did the job to the 100% satisfaction & charges are reasonable I strongly recommend him any cleaning job.' },
  { name: 'Manpreet Kalra', stars: 5, service: 'End of Lease', quote: 'Uthay is excellent cleaner and very professional with his job. He recently did my end of lease cleaning, and it was really top notch and at reasonable price.' },
  { name: 'Jon Babawi', stars: 5, service: 'End of Lease', quote: 'Friendly, responsive, professional service! Thanks Uaday cleaning for the awesome job done with the cleaning and especially with the end of lease cleaning. Highly recommend.' },
  { name: 'Sivananthakumar Jotheeswaran', stars: 5, service: 'House Cleaning', quote: 'We hired this people for our house cleaning. They did really a good job. I would recommend for their service and the owner Uthay is very easy to communicate and reliable guy.' },
  { name: 'Erin Ryan', stars: 5, quote: 'Very professional and fast service. Communicated well throughout the clean. Really happy!' },
  { name: 'Farjana Rahaman', stars: 5, quote: 'I got his service after my regular cleaner fall sick. He did a very good job. Very polite and well mannered as well.' },
  { name: 'Gen Caceres', stars: 5, service: 'End of Lease', quote: 'Raj did an excellent job cleaning our house for an end of lease clean. He paid attention to the small details!' },
  { name: 'Johannes Power', stars: 5, quote: 'Excellent clean - house looks brand new! Would recommend!' },
  { name: 'Jenna Pantorno', stars: 5, quote: 'Really great job. Quick and thorough. Will use regularly. Thank you so much' },
]
