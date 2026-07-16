import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const base = process.env.VITE_BASE_PATH || "/";

export default defineConfig({
  vite: {
    base,
  },
  tanstackStart: {
    server: { entry: "server" },
    pages: [{ path: base }],
  },
  nitro: {
    preset: process.env.NITRO_PRESET || "cloudflare-module",
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: [base],
    },
  },
});
