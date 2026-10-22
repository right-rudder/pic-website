import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const base = site ?? "https://pilotinstructionalcenter.com";
  const body = `User-agent: *
Allow: /
Disallow: /*-confirmation

Sitemap: ${new URL("sitemap-index.xml", base).href}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
