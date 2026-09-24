import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    server: {
      allowedHosts: true,
    },
  },
  ...(process.env["VERCEL"] ? { nitro: { preset: "vercel" } } : {}),
  tanstackStart: {
    server: { entry: "server" },
  },
});
