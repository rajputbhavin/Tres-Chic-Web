import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

const revealSelector = [
  "main section h1",
  "main section h2",
  "main section h3",
  "main section h4",
  "main section p",
  "main section blockquote",
  "main section button",
  "main section a",
  "footer h2",
  "footer h3",
  "footer p",
  "footer a",
].join(",");

/**
 * Gives page copy and calls to action one consistent entrance rhythm without
 * forcing every editorial section to own animation state. Existing Reveal
 * groups and interaction-heavy controls keep their purpose-built motion.
 */
export function ScrollRevealManager() {
  const location = useLocation();

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const candidates = Array.from(document.querySelectorAll<HTMLElement>(revealSelector)).filter(
      (element) =>
        !element.closest(
          ".reveal, [data-motion-static], form, [role='tablist'], [role='tabpanel'], .sticky",
        ),
    );

    if (reducedMotion) {
      candidates.forEach((element) => element.classList.add("site-reveal-in"));
      return;
    }

    candidates.forEach((element, index) => {
      element.classList.add("site-reveal");
      element.style.setProperty("--site-reveal-delay", `${(index % 4) * 90}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          element.classList.add("site-reveal-in");
          observer.unobserve(element);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );

    candidates.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}