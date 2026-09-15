// Very lightweight per-IP rate limit to stop the chat API from being hammered
// (each message costs a real Claude API call). This is in-memory, so it only
// limits within a single serverless instance — good enough to blunt casual
// abuse and runaway costs, but not a substitute for a real edge/WAF rate
// limiter if this widget gets heavy traffic. For that, put this behind
// Vercel's Attack Challenge Mode / Firewall, or swap this for Upstash Redis.

const WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const MAX_REQUESTS = 25 // per IP per window

const hits = new Map<string, number[]>()

// Periodically forget old IPs so the map doesn't grow forever on a
// long-lived instance.
let lastSweep = Date.now()
function sweep() {
  const now = Date.now()
  if (now - lastSweep < WINDOW_MS) return
  lastSweep = now
  hits.forEach((timestamps, ip) => {
    const recent = timestamps.filter((t) => now - t < WINDOW_MS)
    if (recent.length === 0) hits.delete(ip)
    else hits.set(ip, recent)
  })
}

export function isRateLimited(ip: string): boolean {
  sweep()
  const now = Date.now()
  const timestamps = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS)
  timestamps.push(now)
  hits.set(ip, timestamps)
  return timestamps.length > MAX_REQUESTS
}
