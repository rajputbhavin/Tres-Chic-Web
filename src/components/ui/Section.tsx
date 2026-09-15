import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type SectionTone = "ivory" | "soft" | "emerald" | "card";

const tones: Record<SectionTone, string> = {
  ivory: "bg-background text-foreground",
  soft: "bg-neutral-soft text-foreground",
  emerald: "bg-emerald text-ivory",
  card: "bg-card text-foreground",
};

/** Standard section wrapper: consistent vertical rhythm and max width. */
export function Section({
  children,
  className,
  tone = "ivory",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: SectionTone;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-6 py-20 md:px-10 md:py-28", tones[tone], className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
