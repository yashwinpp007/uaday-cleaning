import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Tag } from 'lucide-react'
import { getAllPosts } from '@/lib/blog'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Cleaning Tips & Blog | UaDay Cleaning Deanside',
  description:
    'Expert cleaning tips, end of lease guides, and home care advice from Deanside\'s professional cleaners. Read the UaDay Cleaning blog.',
  alternates: { canonical: 'https://uadaycleaning.com.au/blog' },
}

const categories = ['All', 'Residential', 'End of Lease', 'Cleaning Tips', 'Commercial']

export default function BlogPage() {
  const posts = getAllPosts()
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-green-light to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-brand-green text-white font-semibold text-sm px-4 py-2 rounded-full mb-5">Blog & Tips</span>
          <h1 className="font-heading font-900 text-dark-text text-5xl md:text-6xl mb-5">
            Cleaning Tips & Guides
          </h1>
          <p className="text-body-text text-xl max-w-2xl mx-auto">
            Expert advice on end of lease cleaning, eco-friendly products, and keeping your home spotless year-round.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white border-b border-light-border sticky top-20 z-30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={cat === 'All' ? '/blog' : `/blog?category=${cat.toLowerCase().replace(' ', '-')}`}
                className="px-5 py-2 rounded-full font-semibold text-sm bg-brand-green-light text-brand-green hover:bg-brand-green hover:text-white transition-colors border border-brand-green/20"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="py-12 bg-off-white">
          <div className="max-w-6xl mx-auto px-4">
            <p className="font-heading font-700 text-brand-green text-sm mb-5 uppercase tracking-wider">Featured Post</p>
            <Link href={`/blog/${featured.slug}`} className="group">
              <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-5xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-brand-green text-white text-xs font-bold px-3 py-1.5 rounded-full">{featured.category}</span>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-body-text text-sm mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{featured.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{featured.readingTime}</span>
                  </div>
                  <h2 className="font-heading font-900 text-dark-text text-3xl mb-4 group-hover:text-brand-green transition-colors">{featured.title}</h2>
                  <p className="text-body-text leading-relaxed mb-6">{featured.description}</p>
                  <span className="text-brand-green font-semibold">Read Article →</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12 bg-off-white">
        <div className="max-w-6xl mx-auto px-4">
          {rest.length > 0 && (
            <>
              <h2 className="font-heading font-900 text-dark-text text-2xl mb-8">More Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rest.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                    <div className="bg-white rounded-5xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-body-text text-xs mb-3">
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readingTime}</span>
                        </div>
                        <h3 className="font-heading font-800 text-dark-text text-lg mb-2 group-hover:text-brand-green transition-colors flex-1">{post.title}</h3>
                        <p className="text-body-text text-sm leading-relaxed mb-4 line-clamp-2">{post.description}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="flex items-center gap-1 bg-brand-green-light text-brand-green text-xs px-2.5 py-1 rounded-full">
                              <Tag className="w-3 h-3" />{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-body-text text-lg">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
