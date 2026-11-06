import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Sparkles, User } from "lucide-react";

import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { blogPosts } from "@/data/blogs";
import { media } from "@/data/media";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      {
        title: "Miami Wedding & Event Planning Blog | Editorial Guides · Très CHIC",
      },
      {
        name: "description",
        content:
          "Expert wedding guides, Miami luxury venue spotlights, multicultural traditions, and planning insights from Mariane Fahmy and Très CHIC Event Planning.",
      },
      {
        name: "keywords",
        content:
          "miami wedding planner blog, luxury wedding planning guide miami, vizcaya wedding tips, south florida event planning, multicultural wedding ideas, wedding planner cost miami",
      },
      {
        property: "og:title",
        content: "Miami Wedding & Event Planning Blog | Editorial Guides · Très CHIC",
      },
      {
        property: "og:description",
        content:
          "Expert wedding guides, Miami venue spotlights, and cultural traditions from 20+ years of high-stakes luxury planning.",
      },
      {
        property: "og:url",
        content: "https://treschiceventplanning.com/blogs",
      },
      {
        property: "og:image",
        content: blogPosts[0]?.image ?? media.tentedWaterfrontReception,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://treschiceventplanning.com/blogs",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Très CHIC Editorial Blog & Luxury Guides",
          description:
            "Expert guides on Miami luxury weddings, multicultural celebrations, destination planning, and venue walkthroughs.",
          url: "https://treschiceventplanning.com/blogs",
          blogPost: blogPosts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.date,
            url: `https://treschiceventplanning.com/blogs/${post.slug}`,
            author: {
              "@type": "Person",
              name: post.author.name,
            },
          })),
        }),
      },
    ],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Editorial & Insights"
        title="Journal & Editorial Guides"
        seoH1="Miami Wedding & Luxury Event Planning Blog"
        headline="Behind the Celebrations: Design, Logistics & Inspiration."
        body="Expert guidance, venue spotlights, and cultural wisdom from 20+ years of high-stakes wedding planning and bespoke event design in Miami and South Florida."
        image={media.ballroomBlushFlorals}
        imageAlt="Grand luxury ballroom with blush florals, candlelit tables, and ambient lighting"
        fullScreen
      />

      <Section tone="ivory" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          {/* Featured Post Hero Banner */}
          {featuredPost ? (
            <Reveal className="mb-20">
              <div className="grid overflow-hidden rounded-xs border border-border/70 bg-card shadow-lg md:grid-cols-2">
                <Link
                  to="/blogs/$slug"
                  params={{ slug: featuredPost.slug }}
                  className="relative aspect-[4/3] md:aspect-auto overflow-hidden block group"
                >
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.imageAlt}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-emerald/90 px-3 py-1 text-[0.6875rem] font-bold tracking-widest text-gold uppercase backdrop-blur-xs">
                    <Sparkles className="size-3" />
                    <span>Featured Guide</span>
                  </div>
                </Link>

                <div className="flex flex-col justify-between p-8 md:p-12">
                  <div>
                    <div className="flex items-center gap-3 text-xs tracking-widest text-muted-foreground uppercase">
                      <span className="font-semibold text-emerald">{featuredPost.category}</span>
                      <span>&bull;</span>
                      <span>{featuredPost.date}</span>
                      <span>&bull;</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="size-3" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="display-sm mt-4 text-balance text-emerald">
                      <Link
                        to="/blogs/$slug"
                        params={{ slug: featuredPost.slug }}
                        className="hover:text-gold transition-colors"
                      >
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="size-3.5 text-gold" />
                      <span>By {featuredPost.author.name}</span>
                    </div>

                    <Link
                      to="/blogs/$slug"
                      params={{ slug: featuredPost.slug }}
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald uppercase transition-colors hover:text-gold"
                    >
                      <span>Read Full Guide</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ) : null}

          {/* Grid of Remaining 4 Articles */}
          <Reveal>
            <div className="flex items-center justify-between border-b border-border/60 pb-6 mb-12">
              <div>
                <Eyebrow>Curated Insights</Eyebrow>
                <h3 className="display-sm mt-2 text-balance text-emerald">
                  Latest Editorial Guides & Planning Playbooks
                </h3>
              </div>
              <span className="text-xs tracking-widest text-muted-foreground uppercase">
                {blogPosts.length} Guides
              </span>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {remainingPosts.map((post, idx) => (
              <Reveal key={post.id} delay={idx * 100}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xs border border-border/70 bg-card shadow-xs transition-all duration-300 hover:border-gold/60 hover:shadow-md">
                  <Link
                    to="/blogs/$slug"
                    params={{ slug: post.slug }}
                    className="relative aspect-[16/10] overflow-hidden block"
                  >
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3 bg-ink/80 px-2.5 py-1 text-[0.625rem] font-bold tracking-widest text-white uppercase backdrop-blur-xs">
                      {post.category}
                    </div>
                  </Link>

                  <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                    <div>
                      <div className="flex items-center gap-2 text-[0.6875rem] tracking-wider text-muted-foreground uppercase">
                        <span>{post.date}</span>
                        <span>&bull;</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="size-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h4 className="mt-3 font-display text-2xl leading-snug text-emerald transition-colors group-hover:text-gold">
                        <Link to="/blogs/$slug" params={{ slug: post.slug }}>
                          {post.title}
                        </Link>
                      </h4>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-border/40 pt-4 text-xs">
                      <span className="text-[0.6875rem] text-muted-foreground">
                        By {post.author.name}
                      </span>
                      <Link
                        to="/blogs/$slug"
                        params={{ slug: post.slug }}
                        className="inline-flex items-center gap-1 font-semibold text-emerald transition-colors group-hover:text-gold"
                      >
                        <span>Read Guide</span>
                        <ArrowRight className="size-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Crawler-Only Exact-Match H2s for Maximum Google, AEO & GEO Search Dominance */}
      <div className="sr-only" aria-hidden="false">
        <h2>How to Choose a Luxury Wedding Planner in Miami</h2>
        <h2>Multicultural Wedding Planner in Miami</h2>
        <h2>Planning a Destination Wedding in Miami</h2>
        <h2>Full-Service vs Partial Wedding Planning Miami</h2>
        <h2>Luxury Private Celebrations and Milestone Events in Miami</h2>
        <h2>Miami Wedding Planning Guide</h2>
        <p>
          The official editorial journal of Très CHIC Event Planning & Design, South Florida's
          premier luxury wedding and event planner. Covering bespoke wedding design, venue logistics
          for Vizcaya Museum, Faena Miami Beach, and The Biltmore, budget planning, and authentic
          multicultural fusion celebration wisdom.
        </p>
      </div>

      <ClosingCta
        headline="Have a vision for your own celebration?"
        body="Let's discuss your date, your venue, and how we can bring your vision to life."
        tone="ivory"
      />
    </>
  );
}

