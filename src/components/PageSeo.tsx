import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { canonicalUrl, pageSeo, SITE_URL } from "@/data/seo";
import { getProject } from "@/data/projects";

export function PageSeo() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, "") || "/";
  const fields = pageSeo[path];
  const title = fields?.title ?? "Page Not Found | The Fabrique";
  const description = fields?.description ?? "This page could not be found. Explore The Fabrique's creative portfolio or return to our homepage.";
  const url = canonicalUrl(path);
  const project = path.startsWith("/work/") ? getProject(path.slice(6)) : undefined;
  const breadcrumb = fields && path !== "/" ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ...(project ? [{ "@type": "ListItem", position: 2, name: "All Works", item: canonicalUrl("/works") }] : []),
      { "@type": "ListItem", position: project ? 3 : 2, name: project?.title.replace(/\s+/g, " ") ?? title.split(" | ")[0], item: url },
    ],
  } : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={fields ? "index, follow" : "noindex, follow"} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="The Fabrique" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {breadcrumb && <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>}
      {project && <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title.replace(/\s+/g, " "),
        description: project.description,
        url,
        image: `${SITE_URL}${project.image}`,
        genre: project.tags,
        creator: { "@id": `${SITE_URL}#organization` },
      })}</script>}
    </Helmet>
  );
}