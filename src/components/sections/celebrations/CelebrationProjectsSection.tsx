import { Folder, Sparkles } from "lucide-react";
import { useState } from "react";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { celebrationProjects } from "@/data/celebrationProjects";
import { cn } from "@/lib/utils";

import { CelebrationProjectCard } from "./CelebrationProjectCard";

type FilterKey = "all" | "babyshower" | "gala" | "mitzvah";

export function CelebrationProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<FilterKey>("all");

  const filteredProjects =
    selectedFilter === "all"
      ? celebrationProjects
      : celebrationProjects.filter((p) => p.category === selectedFilter);

  const filters: { key: FilterKey; label: string; count: number }[] = [
    {
      key: "all",
      label: "All Celebrations",
      count: celebrationProjects.reduce((acc, p) => acc + p.images.length, 0),
    },
    {
      key: "babyshower",
      label: "Baby Shower",
      count: celebrationProjects.find((p) => p.category === "babyshower")?.images.length ?? 29,
    },
    {
      key: "gala",
      label: "Gala & Awards",
      count: celebrationProjects.find((p) => p.category === "gala")?.images.length ?? 19,
    },
    {
      key: "mitzvah",
      label: "Bar & Bat Mitzvahs",
      count: celebrationProjects.find((p) => p.category === "mitzvah")?.images.length ?? 30,
    },
  ];

  return (
    <div className="relative">
      {/* Header & Filter Bar */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:px-10 md:pt-24 text-center">
        <Reveal>
          <Eyebrow className="justify-center">Event Portfolios</Eyebrow>
          <h2 className="display-lg mt-4 text-emerald font-display text-balance">
            Life's Most Meaningful Milestones
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            From playful garden baby showers to black tie corporate galas and energetic mitzvahs, explore each curated event gallery below.
          </p>
        </Reveal>

        {/* Filter Tabs ("as filter kinda rakhna") */}
        <Reveal delay={100} className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {filters.map((filter) => {
            const isActive = selectedFilter === filter.key;
            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => setSelectedFilter(filter.key)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300",
                  isActive
                    ? "bg-emerald text-ivory shadow-sm ring-1 ring-gold/40"
                    : "border border-border/80 bg-background text-foreground/80 hover:border-gold/50 hover:text-emerald hover:bg-neutral-soft/60",
                )}
              >
                {filter.key === "all" ? (
                  <Sparkles className={cn("size-3.5", isActive ? "text-gold" : "text-muted-foreground")} />
                ) : (
                  <Folder className={cn("size-3.5", isActive ? "text-gold" : "text-muted-foreground")} />
                )}
                <span>{filter.label}</span>
                <span
                  className={cn(
                    "ml-1 rounded-full px-1.5 py-0.5 text-[0.65rem] font-medium tracking-normal",
                    isActive ? "bg-white/20 text-ivory" : "bg-neutral-soft text-muted-foreground",
                  )}
                >
                  {filter.count}
                </span>
              </button>
            );
          })}
        </Reveal>
      </div>

      {/* Projects List */}
      <div>
        {filteredProjects.map((project, index) => (
          <CelebrationProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
