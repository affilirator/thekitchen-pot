// src/pages/robots.txt.ts
import type { APIRoute } from "astro";

// Constants moved outside the function for better memory usage
const DEFAULT_SITE_URL = "https://thekitchenpot.com";
const NO_INDEX_PATHS = [
  "/blog/tag/*",
  "/blog/example-post",
  "/category/*",
  "/api/*",
  "*thekitchenpots.netlify.app/*",
  "/tag/*",
  "/goto/*",
  "/search/*",
  "*dev.thekitchenpot.com/*",
  "/?",
  "*.pages.dev/*",
  "*kff.pages.dev/*",
] as const;

// Memoized function to generate robots.txt content
const generateRobotsTxt = (siteUrl: string): string => `User-agent: *
Disallow: ${NO_INDEX_PATHS.join("\nDisallow: ")}
Allow: /
Sitemap: ${siteUrl}/sitemap-index.xml`;

// Cached response headers
const RESPONSE_HEADERS = {
  "Content-Type": "text/plain",
  "Cache-Control": "public, max-age=3600", // Cache for 1 hour
} as const;

export const GET: APIRoute = ({ site }) => {
  try {
    const siteUrl = import.meta.env.SITE_URL || DEFAULT_SITE_URL;
    const robotsTxtContent = generateRobotsTxt(siteUrl);

    return new Response(robotsTxtContent, {
      headers: RESPONSE_HEADERS,
      status: 200,
    });
  } catch (error) {
    console.error("Error generating robots.txt:", error);
    return new Response("User-agent: *\nDisallow: /", {
      headers: RESPONSE_HEADERS,
      status: 500,
    });
  }
};
