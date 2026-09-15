import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/ui/Reveal";
import type { CelebrationProject } from "@/data/celebrationProjects";
import { cn } from "@/lib/utils";

export function CelebrationProjectCard({
  project,
  index,
}: {
  project: CelebrationProject;
  index: number;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -520 : 520;
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

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeImageIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex]);

  return (
    <section
      id={project.id}
      className={cn(
        "border-t border-border/80 px-6 py-20 md:px-10 md:py-28 transition-colors duration-300",
        index % 2 === 1 ? "bg-neutral-soft/50" : "bg-background",
      )}
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Title in Center */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="display-xl text-emerald font-display text-balance">
            {project.title}
          </h2>
        </Reveal>

        {/* Featured Section: One prominent image on left, story/details on right */}
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
                  {project.images.length} Photographs
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

        {/* Full Photo Strip Ribbon Underneath: Height and Width preserved so all photos are visible */}
        <div className="mt-12 pt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <p className="eyebrow text-gold">Event Photo Ribbon</p>
              <span className="text-xs text-muted-foreground">({project.images.length} photos)</span>
            </div>
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
                className="group relative h-72 md:h-80 lg:h-96 shrink-0 cursor-pointer snap-start overflow-hidden rounded-xs border border-border/60 bg-black/5 shadow-md transition-transform duration-300 hover:scale-[1.02] hover:border-gold/60"
              >
                <img
                  src={imgSrc}
                  alt={`${project.title} photograph ${imgIdx + 1}`}
                  loading="lazy"
                  className="h-full w-auto max-w-none object-cover transition-transform duration-500 group-hover:scale-105"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-6 top-6 z-50 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 focus:outline-hidden"
            aria-label="Close fullscreen preview"
          >
            <X className="size-6" />
          </button>

          {/* Navigation buttons */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            className="absolute left-6 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus:outline-hidden"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            className="absolute right-6 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus:outline-hidden"
            aria-label="Next image"
          >
            <ChevronRight className="size-6" />
          </button>

          {/* Active Image */}
          <div
            className="relative max-h-[85vh] max-w-[90vw] overflow-hidden flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.images[activeImageIndex]}
              alt={`${project.title} detail`}
              className="max-h-[80vh] w-auto max-w-[90vw] object-contain shadow-2xl transition-transform duration-300"
            />
            <p className="mt-3 text-xs tracking-[0.18em] uppercase text-white/70">
              {project.title} · Photo {activeImageIndex + 1} of {project.images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
