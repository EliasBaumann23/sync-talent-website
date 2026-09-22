/**
 * Canonical production domain and shared social-metadata helpers.
 * Public URLs and slugs are never derived from these values — they only
 * describe existing pages for search engines and social platforms.
 */
export const SITE_URL = "https://sync-talent.io";
export const SITE_NAME = "Sync Talent";
export const OG_IMAGE = `${SITE_URL}/og/sync-talent-og.jpg`;

export function absoluteUrl(path: string) {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path}`;
}

/**
 * Builds the head() payload for a content page: unique title/description,
 * matching Open Graph and Twitter tags, and one self-referencing canonical.
 */
export function pageHead({
  path,
  title,
  description,
  ogTitle,
  ogDescription,
  ogType = "website",
  image = OG_IMAGE,
}: {
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article";
  image?: string;
}) {
  const url = absoluteUrl(path);
  const socialTitle = ogTitle ?? title;
  const socialDescription = ogDescription ?? description;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: socialTitle },
      { property: "og:description", content: socialDescription },
      { property: "og:type", content: ogType },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: socialTitle },
      { name: "twitter:description", content: socialDescription },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
