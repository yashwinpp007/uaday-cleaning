import { SITE_URL } from '@/lib/site'

// AI search and answer-engine crawlers are explicitly allowed so the site can
// be cited. CCBot (Common Crawl) stays blocked, as before.
const ALLOWED_BOTS = [
  'Googlebot',
  'Bingbot',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot',
  'Applebot-Extended',
]

export function GET() {
  const body = `User-agent: *
Allow: /
Disallow: /thank-you

${ALLOWED_BOTS.map((bot) => `User-agent: ${bot}\nAllow: /\nDisallow: /thank-you\n`).join('\n')}
User-agent: CCBot
Disallow: /

Sitemap: ${SITE_URL}/sitemap.xml
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  })
}
