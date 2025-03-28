// src/pages/robots.txt.ts
import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const siteUrl = import.meta.env.SITE_URL || "https://thekitchenpot.com"; // Use an environment variable for the site URL
  const noIndexPaths = [
    "/blog/tag/*",
    "/blog/example-post",
    "/category/*",
    "/api/*",
    "thekitchenpots.netlify.app/*",  // Added Netlify domain
    "/tag/*",
    "/goto/*",
    "/search/*",
    "dev.thekitchenpot.com/*",  // Added development subdomain
    "/?",
    "*.pages.dev/*",
    "*kff.pages.dev/*",
  ];
  const robotsTxtContent = `
User-agent: *
Disallow: ${noIndexPaths.join("\nDisallow: ")}
Allow: /
Sitemap: ${siteUrl}/sitemap-index.xml
  `.trim();

  return new Response(robotsTxtContent, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
