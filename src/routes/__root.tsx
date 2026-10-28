import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
  useLocation,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "@/styles.css?url";
import { ErrorScreen } from "@/components/layout/ErrorScreen";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { NotFoundScreen } from "@/components/layout/NotFoundScreen";
import { ScrollRevealManager } from "@/components/layout/ScrollRevealManager";
import { Toaster } from "@/components/ui/sonner";
import { site } from "@/data/site";
import { media } from "@/data/media";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: site.name },
      { property: "og:site_name", content: site.name },
      { property: "og:type", content: "website" },
      { property: "og:image", content: media.heroWeddingPartyPalms },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: media.heroWeddingPartyPalms },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/Favicon.jpeg", type: "image/jpeg" },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "192x192" },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "shortcut icon", href: "/Favicon.jpeg" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["EventPlanner", "WeddingService", "LocalBusiness"],
          "@id": "https://treschiceventplanning.com/#business",
          name: site.name,
          alternateName: [
            "Très CHIC Miami",
            "Très CHIC Wedding & Event Planning",
            "Tres Chic Events FL",
          ],
          description:
            "Premier luxury wedding planner and event planner in Miami and South Florida, designing and executing elevated, culturally authentic celebrations worldwide.",
          url: "https://treschiceventplanning.com",
          logo: "https://treschiceventplanning.com/favicon.png",
          image: "https://treschiceventplanning.com/favicon.png",
          telephone: site.phone,
          email: site.email,
          priceRange: "$$$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Miami",
            addressRegion: "FL",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 25.7617,
            longitude: -80.1918,
          },
          areaServed: [
            { "@type": "City", name: "Miami" },
            { "@type": "City", name: "Coral Gables" },
            { "@type": "City", name: "Coconut Grove" },
            { "@type": "City", name: "Brickell" },
            { "@type": "City", name: "Miami Beach" },
            { "@type": "City", name: "Key Biscayne" },
            { "@type": "City", name: "Fort Lauderdale" },
            { "@type": "City", name: "Boca Raton" },
            { "@type": "City", name: "Palm Beach" },
            { "@type": "AdministrativeArea", name: "South Florida" },
            { "@type": "Place", name: "Worldwide" },
          ],
          founder: {
            "@type": "Person",
            name: "Mariane Fahmy",
            jobTitle: "Founder & Lead Luxury Wedding & Event Designer",
            sameAs: site.instagram,
          },
          sameAs: [site.instagram, site.facebook, site.pinterest, site.youtube],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "50",
            bestRating: "5",
            worstRating: "1",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Miami Wedding & Event Planning Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Wedding Planner in Miami",
                  description:
                    "Full-service wedding planning, design, and day-of coordination across Miami and South Florida.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Event Planner in Miami",
                  description:
                    "Bespoke event planning for corporate galas, milestone birthdays, Bar Mitzvahs, and luxury private celebrations.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Multicultural & Fusion Wedding Planning",
                  description:
                    "Expertise in South Asian, Middle Eastern (Zaffa), Jewish, and interfaith fusion celebrations.",
                },
              },
            ],
          },
          knowsAbout: [
            "Wedding Planner in Miami",
            "Event Planner in Miami",
            "South Asian weddings",
            "Jewish weddings",
            "Middle Eastern weddings",
            "Interfaith and fusion weddings",
            "Multi-day celebrations",
            "Destination weddings",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundScreen,
  errorComponent: ErrorScreen,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/gallery-admin");

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollRevealManager />
      {!isAdmin && <Header />}
      <main>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      {!isAdmin && <Footer />}
      <Toaster />
    </QueryClientProvider>
  );
}
