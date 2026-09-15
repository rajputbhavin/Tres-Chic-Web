import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Small uppercase label above a headline. */
export function Eyebrow({
  children,
  className,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "ivory";
}) {
  return (
    <p
      className={cn(
        "eyebrow",
        tone === "ivory" ? "text-gold" : "text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  );
}
