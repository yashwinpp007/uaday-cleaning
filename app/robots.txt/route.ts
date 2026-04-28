export function GET() {
  const body = `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bingbot
Allow: /

User-agent: CCBot
Disallow: /

Sitemap: https://uadaycleaning.com.au/sitemap.xml
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  })
}
