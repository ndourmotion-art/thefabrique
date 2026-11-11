import { projects } from "./projects";

export const SITE_URL = "https://thefabrique.rw";

export type SeoFields = {
  title: string;
  description: string;
  /** Verified date of a significant change to this page's content only. */
  lastModified?: string;
};

export const canonicalUrl = (path: string) =>
  `${SITE_URL}${path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`}`;

export const pageSeo: Record<string, SeoFields> = {
  "/": {
    title: "The Fabrique | Creative Powerhouse for Brands",
    description: "The Fabrique creates brand identities, advertising, films and motion design for brands, organizations and startups in Rwanda and across Africa.",
  },
  "/works": {
    title: "Creative Films & Graphic Design Portfolio | The Fabrique",
    description: "Explore The Fabrique's advertising films, documentaries, brand campaigns and graphic design portfolio for clients across Africa and beyond.",
  },
  "/terms-and-policies": {
    title: "Terms and Policies | The Fabrique",
    description: "Read The Fabrique's website terms, intellectual property policies, portfolio guidelines and legal information under the laws of Rwanda.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | The Fabrique",
    description: "Learn how The Fabrique collects and uses personal information, usage data and cookies when you visit our website or contact our creative agency.",
  },
};

// Projects can override these defaults with their own custom SEO fields.
for (const project of projects) {
  const title = `${project.title.replace(/\s+/g, " ").trim()} | The Fabrique`;
  pageSeo[`/work/${project.slug}`] = {
    title: project.seo?.title ?? title,
    description: project.seo?.description ?? project.description,
    lastModified: project.seo?.lastModified,
  };
}

export const publicPaths = Object.keys(pageSeo);

const escapeXml = (value: string) => value.replace(/[<>&"']/g, (character) => {
  const entities: Record<string, string> = { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" };
  return entities[character];
});

export function generateSitemap() {
  const entries = publicPaths.map((path) => {
    const lastModified = pageSeo[path].lastModified;
    return `  <url>\n    <loc>${escapeXml(canonicalUrl(path))}</loc>${lastModified ? `\n    <lastmod>${escapeXml(lastModified)}</lastmod>` : ""}\n  </url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>\n`;
}