/**
 * Publication registry — content lives in Markdown files under
 * src/content/publications/<category-folder>/<slug>.md
 *
 * Presentation lives in src/components/site/PublicationPage.tsx.
 * Adding a publication = adding one Markdown file. No code changes required.
 */

export const PUBLICATION_CATEGORIES = [
  "Atlas Notes",
  "Salary Intelligence",
  "Hiring Guides",
  "Research",
  "Market Reports",
  "Decision Intelligence",
  "Case Studies",
  "The Industrial Hiring Thesis",
] as const;

export type PublicationCategory = (typeof PUBLICATION_CATEGORIES)[number];

export interface PublicationStat {
  value: string;
  label: string;
}

export interface PublicationSource {
  label: string;
  href?: string;
}

export interface Publication {
  id: string;
  title: string;
  slug: string;
  category: PublicationCategory;
  publicationType?: string;
  excerpt?: string;
  readTime?: string;
  publishedDate?: string;
  updatedDate?: string;
  featured: boolean;
  status: "draft" | "published";
  seoTitle?: string;
  seoDescription?: string;
  author?: string;
  related: string[];
  /** Optional structured blocks — rendered only when present. */
  keyFindings: string[];
  stats: PublicationStat[];
  sources: PublicationSource[];
  methodology?: string;
  ctaTitle?: string;
  ctaText?: string;
  ctaButtonText?: string;
  ctaTo?: string;
  /** Markdown article body. */
  body: string;
}

/* ------------------------------------------------------------------ */
/* Minimal frontmatter parser (scalars, dash lists, `|` block scalars) */
/* ------------------------------------------------------------------ */

type Raw = Record<string, string | string[]>;

function stripQuotes(v: string) {
  const t = v.trim();
  if (
    (t.startsWith('"') && t.endsWith('"')) ||
    (t.startsWith("'") && t.endsWith("'"))
  ) {
    return t.slice(1, -1);
  }
  return t;
}

function parseFrontmatter(raw: string): { data: Raw; body: string } {
  if (!raw.startsWith("---")) return { data: {}, body: raw };
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return { data: {}, body: raw };

  const head = raw.slice(raw.indexOf("\n") + 1, end);
  const body = raw.slice(end + 4).replace(/^\r?\n/, "");

  const data: Raw = {};
  const lines = head.split(/\r?\n/);
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim() || line.trim().startsWith("#")) {
      i++;
      continue;
    }
    const match = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line);
    if (!match) {
      i++;
      continue;
    }
    const key = match[1];
    const inline = match[2].trim();
    i++;

    // Block scalar: key: |
    if (inline === "|" || inline === ">") {
      const buf: string[] = [];
      while (i < lines.length && (lines[i].startsWith("  ") || !lines[i].trim())) {
        buf.push(lines[i].replace(/^ {2}/, ""));
        i++;
      }
      data[key] = buf.join("\n").trim();
      continue;
    }

    // Inline array: key: [a, b]
    if (inline.startsWith("[") && inline.endsWith("]")) {
      const inner = inline.slice(1, -1).trim();
      data[key] = inner ? inner.split(",").map((s) => stripQuotes(s)) : [];
      continue;
    }

    // Dash list
    if (inline === "") {
      const items: string[] = [];
      while (i < lines.length && /^\s*-\s+/.test(lines[i])) {
        items.push(stripQuotes(lines[i].replace(/^\s*-\s+/, "")));
        i++;
      }
      data[key] = items.length ? items : "";
      continue;
    }

    data[key] = stripQuotes(inline);
  }

  return { data, body };
}

const asString = (v: string | string[] | undefined) =>
  typeof v === "string" && v.trim() !== "" ? v : undefined;

const asList = (v: string | string[] | undefined): string[] =>
  Array.isArray(v) ? v.filter(Boolean) : v ? [v] : [];

/* ------------------------------------------------------------------ */
/* Registry                                                            */
/* ------------------------------------------------------------------ */

const files = import.meta.glob("../content/publications/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function build(): Publication[] {
  const out: Publication[] = [];

  for (const [path, raw] of Object.entries(files)) {
    const { data, body } = parseFrontmatter(raw);
    const slug =
      asString(data.slug) ?? path.split("/").pop()!.replace(/\.md$/, "");
    const category = (asString(data.category) ??
      "Atlas Notes") as PublicationCategory;

    out.push({
      id: asString(data.id) ?? slug,
      title: asString(data.title) ?? slug,
      slug,
      category,
      publicationType: asString(data.publicationType),
      excerpt: asString(data.excerpt),
      readTime: asString(data.readTime),
      publishedDate: asString(data.publishedDate),
      updatedDate: asString(data.updatedDate),
      featured: asString(data.featured) === "true",
      status: asString(data.status) === "draft" ? "draft" : "published",
      seoTitle: asString(data.seoTitle),
      seoDescription: asString(data.seoDescription),
      author: asString(data.author),
      related: asList(data.related),
      keyFindings: asList(data.keyFindings),
      stats: asList(data.stats).map((s) => {
        const [value, ...rest] = s.split("|");
        return { value: value.trim(), label: rest.join("|").trim() };
      }),
      sources: asList(data.sources).map((s) => {
        const [label, href] = s.split("|");
        return { label: label.trim(), href: href?.trim() || undefined };
      }),
      methodology: asString(data.methodology),
      ctaTitle: asString(data.ctaTitle),
      ctaText: asString(data.ctaText),
      ctaButtonText: asString(data.ctaButtonText),
      ctaTo: asString(data.ctaTo),
      body,
    });
  }

  return out.sort((a, b) =>
    (b.publishedDate ?? "").localeCompare(a.publishedDate ?? ""),
  );
}

export const publications: Publication[] = build();

export const publishedPublications = publications.filter(
  (p) => p.status === "published",
);

export function getPublicationBySlug(slug: string) {
  return publishedPublications.find((p) => p.slug === slug);
}

export function getPublicationById(id: string) {
  return publishedPublications.find((p) => p.id === id);
}

export function getPublicationsByCategory(category: PublicationCategory) {
  return publishedPublications.filter((p) => p.category === category);
}

export function getRelatedPublications(pub: Publication) {
  return pub.related
    .map((id) => getPublicationById(id))
    .filter((p): p is Publication => Boolean(p) && p!.slug !== pub.slug);
}
