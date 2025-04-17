import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://mtbnz.org",

  // trailingSlash: "always",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date("2024-12-08"),
    }),
  ],

  adapter: netlify(),
});