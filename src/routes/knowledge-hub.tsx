import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTABand } from "@/components/site/CTA";
import { ArrowRight, Search } from "lucide-react";

export const Route = createFileRoute("/knowledge-hub")({
  head: () => ({
    meta: [
      { title: "Knowledge Hub — Industrial Hiring in Mexico | Sync Talent" },
      {
        name: "description",
        content:
          "Salary guides, hiring guides, market reports and industry insights on industrial recruitment and executive search in Mexico.",
      },
      { property: "og:title", content: "Knowledge Hub — Sync Talent" },
      { property: "og:description", content: "The Knowledge Hub for industrial hiring in Mexico." },
      { property: "og:url", content: "/knowledge-hub" },
    ],
    links: [{ rel: "canonical", href: "/knowledge-hub" }],
  }),
  component: HubPage,
});

const categories = [
  "All",
  "Salary Guides",
  "Hiring Guides",
  "Market Reports",
  "Industry Insights",
  "Executive Search",
  "Mexico Expansion",
];

const articles = [
  {
    cat: "Salary Guides",
    title: "Sales Engineer Salary in Mexico: What International Companies Should Know",
    read: "6 min read",
  },
  {
    cat: "Hiring Guides",
    title: "How Long Does it Take to Hire Engineers in Mexico?",
    read: "5 min read",
  },
  {
    cat: "Hiring Guides",
    title: "Hiring Field Service Engineers in Mexico: Common Mistakes",
    read: "7 min read",
  },
  {
    cat: "Executive Search",
    title: "Executive Search in Mexico for German Industrial Companies",
    read: "8 min read",
  },
  {
    cat: "Market Reports",
    title: "Q2 Industrial Talent Report: Demand, Notice Periods and Compensation",
    read: "9 min read",
  },
  {
    cat: "Industry Insights",
    title: "Automation Hiring Trends Across the Bajío Corridor",
    read: "6 min read",
  },
  {
    cat: "Mexico Expansion",
    title: "First Hires Playbook: From Country Manager to Plant Leadership",
    read: "10 min read",
  },
  {
    cat: "Salary Guides",
    title: "Service Manager Compensation Benchmarks — Industrial Machinery",
    read: "5 min read",
  },
  {
    cat: "Industry Insights",
    title: "Hiring Bilingual Talent for OEM After-Sales Operations",
    read: "7 min read",
  },
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
        eyebrow="Knowledge Hub"
        title="A knowledge hub for industrial hiring in Mexico."
        description="Practical, research-backed content on salaries, hiring timelines, candidate availability and executive search — written for international leaders."
      />

      {/* Search + filters */}
      <section className="border-b border-hairline bg-white">
        <div className="container-x py-8">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-3 rounded-sm border border-hairline bg-surface px-4 transition-colors focus-within:border-turquoise"
          >
            <Search className="h-4 w-4 text-ink-muted" />
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
                className={`rounded-sm border px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] transition-colors ${
                  active === c
                    ? "border-turquoise bg-turquoise text-navy"
                    : "border-hairline bg-white text-ink-muted hover:border-turquoise hover:text-navy"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-sm border border-hairline bg-navy text-white">
            <div className="grid gap-10 p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:p-16">
              <div>
                <p className="eyebrow text-turquoise">Featured Report</p>
                <h2 className="mt-4 text-3xl text-white md:text-4xl lg:text-[44px]">
                  Mexico Industrial Hiring Guide 2026
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
                  Salaries, hiring timelines, candidate availability and benchmark interview
                  processes across packaging, automation, machinery and industrial software.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-sm bg-turquoise px-6 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-white"
                  >
                    Download the Guide <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] w-full rounded-sm border border-white/15 bg-gradient-to-br from-white/10 to-turquoise/20 p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-turquoise">
                    Sync Talent / 2026
                  </p>
                  <p className="mt-6 font-display text-2xl text-white">Industrial Hiring Guide</p>
                  <p className="mt-2 text-sm text-white/60">Mexico · North America</p>
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
            {filtered.map((a) => (
              <article
                key={a.title}
                className="group flex flex-col gap-5 rounded-sm border border-hairline bg-white p-7 transition-colors hover:border-turquoise"
              >
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em]">
                  <span className="text-turquoise">{a.cat}</span>
                  <span className="text-ink-muted">{a.read}</span>
                </div>
                <h3 className="text-base leading-snug">{a.title}</h3>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-navy transition-colors group-hover:text-turquoise">
                  Read article <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="mt-10 text-center text-sm text-ink-muted">
              No articles match this filter yet.
            </p>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-x pb-24">
        <div className="rounded-sm border border-hairline bg-surface p-10 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow">Newsletter</p>
              <h2 className="mt-4 text-3xl md:text-4xl">Industrial Hiring Brief</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
                Monthly insights on salaries, hiring timelines, candidate availability and
                industrial recruitment trends in Mexico.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
              <input
                type="email"
                required
                placeholder="Work email"
                className="rounded-sm border border-hairline bg-white px-4 py-3.5 text-sm text-navy placeholder:text-ink-muted focus:border-turquoise focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-sm bg-navy px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-turquoise"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <CTABand />
    </SiteLayout>
  );
}
