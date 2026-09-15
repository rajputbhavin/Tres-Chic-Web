# Très CHIC — Website Rebuild (Blueprint V1 + V2 Execution Plan)

## What I've confirmed before planning

**The three documents are read and are the source of truth.** V2 overrides V1 where they conflict; V1 governs where V2 is silent. Locked decisions I will implement verbatim:

- **Hero = Pure Desire** (V2 Part 4). Couple alone in the finished reception room, medium-wide, warm practical light, no Mariane in frame. Copy locked: eyebrow `SOUTH FLORIDA & DESTINATION WEDDINGS`, H1 `You planned this for a year. You should get to be in it.`, support line ending `…how much fun you're having.`, CTA `Start Planning →`.
- **Homepage sequence, final and locked** (V2 Part 8): Hero → Acknowledgment → Two Sides → **Crisis Story** → Named Cultural Expertise → Portfolio Preview → Process → Reviews → Press Strip → Destination Callout → Final CTA. Crisis Story before culture is the single most important structural fix; it will not be reordered.
- **Design system** (V2 Part 6): Deep Emerald `#0B3D2E` 8–12%, Ivory `#FAF7F0` 50–60%, Warm Taupe `#B8A88F`, Champagne Gold `#C9A96A` <5%, Soft Neutral `#EDE7DC`, Near-Black `#1A1A1A`. Cormorant Garamond headings / Montserrat body at the exact sizes, weights, line-heights and letter-spacing in the type table. 2px image radius. 120/80px desktop and 64/48px mobile section rhythm. 1280px container, 680px text, 520px hero copy.
- **Nav** (V2 Part 7): logo left, `Weddings · Multicultural & Fusion · Destination · Portfolio · Meet Mariane` + `Start Planning` right. 88px transparent → 72px solid ivory at 80% of hero height. Center-out 1px emerald underline on hover. Mobile: full-screen ivory overlay, 98%→100% fade-scale, deeper link list, pinned full-width CTA, sticky mobile inquiry bar.
- **Animation** (V2 Part 17): MUST-HAVE list only — section fade+lift, hero push-in, one word-by-word crisis headline reveal, portfolio hover, SVG timeline draw, button/nav hover, header cross-fade, review carousel. The DO-NOT-USE list (parallax, custom cursor, confetti, scroll-jacking, bounce easing) is enforced; `prefers-reduced-motion` respected.
- **Contact form** (V2 Part 16): all 11 approved fields in order, exact helper text, `Send My Details`, exact success and error copy. No budget field.
- **Portfolio story structure** (V2 Part 12): 10 fields, with The Complexity / What Mariane Noticed / What Mariane Solved required — a story missing those does not publish.
- **Pages at launch** (V1 Part 9 + V2 Part 14): Home, /weddings, /multicultural-weddings, /destination-weddings, /celebrations, /celebrations-we-love (+ story pages), /mariane, /the-experience, /faq, /reviews, /start-planning, 404. No Zaffa page, no Journal articles beyond the route if content is absent, no phase-2 pages.

**Their current site is fully scrapable.** 15 pages (`/`, about, services + 4 service pages, wedding-services, event-services, gallery, media, testimonials, blog, contact-us, zaffa-entertainment) all return content, and all photography sits on one CDN.

**One finding that changes what is deliverable:** the current site contains only **~50 unique real photographs and no video**. That is a small library relative to the blueprint's 20-slot asset map. So: every real image gets used where it genuinely fits best, and every remaining slot gets a labelled placeholder in the blueprint's format (e.g. `[HERO — REAL WEDDING COUPLE / PURE DESIRE / 16:9]`) rather than stock or AI imagery. The hero ships as a best-fit real still with the video treatment wired but disabled until footage exists. No invented awards, press, reviews, stories, or pricing — gaps become `[CONTENT REQUIRED]` / `[CLIENT CONFIRMATION REQUIRED]`.

## Phase 0 — Extract and store everything (Lovable Cloud)

Enable Cloud, then scrape all 15 pages and archive:

- **`media_assets`** — every image: original CDN URL, stored copy in Cloud storage, dimensions, source page, section it appeared in, subject tags (couple / detail / tablescape / ceremony / cultural / venue / portrait / Mariane), orientation, best-fit usage note, alt text.
- **`source_pages`** — full extracted text of every current page, so nothing is lost for future use.
- **`reviews`** — every testimonial found on /testimonials, verbatim source + the paraphrased publishable excerpt, with author, wedding type and context.
- **`press_mentions`**, **`services`**, **`faqs`**, **`portfolio_stories`** (with the Part 12 fields, unfilled marked `[CONTENT REQUIRED]`).
- **`inquiries`** — submissions from the Start Planning form, exactly the 11 approved fields.

RLS on every table: public read for published content, no public read on `inquiries`, insert-only for the form.

## Phase 1 — Foundation

Design tokens in `src/styles.css` (emerald/ivory/taupe/gold/neutral/near-black in oklch, plus the type scale, spacing scale, 2px radius). Cormorant Garamond + Montserrat loaded via `<link>` in the root route. Button system (primary emerald / outline secondary / text-link / on-dark variant) with the specified hover timings. Header, mobile overlay, sticky mobile CTA, footer (restrained, approved architecture — not a sitemap), 404 with the approved line `Even the best-laid plans need a small adjustment sometimes. Let's get you back on track.`

## Phase 2 — Homepage (primary review point)

All 11 sections in the locked order, with the approved copy verbatim, art-directed asymmetric layouts, the emerald full-bleed Crisis Story, the 6-item cultural band (grid desktop → peek carousel mobile), asymmetric 4-card portfolio preview, SVG timeline, quote carousel, restrained press strip, destination callout with the rewritten V2 lines. Real images placed by best fit; everything else labelled.

## Phase 3 — Inner pages

Weddings (4 services as sections, no pricing), Multicultural & Fusion (6-tradition grid + Zaffa sub-section), Destination (V2's rewritten copy), Celebrations, Portfolio index + story template, Meet Mariane, The Experience, FAQ, Reviews, Start Planning. Internal linking per the approved strategy — portfolio → culture/destination/experience/inquiry; services → experience/portfolio/inquiry; FAQ → deepest relevant page.

## Phase 4 — Interactions

Only the MUST-HAVE animation set, reduced-motion aware; mobile menu; form validation with the approved error/success copy writing to `inquiries`.

## Phase 5 — Responsive art direction

Mobile is art-directed per V2 Part 18 section-by-section — separate crops, not stacked desktop.

## Phase 6 — SEO / technical QA

Per-route `head()` with the approved titles/descriptions and the Part 13 framing rule ("luxury wedding and event planner with deep, lived fluency across…"), Organization/Person/Service/Review/FAQPage/BreadcrumbList schema where legitimately supported, sitemap, robots, canonicals, OG tags, alt text, semantic headings, focus states, contrast, lazy loading below the fold, responsive `srcset`.

## Technical notes

TanStack Start with file-based routes; Lovable Cloud for the content archive and inquiries; images served from Cloud storage with responsive variants and modern formats; form submitted through a server function with Zod validation. Anything the blueprint specifies that I have to implement differently (hero video, missing photography, unconfirmed press) will be listed explicitly at the end of each phase rather than silently dropped.

## What I need from you eventually (not blocking the build)

Hero video/photography per Part 5, real portfolio story details for fields 3/5/6, current award years and press assets, review permissions, and confirmation of the availability announcement bar.
