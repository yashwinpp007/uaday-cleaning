import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog'
import Button3D from '@/components/ui/Button3D'
import FinalCTA from '@/components/sections/FinalCTA'
import BlogContent from '@/components/blog/BlogContent'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://uadaycleaning.com.au/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.image }],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const related = getRelatedPosts(params.slug, post.category)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'UaDay Cleaning',
      url: 'https://uadaycleaning.com.au',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://uadaycleaning.com.au' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://uadaycleaning.com.au/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://uadaycleaning.com.au/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="pt-28 pb-0">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-body-text mb-6">
            <Link href="/" className="hover:text-brand-green">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-brand-green">Blog</Link>
            <span>/</span>
            <span className="text-dark-text font-medium truncate">{post.title}</span>
          </nav>

          <span className="inline-block bg-brand-green text-white text-xs font-bold px-3 py-1.5 rounded-full mb-5">{post.category}</span>
          <h1 className="font-heading font-900 text-dark-text text-4xl md:text-5xl mb-6 leading-tight">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-5 text-body-text text-sm mb-8">
            <span className="flex items-center gap-2"><User className="w-4 h-4 text-brand-green" />{post.author}</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-brand-green" />{post.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-green" />{post.readingTime}</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <div className="relative h-72 md:h-96 rounded-4xl overflow-hidden">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        </div>
      </div>

      {/* Article Layout */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12">
          {/* Main Content */}
          <article>
            {/* Mid-article CTA */}
            <BlogContent content={post.content} />

            <div className="my-10 bg-brand-green-light rounded-4xl p-7 border border-brand-green/20">
              <p className="font-heading font-800 text-dark-text text-xl mb-2">Need a Professional Cleaner?</p>
              <p className="text-body-text mb-5">Get a free, no-obligation quote from West Melbourne&apos;s trusted cleaning team.</p>
              <Button3D href="/get-a-quote" size="sm">Get a Free Quote →</Button3D>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-light-border">
              {post.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 bg-brand-green-light text-brand-green text-xs px-3 py-1.5 rounded-full">
                  <Tag className="w-3 h-3" />{tag}
                </span>
              ))}
            </div>

            {/* Author box */}
            <div className="mt-8 bg-off-white rounded-4xl p-6 flex items-start gap-4">
              <div className="w-14 h-14 bg-brand-green rounded-2xl flex items-center justify-center text-white font-heading font-800 text-xl flex-shrink-0">
                {post.author[0]}
              </div>
              <div>
                <p className="font-heading font-800 text-dark-text text-lg">{post.author}</p>
                <p className="text-body-text text-sm">UaDay Cleaning Team | West Melbourne&apos;s trusted cleaning professionals since 2014.</p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* CTA Card */}
            <div className="bg-brand-green rounded-4xl p-6 text-white">
              <p className="font-heading font-800 text-xl mb-2">Book a Clean</p>
              <p className="text-white/80 text-sm mb-4">Get a free quote from West Melbourne&apos;s top-rated cleaners.</p>
              <Button3D href="/get-a-quote" variant="yellow" size="sm">Get a Quote</Button3D>
            </div>

            {/* Related Posts */}
            {related.length > 0 && (
              <div className="bg-off-white rounded-4xl p-6">
                <h3 className="font-heading font-800 text-dark-text text-lg mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {related.map((rp) => (
                    <Link key={rp.slug} href={`/blog/${rp.slug}`} className="flex gap-3 group">
                      <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                        <Image src={rp.image} alt={rp.title} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold text-dark-text text-xs group-hover:text-brand-green transition-colors leading-tight">{rp.title}</p>
                        <p className="text-body-text text-xs mt-1">{rp.readingTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to blog */}
            <Link href="/blog" className="flex items-center gap-2 text-brand-green font-semibold text-sm hover:text-brand-green-dark">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </aside>
        </div>
      </div>

      {/* Related posts (mobile) */}
      {related.length > 0 && (
        <section className="py-12 bg-off-white lg:hidden">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="font-heading font-900 text-dark-text text-2xl mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group">
                  <div className="bg-white rounded-4xl overflow-hidden shadow-card">
                    <div className="relative h-40">
                      <Image src={rp.image} alt={rp.title} fill className="object-cover" />
                    </div>
                    <div className="p-5">
                      <p className="font-heading font-700 text-dark-text group-hover:text-brand-green transition-colors">{rp.title}</p>
                      <p className="text-body-text text-xs mt-1">{rp.readingTime}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </>
  )
}
