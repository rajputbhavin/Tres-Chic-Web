import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";

import { primaryNav, site, utilityNav } from "@/data/site";
import brandLogoLight from "@/assets/gallery/Lite fonts logo.png";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-emerald-deep px-6 py-16 text-ivory md:px-10 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-block transition-opacity hover:opacity-90" aria-label={`${site.name}, home`}>
              <img
                src={brandLogoLight}
                alt={site.name}
                className="h-20 w-auto max-w-[280px] object-contain drop-shadow-md md:h-28 md:max-w-[320px]"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/75">{site.tagline}</p>
            <div className="mt-7 flex items-center gap-4">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label={`${site.shortName} on Instagram`}
                className="text-ivory/70 transition-colors hover:text-gold"
              >
                <Instagram className="size-5" aria-hidden />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label={`${site.shortName} on Facebook`}
                className="text-ivory/70 transition-colors hover:text-gold"
              >
                <Facebook className="size-5" aria-hidden />
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            {[...primaryNav, ...utilityNav].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-xs tracking-[0.16em] text-ivory/75 uppercase transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-5">
            <div>
              <p className="text-[0.6875rem] tracking-[0.22em] text-gold uppercase">Get in touch</p>
              <p className="mt-3 text-sm text-ivory/80">
                <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="hover:text-gold">
                  {site.phone}
                </a>
              </p>
              <p className="text-sm text-ivory/80">
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
              </p>
            </div>
            <div>
              <p className="text-[0.6875rem] tracking-[0.22em] text-gold uppercase">Service area</p>
              <p className="mt-3 text-sm leading-relaxed text-ivory/70">{site.serviceArea}</p>
            </div>
            <Link
              to="/start-planning"
              className="mt-1 self-start border border-ivory/50 px-6 py-3 text-[0.75rem] font-semibold tracking-[0.16em] uppercase transition-colors hover:border-gold hover:text-gold"
            >
              Start Planning
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/15 pt-7 text-[0.6875rem] tracking-[0.1em] text-ivory/50 uppercase md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>{site.regionsLine}</p>
        </div>
      </div>
    </footer>
  );
}
