import { getAllPosts } from '@/lib/blog'
import { suburbs } from '@/lib/suburbs'
import { SITE_URL } from '@/lib/site'
import { services } from '@/lib/data/services'

const BASE_URL = SITE_URL

// lastmod is only emitted where it is accurate. Update a page's `lastmod` when
// its content materially changes; leave it off otherwise (Google ignores
// inaccurate lastmod values).
const staticPages: { url: string; priority: string; changefreq: string; lastmod?: string }[] = [
  { url: '/end-of-lease-cleaning-melbourne-cbd', priority: '0.9', changefreq: 'weekly', lastmod: '2026-10-28' },
  { url: '/commercial-cleaning-melbourne-cbd', priority: '0.9', changefreq: 'weekly', lastmod: '2026-10-28' },
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/services/residential-cleaning', priority: '0.9', changefreq: 'weekly' },
  { url: '/services/commercial-cleaning', priority: '0.9', changefreq: 'weekly' },
  { url: '/services/end-of-lease-cleaning', priority: '0.9', changefreq: 'weekly' },
  { url: '/services/deep-cleaning', priority: '0.8', changefreq: 'weekly' },
  // Template-rendered service pages; the hand-written ones are listed above.
  ...services
    .filter((s) => !s.customPage)
    .map((s) => ({ url: `/services/${s.slug}`, priority: '0.8', changefreq: 'monthly' as const })),
  { url: '/gallery', priority: '0.7', changefreq: 'weekly' },
  { url: '/testimonials', priority: '0.7', changefreq: 'weekly' },
  { url: '/service-areas', priority: '0.8', changefreq: 'monthly' },
  ...Object.keys(suburbs).map((slug) => ({
    url: `/service-areas/${slug}`,
    priority: '0.7',
    changefreq: 'monthly' as const,
  })),
  { url: '/blog', priority: '0.8', changefreq: 'weekly' },
  { url: '/get-a-quote', priority: '0.9', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/faq', priority: '0.7', changefreq: 'monthly' },
]

export function GET() {
  const posts = getAllPosts()

  const urls = [
    ...staticPages.map(
      (page) => `
  <url>
    <loc>${BASE_URL}${page.url}</loc>
${page.lastmod ? `\n    <lastmod>${page.lastmod}</lastmod>` : ''}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    ),
    ...posts.map(
      (post) => `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.updatedDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
    ),
  ].join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
