import { describe, expect, it } from "vitest";
import { canonicalUrl, generateSitemap, pageSeo, publicPaths } from "./seo";
import { projects } from "./projects";

describe("SEO rules", () => {
  it("keeps every public page title under 60 characters", () => {
    for (const fields of Object.values(pageSeo)) {
      expect(fields.title.length).toBeGreaterThan(0);
      expect(fields.title.length).toBeLessThan(60);
    }
  });
  it("keeps every public page description under 160 characters", () => {
    for (const fields of Object.values(pageSeo)) {
      expect(fields.description.length).toBeGreaterThan(0);
      expect(fields.description.length).toBeLessThan(160);
    }
  });
  it("uses self-referencing thefabrique.rw canonical URLs without trailing slashes", () => {
    expect(canonicalUrl("/")).toBe("https://thefabrique.rw");
    expect(canonicalUrl("/works/")).toBe("https://thefabrique.rw/works");
    expect(canonicalUrl("/work/noura-party")).toBe("https://thefabrique.rw/work/noura-party");
  });
  it("lists all public routes and every current project in the sitemap", () => {
    const sitemap = generateSitemap();
    const expected = ["/", "/works", "/terms-and-policies", "/privacy-policy", ...projects.map(project => `/work/${project.slug}`)];
    expect(publicPaths).toEqual(expected);
    for (const path of expected) expect(sitemap).toContain(`<loc>${canonicalUrl(path)}</loc>`);
    expect(sitemap).not.toContain("/work/:slug");
    expect(sitemap).not.toContain("/not-found");
  });
  it("does not invent lastmod dates and includes verified page timestamps when provided", () => {
    expect(generateSitemap()).not.toContain("<lastmod>");
    const previous = pageSeo["/works"].lastModified;
    try {
      pageSeo["/works"].lastModified = "2026-11-10";
      expect(generateSitemap()).toContain("<lastmod>2026-11-10</lastmod>");
    } finally {
      pageSeo["/works"].lastModified = previous;
    }
  });
});