import { createFileRoute, notFound } from "@tanstack/react-router";
import { PublicationPage } from "@/components/site/PublicationPage";
import { getPublicationBySlug } from "@/lib/publications";

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
    const title = p.seoTitle ?? `${p.title} — Sync Talent`;
    const description = p.seoDescription ?? p.excerpt ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:url", content: `/knowledge-hub/${p.slug}` },
      ],
      links: [{ rel: "canonical", href: `/knowledge-hub/${p.slug}` }],
    };
  },
  component: PublicationRoute,
});

function PublicationRoute() {
  const { publication } = Route.useLoaderData();
  return <PublicationPage publication={publication} />;
}
