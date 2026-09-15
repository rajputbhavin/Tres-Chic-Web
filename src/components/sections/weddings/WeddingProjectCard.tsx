import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useRef, useState } from "react";

import { Reveal } from "@/components/ui/Reveal";
import type { WeddingProject } from "@/data/weddingProjects";
import { cn } from "@/lib/utils";

export function WeddingProjectCard({ project, index }: { project: WeddingProject; index: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -480 : 480;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const openLightbox = (imgIdx: number) => {
    setActiveImageIndex(imgIdx);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextLightbox = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % project.images.length);
    }
  };

  const prevLightbox = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <section
      id={project.id}
      className={cn(
        "border-t border-border/80 px-6 py-20 md:px-10 md:py-28 transition-colors duration-300",
        index % 2 === 1 ? "bg-neutral-soft/50" : "bg-background",
      )}
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Title in Center as requested */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="display-xl text-emerald font-display text-balance">
            {project.title}
          </h2>
          <p className="mt-2 text-sm font-medium tracking-[0.18em] uppercase text-taupe">
            {project.subtitle}
          </p>
        </Reveal>

        {/* Featured Section: One prominent image on the left, story/details on the right */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* One image on left */}
          <Reveal className="lg:col-span-7">
            <div
              onClick={() => openLightbox(0)}
              className="group relative cursor-pointer overflow-hidden rounded-xs border border-border/60 bg-black/5 shadow-md"
            >
              <img
                src={project.featuredImage}
                alt={`${project.title} spotlight photograph`}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-between p-6">
                <span className="text-xs tracking-[0.16em] uppercase text-ivory font-semibold flex items-center gap-2">
                  <Maximize2 className="size-4 text-gold" /> Click to expand
                </span>
                <span className="text-xs tracking-[0.16em] uppercase text-gold font-medium">
                  Full Gallery
                </span>
              </div>
            </div>
          </Reveal>

          {/* Details on right */}
          <Reveal delay={120} className="lg:col-span-5 flex flex-col justify-center">
            <div className="border-l-2 border-gold pl-6 py-2">
              <p className="eyebrow text-gold">Collection Overview</p>
              <h3 className="display-sm mt-2 text-emerald">Every Detail Matters</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {project.overviewParagraph}
              </p>
            </div>

            <div className="mt-6 border-t border-border/60 pt-6">
              <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-taupe font-semibold mb-3.5">
                Celebration Highlights
              </p>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm leading-snug text-foreground/85">
                    <span className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* "Ek patta hoga uske niche" - Full Photo Strip Ribbon Underneath */}
        <div className="mt-12 pt-6">
          <div className="flex items-center justify-between mb-4">
            <p className="eyebrow text-gold">Project Photo Ribbon</p>
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="p-1.5 text-muted-foreground hover:text-gold transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="p-1.5 text-muted-foreground hover:text-gold transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 pt-1 scroll-smooth scrollbar-none snap-x snap-mandatory"
            tabIndex={0}
            aria-label={`${project.title} photo strip`}
          >
            {project.images.map((imgSrc, imgIdx) => (
              <div
                key={imgIdx}
                onClick={() => openLightbox(imgIdx)}
                className="group relative w-64 md:w-72 lg:w-80 shrink-0 cursor-pointer snap-start overflow-hidden rounded-xs border border-border/60 bg-black/5 shadow-md transition-transform duration-300 hover:scale-[1.02] hover:border-gold/60"
              >
                <img
                  src={imgSrc}
                  alt={`${project.title} photograph`}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="rounded-full bg-black/60 p-2 text-gold backdrop-blur-xs">
                    <Maximize2 className="size-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-md"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close photo preview"
            className="absolute top-6 right-6 z-50 p-2 text-ivory hover:text-gold transition-colors"
          >
            <X className="size-7" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            aria-label="Previous photo"
            className="absolute left-4 md:left-8 z-50 p-3 rounded-full bg-black/50 text-ivory hover:text-gold hover:bg-black/80 transition-all"
          >
            <ChevronLeft className="size-6 md:size-8" />
          </button>

          <div
            className="relative max-h-[85vh] max-w-[90vw] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.images[activeImageIndex]}
              alt={`${project.title} preview`}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-xs shadow-2xl"
            />
            <p className="mt-4 text-xs tracking-[0.2em] uppercase text-ivory/80">
              {project.title}
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            aria-label="Next photo"
            className="absolute right-4 md:right-8 z-50 p-3 rounded-full bg-black/50 text-ivory hover:text-gold hover:bg-black/80 transition-all"
          >
            <ChevronRight className="size-6 md:size-8" />
          </button>
        </div>
      )}
    </section>
  );
}
