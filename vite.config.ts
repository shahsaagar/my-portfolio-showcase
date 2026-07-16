import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/",
  tanstackStart: {
    server: { entry: "server" },
  },
});
