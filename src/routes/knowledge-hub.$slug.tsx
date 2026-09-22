import { createFileRoute, notFound } from "@tanstack/react-router";
import { PublicationPage } from "@/components/site/PublicationPage";
import { getPublicationBySlug } from "@/lib/publications";
import { OG_IMAGE, SITE_NAME, SITE_URL, absoluteUrl, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/knowledge-hub/$slug")({
  loader: ({ params }) => {
    const publication = getPublicationBySlug(params.slug);
    if (!publication) throw notFound();
    return { publication };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Publication not found — Sync Talent" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.publication;
    const path = `/knowledge-hub/${p.slug}`;
    const title = p.seoTitle ?? `${p.title} | Sync Talent`;
    const description = p.seoDescription ?? p.excerpt ?? "";

    const article: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: p.title,
      mainEntityOfPage: absoluteUrl(path),
      image: OG_IMAGE,
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: `${SITE_URL}/`,
      },
    };
    if (description) article.description = description;
    if (p.publishedDate) article.datePublished = p.publishedDate;
    if (p.updatedDate) article.dateModified = p.updatedDate;
    if (p.author) article.author = { "@type": "Organization", name: p.author };

    return {
      ...pageHead({ path, title, description, ogType: "article" }),
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(article) },
      ],
    };
  },
  component: PublicationRoute,
});

function PublicationRoute() {
  const { publication } = Route.useLoaderData();
  return <PublicationPage publication={publication} />;
}
