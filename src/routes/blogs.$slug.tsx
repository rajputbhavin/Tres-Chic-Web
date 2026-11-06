import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  Sparkles,
} from "lucide-react";
import { useMemo } from "react";

import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { blogPosts, type BlogPost } from "@/data/blogs";
import { media } from "@/data/media";
import { site } from "@/data/site";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.post) return {};
    const { post } = loaderData;
    return {
      meta: [
        {
          title: `${post.title} | Très CHIC Event Planning & Design`,
        },
        {
          name: "description",
          content: post.excerpt,
        },
        {
          property: "og:title",
          content: `${post.title} | Très CHIC`,
        },
        {
          property: "og:description",
          content: post.excerpt,
        },
        {
          property: "og:url",
          content: `https://treschiceventplanning.com/blogs/${post.slug}`,
        },
        {
          property: "og:image",
          content: post.image,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: `${post.title} | Très CHIC`,
        },
        {
          name: "twitter:description",
          content: post.excerpt,
        },
        {
          name: "twitter:image",
          content: post.image,
        },
      ],
      links: [
        {
          rel: "canonical",
          href: `https://treschiceventplanning.com/blogs/${post.slug}`,
        },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.date,
            url: `https://treschiceventplanning.com/blogs/${post.slug}`,
            author: {
              "@type": "Person",
              name: post.author.name,
              jobTitle: post.author.role,
              sameAs: site.instagram,
            },
            publisher: {
              "@type": "Organization",
              name: site.name,
              logo: "https://treschiceventplanning.com/favicon.png",
            },
          }),
        },
      ],
    };
  },
  component: BlogPostDetailPage,
});

function BlogPostDetailPage() {
  const { post } = Route.useLoaderData();

  const relatedPosts = useMemo(() => {
    return blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  }, [post.slug]);

  // Clean Markdown Renderer for the article body
  const renderedContent = useMemo(() => {
    const rawLines = post.content.split("\n");
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];
    let tableLines: string[] = [];

    const flushList = (key: string) => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={key} className="my-6 space-y-3 pl-2">
            {listItems.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-base md:text-lg text-muted-foreground/90 leading-relaxed"
              >
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                <span>{renderInlineText(item)}</span>
              </li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    const flushTable = (key: string) => {
      if (tableLines.length >= 2) {
        const parseRow = (line: string) =>
          line
            .split("|")
            .slice(1, -1)
            .map((cell) => cell.trim());

        const headerCells = parseRow(tableLines[0]);
        const bodyRows = tableLines.slice(2).map(parseRow);

        elements.push(
          <div key={key} className="my-8 overflow-x-auto rounded-xs border border-border/80 shadow-xs">
            <table className="w-full text-left border-collapse text-sm md:text-base">
              <thead className="bg-emerald text-white font-display uppercase tracking-wider text-xs">
                <tr>
                  {headerCells.map((h, i) => (
                    <th key={i} className="p-3.5 border-b border-gold/40">
                      {renderInlineText(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 bg-card">
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-card" : "bg-muted/15"}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="p-3.5 text-foreground/90 align-top">
                        {renderInlineText(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableLines = [];
      }
    };

    rawLines.forEach((line, index) => {
      const trimmed = line.trim();

      // Table line detection
      if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
        flushList(`list-before-table-${index}`);
        tableLines.push(trimmed);
        return;
      }

      flushTable(`table-${index}`);

      if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        listItems.push(trimmed.slice(2).trim());
        return;
      }

      flushList(`list-${index}`);

      if (!trimmed) {
        return;
      }

      if (trimmed.startsWith("### ")) {
        elements.push(
          <h3
            key={`h3-${index}`}
            className="font-display text-xl md:text-2xl text-emerald mt-10 mb-3"
          >
            {renderInlineText(trimmed.replace(/^###\s+/, ""))}
          </h3>
        );
      } else if (trimmed.startsWith("## ")) {
        elements.push(
          <h2
            key={`h2-${index}`}
            className="font-display text-2xl md:text-3xl text-emerald mt-14 mb-4 border-b border-border/50 pb-3"
          >
            {renderInlineText(trimmed.replace(/^##\s+/, ""))}
          </h2>
        );
      } else if (trimmed.startsWith("# ")) {
        elements.push(
          <h2
            key={`h1-${index}`}
            className="font-display text-2xl md:text-3xl text-emerald mt-12 mb-4"
          >
            {renderInlineText(trimmed.replace(/^#\s+/, ""))}
          </h2>
        );
      } else {
        elements.push(
          <p
            key={`p-${index}`}
            className="text-base md:text-lg leading-relaxed text-muted-foreground/90 my-5"
          >
            {renderInlineText(trimmed)}
          </p>
        );
      }
    });

    flushList("final-list");
    flushTable("final-table");
    return elements;
  }, [post.content]);

  return (
    <>
      <article className="pt-32 md:pt-40 pb-20 bg-background text-foreground">
        {/* Top Breadcrumb & Return Link */}
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase transition-colors hover:text-gold mb-8"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to All Editorial Guides</span>
          </Link>

          <Reveal>
            <div className="flex flex-wrap items-center gap-3 text-xs tracking-widest text-muted-foreground uppercase mb-4">
              <span className="font-semibold text-gold bg-emerald px-3 py-1 text-[0.6875rem] font-bold">
                {post.category}
              </span>
              <span>&bull;</span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                {post.date}
              </span>
              <span>&bull;</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="display-lg text-balance text-emerald mt-4 mb-6">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-light mb-10 border-l-2 border-gold pl-5 py-1 italic">
              {post.excerpt}
            </p>

            {/* Author Meta Strip */}
            <div className="flex items-center justify-between border-y border-border/70 py-4 mb-10">
              <div className="flex items-center gap-3">
                <img
                  src={media.marianePortrait}
                  alt={post.author.name}
                  className="size-11 rounded-full object-cover border border-gold/40 shadow-xs"
                />
                <div>
                  <p className="text-sm font-semibold text-emerald">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">
                    20+ Years Executive Operations & Luxury Event Design
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
                <Sparkles className="size-3.5 text-gold" />
                <span>Verified Miami Planning Authority</span>
              </div>
            </div>
          </Reveal>

          {/* Featured Image */}
          <Reveal delay={100} className="mb-14">
            <div className="overflow-hidden rounded-xs border border-border/80 shadow-xl">
              <img
                src={post.image}
                alt={post.imageAlt}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground italic text-center">
              {post.imageAlt} &bull; Photo courtesy of Très CHIC Event Planning & Design
            </p>
          </Reveal>

          {/* Article Body Content */}
          <Reveal delay={150}>
            <div className="prose prose-lg max-w-none text-foreground border-b border-border/70 pb-16">
              {renderedContent}
            </div>
          </Reveal>

          {/* Author Bio Box */}
          <Reveal className="mt-14 p-8 rounded-xs border border-gold/30 bg-card shadow-md">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <img
                src={media.marianePortrait}
                alt="Mariane Fahmy"
                className="size-20 rounded-full object-cover border-2 border-gold shadow-md shrink-0"
              />
              <div className="text-center sm:text-left">
                <p className="eyebrow text-gold text-[0.6875rem] uppercase tracking-widest">
                  About the Author
                </p>
                <h3 className="font-display text-2xl text-emerald mt-1">Mariane Fahmy</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Mariane Fahmy is the Founder and Lead Luxury Designer of Très CHIC Event Planning &
                  Design. Backed by 20 years of corporate operations and high-stakes logistics, she
                  orchestrates elevated multicultural weddings, historic estate celebrations, and
                  bespoke destination weddings across Miami, Fort Lauderdale, and worldwide.
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4">
                  <Link
                    to="/start-planning"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald hover:text-gold uppercase tracking-wider transition-colors"
                  >
                    <span>Connect With Mariane</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <span className="text-muted-foreground/40">&bull;</span>
                  <Link
                    to="/about"
                    className="text-xs text-muted-foreground hover:text-gold uppercase tracking-wider transition-colors"
                  >
                    Read Mariane's Story
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      {/* Related Guides Section */}
      <Section tone="soft" className="py-16 md:py-20 border-t border-border/70">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-10">
            <div>
              <Eyebrow>Continue Reading</Eyebrow>
              <h3 className="display-sm mt-2 text-balance text-emerald">
                More Editorial Guides
              </h3>
            </div>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-1 text-xs font-semibold tracking-wider text-emerald hover:text-gold uppercase transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {relatedPosts.map((related) => (
              <article
                key={related.id}
                className="group flex flex-col overflow-hidden rounded-xs border border-border/70 bg-card shadow-xs transition-all duration-300 hover:border-gold/60 hover:shadow-md"
              >
                <Link
                  to="/blogs/$slug"
                  params={{ slug: related.slug }}
                  className="relative aspect-[16/9] overflow-hidden block"
                >
                  <img
                    src={related.image}
                    alt={related.imageAlt}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 bg-ink/80 px-2.5 py-1 text-[0.625rem] font-bold tracking-widest text-white uppercase backdrop-blur-xs">
                    {related.category}
                  </div>
                </Link>
                <div className="p-6 md:p-8 flex flex-1 flex-col justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {related.date} &bull; {related.readTime}
                    </span>
                    <h4 className="mt-2 font-display text-xl leading-snug text-emerald group-hover:text-gold transition-colors">
                      <Link to="/blogs/$slug" params={{ slug: related.slug }}>
                        {related.title}
                      </Link>
                    </h4>
                  </div>
                  <Link
                    to="/blogs/$slug"
                    params={{ slug: related.slug }}
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald hover:text-gold uppercase tracking-wider transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <ClosingCta
        headline="Ready to bring your celebration to life?"
        body="Let's begin with a personal conversation about your date, venue, and vision."
        tone="ivory"
      />
    </>
  );
}

// Utility to render highlighted links, bold, and italic markdown within a line
function renderInlineText(text: string): React.ReactNode {
  // Pattern matches: [anchorText](url), **bold**, *italic*
  const tokenRegex = /(\[.+?\]\(.+?\)|\*\*.*?\*\*|\*.*?\*)/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, i) => {
    if (!part) return null;

    // Check if it's a markdown link [anchorText](url)
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      const rawText = linkMatch[1];
      const rawUrl = linkMatch[2].replace(/\\/g, "").trim();
      const cleanText = rawText.replace(/\*\*/g, "").replace(/\*/g, "");

      // Normalize internal URLs (convert https://treschiceventplanning.com/... to relative /...)
      let targetPath = rawUrl;
      if (targetPath.startsWith("https://treschiceventplanning.com")) {
        targetPath = targetPath.replace("https://treschiceventplanning.com", "");
        if (!targetPath) targetPath = "/";
      }

      const isInternal = targetPath.startsWith("/");

      // Beautiful luxury gold/emerald highlighted badge for internal & external anchor texts
      const highlightedAnchorClass =
        "inline-flex items-center gap-1 font-semibold text-emerald bg-gold/15 px-2 py-0.5 rounded-xs border-b-2 border-gold hover:bg-gold/30 hover:text-ink transition-all duration-200 mx-0.5 group/link shadow-2xs";

      if (isInternal) {
        return (
          <Link key={i} to={targetPath} className={highlightedAnchorClass}>
            <span>{cleanText}</span>
            <ArrowUpRight className="size-3 text-gold shrink-0 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </Link>
        );
      }

      return (
        <a
          key={i}
          href={targetPath}
          target="_blank"
          rel="noopener noreferrer"
          className={highlightedAnchorClass}
        >
          <span>{cleanText}</span>
          <ArrowUpRight className="size-3 text-gold shrink-0 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
        </a>
      );
    }

    // Bold **text**
    if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Italic *text*
    if (part.startsWith("*") && part.endsWith("*") && part.length >= 2) {
      return (
        <em key={i} className="italic text-foreground/90">
          {part.slice(1, -1)}
        </em>
      );
    }

    return part;
  });
}
