import { createFileRoute, redirect } from "@tanstack/react-router";

/** Redirect /blog/:slug to canonical /blogs/:slug */
export const Route = createFileRoute("/blog/$slug")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/blogs/$slug", params: { slug: params.slug }, replace: true });
  },
});

