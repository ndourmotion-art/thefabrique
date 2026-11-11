# Architecture rules

- Keep public page SEO fields and sitemap URLs in `src/data/seo.ts`, with optional project overrides; one source prevents metadata and route discovery from drifting.
- Use one Helmet provider and a route-aware PageSeo component for client-side metadata, with static brand and Organization fallbacks in index.html; social crawlers cannot rely on client-side tags.
- Generate the sitemap before dev and production builds using the existing project records; lastmod must come only from a verified significant page-specific content change, never build time.
- Keep image descriptions in a shared image-description lookup for reused project covers and gallery slides; reuse avoids inconsistent alt text across views.