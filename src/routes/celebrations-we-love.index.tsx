import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { PortfolioFilters } from "@/components/portfolio/PortfolioFilters";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { CelebrationProjectCard } from "@/components/sections/celebrations/CelebrationProjectCard";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { WeddingProjectCard } from "@/components/sections/weddings/WeddingProjectCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { celebrationProjects } from "@/data/celebrationProjects";
import { useLiveGallery } from "@/data/galleryStore";
import { media } from "@/data/media";
import { portfolioPageCopy } from "@/data/portfolio";
import { weddingProjects } from "@/data/weddingProjects";

export const Route = createFileRoute("/celebrations-we-love/")({
  head: () => ({
    meta: [
      { title: "Celebrations We Love | Weddings by Très CHIC" },
      {
        name: "description",
        content:
          "Receptions, ceremonies, tablescapes and details from real South Florida and multicultural celebrations designed and executed by Très CHIC.",
      },
      { property: "og:title", content: "Celebrations We Love | Weddings by Très CHIC" },
      {
        property: "og:description",
        content:
          "A look at real celebrations, waterfront tents, zaffa entrances, candlelit head tables and the details in between.",
      }, 
      { property: "og:url", content: "/celebrations-we-love" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/celebrations-we-love" }],
  }),
  component: CelebrationsWeLovePage,
});

const EXCLUDED_CATEGORIES = new Set(["reception", "tablescape", "detail", "ceremony"]);

function CelebrationsWeLovePage() {
  const [active, setActive] = useState<string>("all");
  const liveGallery = useLiveGallery();

  const visibleGallery = useMemo(
    () => liveGallery.filter((item) => !EXCLUDED_CATEGORIES.has(item.category)),
    [liveGallery]
  );

  const items = useMemo(
    () => (active === "all" ? visibleGallery : visibleGallery.filter((item) => item.category === active)),
    [active, visibleGallery],
  );

  return (
    <>
      <PageHero
        eyebrow={portfolioPageCopy.eyebrow}
        headline={portfolioPageCopy.headline}
        body={portfolioPageCopy.body}
        image={media.portfolioHero}
        imageAlt="A bride in a tiered ruffle gown and groom in a white tuxedo celebrate with guests on the ballroom dance floor"
        fullScreen
      />

      <Section className={active === "couples" || active === "events" ? "pb-6 md:pb-10" : ""}>
        <Reveal>
          <Eyebrow>{portfolioPageCopy.browseLabel}</Eyebrow>
          <PortfolioFilters active={active} onChange={setActive} />
        </Reveal>

        {active !== "couples" && active !== "events" && (
          <>
            <PortfolioGallery items={items} />

            {items.length === 0 ? (
              <div className="mt-14 rounded-xs border border-dashed border-gold/40 bg-neutral-soft/50 py-16 px-6 text-center">
                <p className="font-display text-xl text-emerald">Curated Imagery Coming Soon</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Photography for this celebration category is currently being curated from our archives.
                </p>
              </div>
            ) : null}
          </>
        )}
      </Section>

      {/* Tab: Couples (6 Wedding Projects) */}
      {active === "couples" && (
        <div className="flex flex-col">
          {weddingProjects.map((project, i) => (
            <WeddingProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      )}

      {/* Tab: Events (3 Event Projects + Social Celebrations) */}
      {active === "events" && (
        <div className="flex flex-col">
          {celebrationProjects.map((project, i) => (
            <CelebrationProjectCard
              key={project.id}
              project={project}
              index={i}
            />
          ))}
        </div>
      )}

      <ClosingCta headline={portfolioPageCopy.closingHeadline} tone="soft" />
    </>
  );
}
