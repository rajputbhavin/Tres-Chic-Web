import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { PortfolioFilters } from "@/components/portfolio/PortfolioFilters";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { SocialCelebrationsBento } from "@/components/sections/portfolio/SocialCelebrationsBento";
import { CelebrationProjectCard } from "@/components/sections/celebrations/CelebrationProjectCard";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { WeddingProjectCard } from "@/components/sections/weddings/WeddingProjectCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { celebrationProjects } from "@/data/celebrationProjects";
import { gallery, media } from "@/data/media";
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

function CelebrationsWeLovePage() {
  const [active, setActive] = useState<string>("all");

  const items = useMemo(
    () => (active === "all" ? gallery : gallery.filter((item) => item.category === active)),
    [active],
  );

  return (
    <>
      <PageHero
        eyebrow={portfolioPageCopy.eyebrow}
        headline={portfolioPageCopy.headline}
        body={portfolioPageCopy.body}
        image={media.vizcayaStairsCouple}
        imageAlt="A couple on the stone stairs of a historic villa at their celebration"
      />

      <div className="flex flex-col">
        {weddingProjects.map((project, i) => (
          <WeddingProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <div className="flex flex-col">
        {celebrationProjects.map((project, i) => (
          <CelebrationProjectCard
            key={project.id}
            project={project}
            index={weddingProjects.length + i}
          />
        ))}
      </div>

      <SocialCelebrationsBento />

      <Section>
        <Reveal>
          <Eyebrow>{portfolioPageCopy.browseLabel}</Eyebrow>
          <PortfolioFilters active={active} onChange={setActive} />
        </Reveal>

        <PortfolioGallery items={items} />

        {items.length === 0 ? (
          <p className="mt-12 text-muted-foreground">{portfolioPageCopy.emptyState}</p>
        ) : null}
      </Section>

      <ClosingCta headline={portfolioPageCopy.closingHeadline} tone="soft" />
    </>
  );
}
