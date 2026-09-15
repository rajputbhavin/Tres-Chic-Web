import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/ui/Reveal";
import type { Faq } from "@/data/faqs";
import { cn } from "@/lib/utils";

/** Single-open accordion. The panel height animates via grid-rows, not JS. */
export function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl border-t border-border">
      {items.map((faq, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={faq.question} delay={Math.min(i, 6) * 50}>
            <div className="border-b border-border">
              <h2>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-300 hover:text-gold"
                >
                  <span className="font-display text-xl text-emerald md:text-2xl">
                    {faq.question}
                  </span>
                  <span className="mt-1 shrink-0 text-gold" aria-hidden>
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
              </h2>
              <div
                className={cn(
                  "grid overflow-hidden transition-all duration-500 ease-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <p className="min-h-0 pr-10 pb-6 text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
