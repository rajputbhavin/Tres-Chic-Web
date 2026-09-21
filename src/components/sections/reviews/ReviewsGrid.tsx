import { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronUp, ExternalLink, MapPin, Star } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import type { Review } from "@/data/reviews";
import { cn } from "@/lib/utils";

function GoogleIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

const CATEGORIES = [
  "All",
  "Weddings",
  "Multicultural & Fusion",
  "Destination",
  "Events & Galas",
  "Mitzvahs",
] as const;

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.quote.length > 320;

  // Reviewer avatar initials
  const firstNamePart = review.author.split("&")[0]?.trim() || review.author;
  const initials = firstNamePart
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="flex h-full flex-col rounded-sm border border-gold/30 bg-neutral-soft/70 p-7 transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-black/5">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-emerald/10 font-display text-sm font-semibold text-emerald">
            {initials}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-lg font-medium text-emerald">{review.author}</h3>
              <span title="Verified Review" className="inline-flex items-center">
                <CheckCircle2 className="size-3.5 text-gold" />
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              {review.role}
              {review.subAttribution ? ` · ${review.subAttribution}` : ""}
            </p>
          </div>
        </div>

        {/* Platform Badge */}
        <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-border/80 bg-background/90 px-2.5 py-1 text-[0.7rem] font-medium text-foreground/80 shadow-xs">
          <GoogleIcon className="size-3.5" />
          <span>Google</span>
        </div>
      </div>

      {/* Stars & Metadata */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3.5 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="size-4 fill-gold text-gold" />
          ))}
          <span className="ml-1.5 font-semibold text-foreground">5.0</span>
        </div>
        <div className="flex items-center gap-2">
          {review.badge && (
            <span className="rounded-xs bg-gold/10 px-1.5 py-0.5 text-[0.6875rem] font-medium text-taupe">
              {review.badge}
            </span>
          )}
          <span>{review.date}</span>
        </div>
      </div>

      {/* Pull Highlight */}
      <blockquote className="my-4 border-l-2 border-gold pl-3.5 font-display text-base leading-snug text-emerald sm:text-lg">
        "{review.highlight}"
      </blockquote>

      {/* Full Body with Expand */}
      <div className="relative text-sm leading-relaxed text-foreground/85">
        <p className={cn("whitespace-pre-line", !expanded && isLong && "line-clamp-5")}>
          {review.quote}
        </p>

        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold tracking-wider uppercase text-gold hover:text-emerald transition-colors"
          >
            {expanded ? (
              <>
                Show Less <ChevronUp className="size-3.5" />
              </>
            ) : (
              <>
                Read Full Review <ChevronDown className="size-3.5" />
              </>
            )}
          </button>
        )}
      </div>

      {/* Footer Details */}
      <div className="mt-auto pt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <MapPin className="size-3.5 text-gold" />
          <span>{review.location}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="rounded-full bg-sand/40 px-2.5 py-0.5 text-[0.6875rem] font-medium text-emerald">
            {review.category}
          </span>
          {review.googleMapsUrl && (
            <a
              href={review.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-gold transition-colors"
              title="View on Google Maps"
            >
              <ExternalLink className="size-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/** Luxury editorial grid with interactive filters and Google 5.0 Star summary */
export function ReviewsGrid({ items }: { items: Review[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filtered =
    selectedCategory === "All"
      ? items
      : items.filter((r) => r.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Google Reputation Summary Header */}
      <Reveal>
        <div className="flex flex-col items-center justify-between gap-6 rounded-xs border border-gold/40 bg-neutral-soft/90 p-6 sm:p-8 md:flex-row shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-background border border-gold/30 shadow-xs">
              <GoogleIcon className="size-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-3xl font-bold text-emerald">5.0</span>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-5 fill-gold text-gold" />
                  ))}
                </div>
              </div>
              <p className="mt-1 text-xs sm:text-sm font-medium tracking-wide uppercase text-taupe">
                100% 5-Star Rated · Verified Google Client Reviews
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted-foreground border-t md:border-t-0 md:border-l border-border/80 pt-4 md:pt-0 md:pl-8">
            <div>
              <p className="font-display text-xl font-bold text-emerald">{items.length}+</p>
              <p className="text-xs uppercase tracking-wider text-taupe">Verified Stories</p>
            </div>
            <div className="h-8 w-px bg-border/80 mx-2 hidden sm:block" />
            <div>
              <p className="font-display text-xl font-bold text-emerald">100%</p>
              <p className="text-xs uppercase tracking-wider text-taupe">Couple Satisfaction</p>
            </div>
            <div className="h-8 w-px bg-border/80 mx-2 hidden sm:block" />
            <div>
              <p className="font-display text-xl font-bold text-emerald">15+ Yrs</p>
              <p className="text-xs uppercase tracking-wider text-taupe">Event Mastery</p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Category Filter Tabs */}
      <Reveal delay={60}>
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border/60 pb-4">
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All" ? items.length : items.filter((r) => r.category === cat).length;
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200",
                  active
                    ? "bg-emerald text-ivory shadow-xs"
                    : "bg-neutral-soft text-muted-foreground hover:bg-gold/10 hover:text-emerald",
                )}
              >
                {cat} <span className="text-[0.75rem] opacity-70">({count})</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* 2-Column Responsive Luxury Review Cards */}
      <div className="grid gap-8 md:grid-cols-2">
        {filtered.map((review, i) => (
          <Reveal key={review.id} delay={(i % 2) * 100}>
            <ReviewCard review={review} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
