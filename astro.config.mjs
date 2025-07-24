import { defineConfig } from "astro/config";

import {
  transformerNotationDiff, 
  transformerNotationHighlight, 
  transformerNotationWordHighlight,
  transformerStyleToClass
  // ...
} from '@shikijs/transformers'


import react from "@astrojs/react";

import rehypeStringify from 'rehype-stringify'

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// import cloudflare from "@astrojs/cloudflare";

import netlify from "@astrojs/netlify";


// import auth from "auth-astro";

// import decapCmsOauth from "astro-decap-cms-oauth";

// https://astro.build/config
export default defineConfig({
  site: "https://thekitchenpot.com",

  // trailingSlash: "always",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon(), // decapCmsOauth()
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date("2025-07-08"),
    }),
    // auth()
  ],
  output: "static",

  adapter: netlify(),
  markdown: {

    remarkPlugins: [ ],
    rehypePlugins: [rehypeStringify],
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      theme: 'houston',
      // Alternatively, provide multiple themes
      // See note below for using dual light/dark themes
      themes: {
        light: 'github-light',
        dark: 'night-owl',
      },
      // Disable the default colors
      // https://shiki.style/guide/dual-themes#without-default-color
      // (Added in v4.12.0)
      defaultColor: false,
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://shiki.style/languages
      langs: ['astro', 'html'],
      // Add custom aliases for languages
      // Map an alias to a Shiki language ID: https://shiki.style/languages#bundled-languages
      // https://shiki.style/guide/load-lang#custom-language-aliases
      langAlias: {
        cjs: "javascript"
      },
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      transformers: [transformerNotationDiff(), 
            transformerNotationHighlight(), 
            transformerNotationWordHighlight(),
            transformerStyleToClass()
          ],
    },
  },
});
