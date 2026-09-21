import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube } from "lucide-react";

import { primaryNav, site, utilityNav } from "@/data/site";
import brandLogo from "@/assets/gallery/Logo.png";

function PinterestIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.365-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.546.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-emerald-deep px-6 py-16 text-ivory md:px-10 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-block transition-opacity hover:opacity-90" aria-label={`${site.name}, home`}>
              <img
                src={brandLogo}
                alt={site.name}
                className="h-24 w-auto object-contain drop-shadow-md md:h-32 lg:h-36"
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
              <a
                href={site.pinterest}
                target="_blank"
                rel="noreferrer"
                aria-label={`${site.shortName} on Pinterest`}
                className="text-ivory/70 transition-colors hover:text-gold"
              >
                <PinterestIcon className="size-5" />
              </a>
              <a
                href={site.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label={`${site.shortName} on YouTube`}
                className="text-ivory/70 transition-colors hover:text-gold"
              >
                <Youtube className="size-5" aria-hidden />
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
