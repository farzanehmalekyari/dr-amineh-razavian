import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

const isVercel = Boolean(process.env.VERCEL);

export default defineConfig({
  cloudflare: isVercel ? false : undefined,
  plugins: isVercel ? [nitro({ preset: "vercel" })] : [],
  tanstackStart: {
    server: { entry: "server" },
  },
});