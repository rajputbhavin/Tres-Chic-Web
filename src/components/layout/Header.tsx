import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { primaryNav, site, utilityNav } from "@/data/site";
import { useHeaderScrollState } from "@/hooks/useHeaderScrollState";
import { cn } from "@/lib/utils";

import brandLogo from "@/assets/gallery/Logo.png";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const scrolled = useHeaderScrollState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const transparent = !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        transparent
          ? "bg-gradient-to-b from-black/85 via-black/40 to-transparent py-4 md:py-5"
          : "border-b border-[#bfa15f]/25 bg-[#0c1a14]/95 backdrop-blur-md shadow-lg py-3 md:py-3.5",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 md:px-10">
        <Link
          to="/"
          className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
          aria-label={`${site.name}, home`}
        >
          <img
            src={brandLogo}
            alt="Très CHIC Event Planning & Design"
            className={cn(
              "w-auto object-contain transition-all duration-300",
              transparent
                ? "h-16 md:h-20 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                : "h-13 md:h-16 drop-shadow-sm",
            )}
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.75rem] font-medium tracking-[0.16em] uppercase text-ivory/85 hover:text-gold transition-colors"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-gold font-semibold" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/start-planning"
            className={cn(
              "px-6 py-2.5 text-[0.75rem] font-semibold tracking-[0.16em] uppercase transition-all duration-300",
              transparent
                ? "border border-gold/60 bg-emerald/75 text-ivory hover:bg-gold hover:text-ink hover:border-gold shadow-md backdrop-blur-xs"
                : "bg-gold text-ink hover:bg-white hover:text-emerald shadow-md",
            )}
          >
            Start Planning
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden text-ivory hover:text-gold transition-colors p-1"
        >
          {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-gold/20 bg-[#0c1a14]/98 backdrop-blur-md px-6 pt-6 pb-10 lg:hidden shadow-2xl">
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {primaryNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm tracking-[0.16em] text-ivory/90 hover:text-gold uppercase transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <span className="mt-2 h-px w-10 bg-gold/50" aria-hidden />
            {utilityNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-xs tracking-[0.16em] text-ivory/60 hover:text-gold uppercase transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/start-planning"
              className="mt-4 bg-gold px-6 py-3.5 text-center text-[0.75rem] font-semibold tracking-[0.16em] text-ink uppercase hover:bg-white transition-colors shadow-md"
            >
              Start Planning
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
