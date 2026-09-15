import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

/** One wedding service section with natural, smooth scroll flow. */
export function ServiceTierSection({ service, index }: { service: Service; index: number }) {
  const flipped = index % 2 === 1;

  return (
    <section
      className={cn(
        "border-t border-border/70 px-6 py-20 md:px-10 md:py-28 transition-colors duration-300",
        flipped ? "bg-neutral-soft/70" : "bg-background",
      )}
    >
      <article
        className="mx-auto grid w-full max-w-6xl items-center gap-x-16 gap-y-10 md:grid-cols-2"
      >
          <Reveal className={cn("order-1 self-end", flipped && "md:col-start-2")}>
            <Eyebrow>{service.label}</Eyebrow>
            <h2 className="display-lg rule-gold mt-5 text-balance text-emerald">{service.title}</h2>
          </Reveal>
          <Reveal
            className={cn(
              "order-2 md:row-span-2 md:row-start-1",
              flipped ? "md:col-start-1" : "md:col-start-2",
            )}
            delay={150}
          >
            <img
              src={service.image.src}
              alt={service.image.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <Reveal className={cn("order-3 self-start", flipped && "md:col-start-2")} delay={200}>
            <div className="mt-8 border-y border-gold/60 py-4">
              <p className="eyebrow text-muted-foreground">Investment</p>
              <p className="mt-1 font-display text-2xl text-emerald">{service.investment}</p>
            </div>
            <p className="mt-8 text-muted-foreground">{service.body}</p>
            <p className="mt-6 border-l border-gold pl-5 text-sm text-foreground/80">
              {service.prefixBuiltFor ? `Built for: ${service.builtFor}` : service.builtFor}
            </p>
          </Reveal>
      </article>
    </section>
  );
}
