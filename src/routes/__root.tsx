import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
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
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.name,
          description:
            "Wedding planning, design and coordination for elevated, culturally rich celebrations in South Florida and worldwide.",
          telephone: site.phone,
          email: site.email,
          areaServed: [
            "Miami",
            "Fort Lauderdale",
            "Coral Gables",
            "Boca Raton",
            "South Florida",
            "Worldwide",
          ],
          founder: { "@type": "Person", name: "Mariane Fahmy" },
          sameAs: [site.instagram, site.facebook, site.pinterest, site.youtube],
          knowsAbout: [
            "South Asian weddings",
            "Jewish weddings",
            "Middle Eastern weddings",
            "Interfaith and fusion weddings",
            "Multi-day weddings",
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

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollRevealManager />
      <Header />
      <main>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </QueryClientProvider>
  );
}
