import { writeFileSync } from "node:fs";
import { generateSitemap } from "../src/data/seo";

writeFileSync(new URL("../public/sitemap.xml", import.meta.url), generateSitemap());
console.log("Updated sitemap with all public pages and project URLs.");