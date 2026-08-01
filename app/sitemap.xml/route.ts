import { getAllPosts } from '@/lib/blog'
import { suburbs } from '@/lib/suburbs'
import { SITE_URL } from '@/lib/site'

const BASE_URL = SITE_URL

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/services/residential-cleaning', priority: '0.9', changefreq: 'weekly' },
  { url: '/services/commercial-cleaning', priority: '0.9', changefreq: 'weekly' },
  { url: '/services/end-of-lease-cleaning', priority: '0.9', changefreq: 'weekly' },
  { url: '/services/deep-cleaning', priority: '0.8', changefreq: 'weekly' },
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
  const today = new Date().toISOString().split('T')[0]

  const urls = [
    ...staticPages.map(
      (page) => `
  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    ),
    ...posts.map(
      (post) => `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
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
