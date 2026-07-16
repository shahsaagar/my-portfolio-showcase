import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const base = process.env.VITE_BASE_PATH || "/";

export default defineConfig({
  vite: {
    base,
    environments: {
      ssr: {
        build: {
          rollupOptions: {
            input: "./src/server.ts",
          },
        },
      },
    },
  },
  tanstackStart: {
    server: { entry: "server" },
    pages: [{ path: "/" }],
  },
  nitro: {
    preset: process.env.NITRO_PRESET || "cloudflare-module",
    // @ts-expect-error passed through to nitro() at runtime
    prerender: {
      crawlLinks: true,
      failOnError: false,
        routes: [base],
    },
  },
});
