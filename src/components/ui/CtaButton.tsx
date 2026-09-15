import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type CtaVariant = "solid" | "outline-ivory" | "outline-emerald";

const variants: Record<CtaVariant, string> = {
  solid: "bg-emerald text-ivory hover:bg-emerald-light",
  "outline-ivory": "border border-ivory/60 text-ivory hover:border-gold hover:text-gold",
  "outline-emerald": "border border-emerald text-emerald hover:bg-emerald hover:text-ivory",
};

/** Primary CTA button. Emerald fill, or ivory outline on emerald sections. */
export function CtaButton({
  to,
  children,
  variant = "solid",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: CtaVariant;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-8 py-4 text-[0.8125rem] font-semibold tracking-[0.16em] uppercase transition-colors duration-300",
        variants[variant],
        className,
      )}
    >
      {children}
      <ArrowRight className="size-3.5" aria-hidden />
    </Link>
  );
}
