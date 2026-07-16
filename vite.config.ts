import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: { preset: "static" },
  vite: { base: process.env.PAGES_BASE ?? "/" },
});
