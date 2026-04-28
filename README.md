# UaDay Cleaning — Website

Professional cleaning company website for **UaDay Cleaning**, West Melbourne, VIC.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and MDX.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| MDX / gray-matter | Blog system |
| Lucide React | Icons |
| React Markdown | Blog rendering |

---

## Local Development

### Prerequisites
- Node.js 18+
- npm 9+

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-org/uaday-cleaning.git
cd uaday-cleaning

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env.local
# Edit .env.local with your values

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps API key | Optional |
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 ID (e.g. `G-XXXXXXXXXX`) | Recommended |
| `NEXT_PUBLIC_SITE_URL` | Full site URL for canonical links | Yes |

---

## Site Structure

```
app/
├── page.tsx                          # Home page
├── about/page.tsx                    # About Us
├── services/
│   ├── page.tsx                      # Services hub
│   ├── residential-cleaning/         # Residential cleaning
│   ├── commercial-cleaning/          # Commercial cleaning
│   ├── end-of-lease-cleaning/        # End of lease
│   └── deep-cleaning/               # Deep / spring clean
├── gallery/page.tsx                  # Gallery
├── testimonials/page.tsx             # Testimonials
├── service-areas/
│   ├── page.tsx                      # Service areas hub
│   └── [suburb]/page.tsx            # Dynamic suburb pages
├── blog/
│   ├── page.tsx                      # Blog listing
│   └── [slug]/page.tsx              # Blog post template
├── get-a-quote/page.tsx              # Multi-step quote form
├── contact/page.tsx                  # Contact page
├── faq/page.tsx                      # FAQ page
├── privacy-policy/page.tsx           # Privacy policy
├── terms/page.tsx                    # Terms & conditions
├── thank-you/page.tsx                # Post-form thank you
└── not-found.tsx                     # 404 page
```

---

## How to Add a Blog Post

Blog posts are written in MDX format and stored in `/content/blog/`.

### Step 1 — Create a new file

```
content/blog/your-post-slug-here.mdx
```

The filename becomes the URL: `/blog/your-post-slug-here`

### Step 2 — Add frontmatter

```mdx
---
title: "Your Post Title Here"
date: "2025-03-15"
category: "Cleaning Tips"
description: "A short description shown in previews and SEO meta."
image: "https://images.unsplash.com/photo-XXXXXXXXX?w=800&h=400&fit=crop"
author: "Sarah Johnson"
tags: ["cleaning tips", "eco-friendly", "melbourne"]
---
```

**Category options:** `Residential` · `End of Lease` · `Cleaning Tips` · `Commercial`

### Step 3 — Write the content

Write your post in Markdown below the frontmatter block. Headings, bold, italic, lists, blockquotes, tables, and links all work.

### Step 4 — Save and deploy

Commit and push to GitHub — Vercel auto-deploys in ~60 seconds.

---

## Deploying to Vercel

### First deployment

```bash
npm i -g vercel
vercel
```

### Auto-deploy

Push to `main` → Vercel automatically builds and deploys.

### Environment Variables on Vercel

In Vercel dashboard → Project → Settings → Environment Variables, add all variables from `.env.example`.

---

## Design System

### Brand Colours

| Name | Hex |
|---|---|
| Primary Green | `#5da832` |
| Dark Green | `#3a7a10` |
| Light Green BG | `#f0f7e6` |
| Accent Yellow | `#ffd700` |

### Typography
- **Headings:** Raleway (800/900 weight)
- **Body:** Plus Jakarta Sans (400/500 weight)

---

## Replacing Placeholder Images

Search for placeholder image URLs:

```bash
grep -r "unsplash.com" app/ components/ --include="*.tsx" -l
```

Replace with real photos. Recommended sizes:
- Hero images: 1200×800px
- Service pages: 600×500px
- Blog posts: 1200×630px

---

## Google Analytics 4

Add your `NEXT_PUBLIC_GA4_ID` to `.env.local`. Conversion events fire on:
- `/thank-you` page load (form submission)
- Quote form submit

To wire up GA4 tracking, add the Google Analytics script tag to `app/layout.tsx`.

---

**ABN:** 12 345 678 901 · **Phone:** 0412 345 678 · **Email:** hello@uadaycleaning.com.au
