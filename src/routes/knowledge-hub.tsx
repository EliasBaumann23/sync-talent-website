import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTABand } from "@/components/site/CTA";
import { ArrowRight } from "lucide-react";
import logoIcon from "@/assets/Logo_New_Turquise_S.png.asset.json";
import { publishedPublications } from "@/lib/publications";

export const Route = createFileRoute("/knowledge-hub")({
  head: () => ({
    meta: [
      { title: "Knowledge Hub — Industrial Hiring Intelligence | Sync Talent" },
      {
        name: "description",
        content:
          "Atlas Notes, Research, Salary Intelligence, Hiring Guides, Market Reports, Case Studies and the Industrial Hiring Thesis — written for international industrial leaders.",
      },
      { property: "og:title", content: "Knowledge Hub — Sync Talent" },
      { property: "og:description", content: "A research institution for industrial hiring in North America." },
      { property: "og:url", content: "/knowledge-hub" },
    ],
    links: [{ rel: "canonical", href: "/knowledge-hub" }],
  }),
  component: HubPage,
});

const categories = [
  "All",
  "Atlas Notes",
  "Research",
  "Salary Intelligence",
  "Hiring Guides",
  "Market Reports",
  "Case Studies",
  "Decision Intelligence",
];

/**
 * Card list. Entries that exist as real publications (src/content/publications)
 * take their title, category, read time and excerpt from that metadata and link
 * to the publication page. Remaining entries stay as upcoming placeholders.
 */
const staticArticles = [
  {
    cat: "Atlas Notes",
    title: "Why Executive Search deserves a better methodology.",
    read: "6 min read",
  },
  {
    cat: "Decision Intelligence",
    title: "The hiring decision, reconsidered: from requirement to reasoning.",
    read: "9 min read",
  },
  {
    cat: "Salary Intelligence",
    title: "Compensation evidence for Sales Engineers in Mexico.",
    read: "7 min read",
  },
  {
    cat: "Hiring Guides",
    title: "Hiring Field Service leadership in Mexico: what to evaluate.",
    read: "8 min read",
  },
  {
    cat: "Market Reports",
    title: "Q4 industrial talent evidence: demand, availability, notice periods.",
    read: "9 min read",
  },
  {
    cat: "Research",
    title: "Bilingual technical talent across the Bajío corridor.",
    read: "6 min read",
  },
  {
    cat: "Case Studies",
    title: "First hires playbook: from Country Manager to Plant leadership.",
    read: "10 min read",
  },
  {
    cat: "Salary Intelligence",
    title: "Service Manager compensation benchmarks — industrial machinery.",
    read: "5 min read",
  },
  {
    cat: "Atlas Notes",
    title: "Hiring confidence: the metric no one publishes.",
    read: "5 min read",
  },
];

type Card = { cat: string; title: string; read: string; slug?: string };

const byTitle = new Map(publishedPublications.map((p) => [p.title, p]));

const articles: Card[] = [
  ...staticArticles.map((a) => {
    const pub = byTitle.get(a.title);
    return pub
      ? { cat: pub.category, title: pub.title, read: pub.readTime ?? a.read, slug: pub.slug }
      : a;
  }),
  ...publishedPublications
    .filter((p) => !staticArticles.some((a) => a.title === p.title))
    .map((p) => ({
      cat: p.category,
      title: p.title,
      read: p.readTime ?? "",
      slug: p.slug,
    })),
];

function HubPage() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = articles.filter(
    (a) =>
      (active === "All" || a.cat === active) &&
      (query === "" || a.title.toLowerCase().includes(query.toLowerCase())),
  );

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Industrial Hiring Intelligence"
        title="A knowledge institution for industrial hiring in North America."
        description="Atlas Notes, research, salary evidence and decision intelligence — written for international industrial leaders. Educational first. Institutional in tone."
      />

      {/* Search + filters */}
      <section className="border-b border-hairline bg-white">
        <div className="container-x py-8">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-3 rounded-[10px] border border-hairline bg-surface px-4 transition-colors focus-within:border-navy"
          >
            <img src={logoIcon.url} alt="" className="h-5 w-5 shrink-0 object-contain" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Search the Knowledge Hub…"
              className="w-full bg-transparent py-4 text-sm text-navy placeholder:text-ink-muted focus:outline-none"
            />
          </form>
          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-[10px] border px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] transition-colors ${
                  active === c
                    ? "border-navy bg-navy text-white"
                    : "border-hairline bg-white text-ink-muted hover:border-navy hover:text-navy"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured — Industrial Hiring Thesis */}
      <section className="py-20">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[10px] border border-hairline bg-navy text-white">
            <div className="grid gap-10 p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:p-16">
              <div>
                <p className="eyebrow text-turquoise">The Industrial Hiring Thesis</p>
                <h2 className="mt-4 text-3xl text-white md:text-4xl lg:text-[44px]">
                  A perspective on how industrial leaders should think about hiring in North
                  America.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
                  Written as a standing publication — updated as the market, the methodology and
                  the evidence evolve. Positioned for boards, MDs and international HR leaders.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to="/discovery-experience"
                    className="inline-flex items-center gap-2 rounded-[10px] bg-turquoise px-6 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-white"
                  >
                    Read the Thesis <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] w-full rounded-[10px] border border-white/15 bg-white/[0.04] p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-turquoise">
                    Sync Talent / Standing Publication
                  </p>
                  <p className="mt-6 font-display text-2xl text-white">
                    The Industrial Hiring Thesis
                  </p>
                  <p className="mt-2 text-sm text-white/60">Mexico · USA · Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="pb-20">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a) => {
              const cardClass =
                "group flex flex-col gap-5 rounded-[10px] border border-hairline bg-white p-7 transition-colors hover:border-navy";
              const inner = (
                <>
                  <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em]">
                    <span className="text-navy">{a.cat}</span>
                    <span className="text-ink-muted">{a.read}</span>
                  </div>
                  <h3 className="text-base leading-snug">{a.title}</h3>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-navy transition-colors group-hover:text-turquoise">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </>
              );
              return a.slug ? (
                <Link
                  key={a.title}
                  to="/knowledge-hub/$slug"
                  params={{ slug: a.slug }}
                  className={cardClass}
                >
                  {inner}
                </Link>
              ) : (
                <article key={a.title} className={cardClass}>
                  {inner}
                </article>
              );
            })}
          </div>
          {filtered.length === 0 && (
            <p className="mt-10 text-center text-sm text-ink-muted">
              No perspectives match this filter yet.
            </p>
          )}
        </div>
      </section>


      <CTABand secondaryText="" />
    </SiteLayout>
  );
}
