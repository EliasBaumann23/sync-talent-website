import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AtlasDivider } from "@/components/site/AtlasLine";
import { ArrowRight } from "lucide-react";
import featureImg from "@/assets/ind-manufacturing.jpg";

export const Route = createFileRoute("/atlas-library/atlas-notes")({
  head: () => ({
    meta: [
      { title: "Atlas Notes — Institutional Perspectives | Sync Talent" },
      {
        name: "description",
        content:
          "Atlas Notes is Sync Talent's collection of institutional perspectives on Executive Search, industrial leadership and strategic hiring decisions.",
      },
      { property: "og:title", content: "Atlas Notes — Institutional Perspectives" },
      {
        property: "og:description",
        content:
          "Editorial publications on Executive Search, industrial hiring and leadership decisions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/atlas-library/atlas-notes" },
    ],
    links: [{ rel: "canonical", href: "/atlas-library/atlas-notes" }],
  }),
  component: AtlasNotesPage,
});

const notes = [
  {
    cat: "Executive Search",
    title: "Why Executive Search starts too late.",
    summary:
      "Most searches begin once a role is approved. The decisive work — defining what the organization actually needs — has usually already been skipped.",
    read: "7 min read",
    date: "July 2026",
  },
  {
    cat: "Market Intelligence",
    title: "Every interview creates market intelligence.",
    summary:
      "Each conversation reveals compensation expectations, mobility and motivation. Most firms discard that evidence the moment a search closes.",
    read: "6 min read",
    date: "July 2026",
  },
  {
    cat: "Decision Making",
    title: "The myth of the perfect candidate.",
    summary:
      "Perfection is rarely the constraint. Alignment on what matters most, and what can be developed, usually is.",
    read: "5 min read",
    date: "June 2026",
  },
  {
    cat: "Market Intelligence",
    title: "Why salary benchmarks rarely tell the full story.",
    summary:
      "Benchmarks describe averages. Hiring decisions are made against specific roles, specific regions and specific alternatives.",
    read: "8 min read",
    date: "June 2026",
  },
  {
    cat: "Decision Making",
    title: "Hiring decisions are business decisions.",
    summary:
      "A hire is a capital allocation with a multi-year horizon. It deserves the same reasoning applied to any other investment.",
    read: "6 min read",
    date: "June 2026",
  },
  {
    cat: "Industrial Hiring",
    title: "Technical expertise is not enough.",
    summary:
      "Industrial leadership requires judgement under constraint. Technical depth explains only part of the outcome.",
    read: "5 min read",
    date: "May 2026",
  },
  {
    cat: "Leadership",
    title: "Leadership alignment before candidate alignment.",
    summary:
      "When decision makers disagree quietly, the search absorbs the disagreement. Alignment is cheaper before the first interview.",
    read: "7 min read",
    date: "May 2026",
  },
  {
    cat: "Executive Search",
    title: "The Discovery Experience changes the search.",
    summary:
      "A structured conversation before the search reframes the brief, the market approach and the criteria for a decision.",
    read: "6 min read",
    date: "April 2026",
  },
  {
    cat: "Executive Search",
    title: "Search begins with understanding.",
    summary:
      "Understanding the business problem precedes understanding the profile. Reversing that order produces long searches.",
    read: "5 min read",
    date: "April 2026",
  },
  {
    cat: "North America",
    title: "The future of industrial hiring.",
    summary:
      "Nearshoring, automation and generational change are reshaping where industrial leadership will be found in North America.",
    read: "9 min read",
    date: "March 2026",
  },
];

const topics = [
  "All",
  "Executive Search",
  "Industrial Hiring",
  "Leadership",
  "Market Intelligence",
  "Decision Making",
  "Mexico",
  "North America",
  "Automation",
  "Manufacturing",
  "International Expansion",
];

const principles = [
  {
    title: "Observation",
    body: "Every article begins with a real market observation.",
  },
  {
    title: "Evidence",
    body: "Arguments are supported by practical experience and market understanding.",
  },
  { title: "Clarity", body: "Complex ideas are explained simply." },
  {
    title: "Relevance",
    body: "Every publication should help leaders make better decisions.",
  },
  {
    title: "Institutional Learning",
    body: "Every publication contributes to the long-term knowledge of Atlas.",
  },
];

const related = [
  {
    title: "Market Reports",
    body: "Periodic readings of demand, availability and notice periods across industrial North America.",
    to: "/knowledge-hub",
  },
  {
    title: "Salary Intelligence",
    body: "Compensation evidence for technical and commercial roles in Mexico, the US and Canada.",
    to: "/salary-guides",
  },
  {
    title: "Hiring Guides",
    body: "Practical playbooks for structuring searches, interviews and hiring timelines.",
    to: "/hiring-guides",
  },
  {
    title: "Atlas Method™",
    body: "The methodology behind every Sync Talent engagement, documented end to end.",
    to: "/atlas-method",
  },
  {
    title: "Discovery Experience™",
    body: "The structured conversation that defines the hiring decision before a search begins.",
    to: "/discovery-experience",
  },
] as const;

function AtlasNotesPage() {
  const [topic, setTopic] = useState("All");
  const filtered = notes.filter((n) => topic === "All" || n.cat === topic);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="border-b border-hairline bg-white">
        <div className="container-x pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">Knowledge Hub</p>
              <h1 className="mt-5 text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                Ideas that challenge how organizations think about hiring.
              </h1>
            </div>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-ink-muted lg:text-lg">
                Atlas Notes is our collection of institutional perspectives on Executive
                Search, industrial leadership and strategic hiring decisions. Every
                publication begins with one observation. Every observation aims to improve
                the quality of hiring decisions.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#featured-note"
                  className="inline-flex items-center rounded-[10px] bg-navy px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-turquoise hover:text-navy"
                >
                  Read the Latest Note
                </a>
                <Link
                  to="/knowledge-hub"
                  className="inline-flex items-center rounded-[10px] border border-hairline px-6 py-3.5 text-sm font-medium text-navy transition-colors hover:border-navy"
                >
                  Explore Market Reports
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — FEATURED NOTE */}
      <section id="featured-note" className="py-32 lg:py-40">
        <div className="container-x">
          <p className="eyebrow">Featured Note</p>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div className="overflow-hidden rounded-[10px] border border-hairline">
              <img
                src={featureImg}
                alt="Industrial manufacturing floor in North America"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.16em]">
                <span className="text-navy">Executive Search</span>
                <span className="text-ink-muted">7 min read</span>
                <span className="text-ink-muted">July 2026</span>
              </div>
              <h2 className="mt-5 text-3xl leading-tight md:text-4xl lg:text-[44px]">
                Why Executive Search starts too late.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted lg:text-lg">
                By the time a search is commissioned, most of the decisive thinking has
                already happened — often informally, and often without agreement. This note
                examines what organizations lose when the search begins after the decision
                has been assumed, and what changes when understanding comes first.
              </p>
              <Link
                to="/discovery-experience"
                className="mt-8 inline-flex items-center gap-2 rounded-[10px] bg-navy px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-turquoise hover:text-navy"
              >
                Read Atlas Note <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — EXPLORE BY TOPIC (filters above the grid) */}
      <section className="border-y border-hairline bg-surface py-32 lg:py-40">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-end">
            <div>
              <p className="eyebrow">Explore by Topic</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
                Browse perspectives by topic.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {topics.map((t) => (
                <button
                  key={t}
                  onClick={() => setTopic(t)}
                  className={`rounded-[10px] border px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] transition-colors ${
                    topic === t
                      ? "border-navy bg-navy text-white"
                      : "border-hairline bg-white text-ink-muted hover:border-navy hover:text-navy"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* SECTION 2 — LATEST PUBLICATIONS */}
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl">Latest Atlas Notes</h3>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((n) => (
                <article
                  key={n.title}
                  className="group flex flex-col gap-5 rounded-[10px] border border-hairline bg-white p-7 transition-colors hover:border-navy"
                >
                  <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em]">
                    <span className="text-navy">{n.cat}</span>
                    <span className="text-ink-muted">{n.date}</span>
                  </div>
                  <h4 className="text-base leading-snug">{n.title}</h4>
                  <p className="text-sm leading-relaxed text-ink-muted">{n.summary}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-[12px] uppercase tracking-[0.14em] text-ink-muted">
                      {n.read}
                    </span>
                    <ArrowRight className="h-4 w-4 text-navy transition-colors group-hover:text-turquoise" />
                  </div>
                </article>
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="mt-12 text-center text-sm text-ink-muted">
                No perspectives published under this topic yet.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 4 — WRITING PHILOSOPHY */}
      <section className="py-32 lg:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div>
            <p className="eyebrow">Writing Philosophy</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Why Atlas Notes exist.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-muted lg:text-lg">
            <p>
              We believe Executive Search should contribute more than placements.
            </p>
            <p>
              Every search teaches us something about organizations, industries and
              leadership.
            </p>
            <p>
              Atlas Notes transform those observations into ideas that help organizations
              make better hiring decisions.
            </p>
            <p className="text-navy">
              The objective is not to publish more content. The objective is to publish
              better thinking.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — EDITORIAL PRINCIPLES */}
      <section className="border-y border-hairline bg-surface py-32 lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Editorial Principles</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Every Atlas Note follows five principles.
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {principles.map((p, i) => (
              <article
                key={p.title}
                className="flex flex-col rounded-[10px] border border-hairline bg-white p-7"
              >
                <p className="font-display text-xs uppercase tracking-[0.18em] text-turquoise">
                  0{i + 1}
                </p>
                <h3 className="mt-4 text-lg leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — RELATED PUBLICATIONS */}
      <section className="border-t border-hairline py-32 lg:py-40">
        <div className="container-x">
          <p className="eyebrow">Related Publications</p>
          <h2 className="mt-4 text-3xl leading-tight md:text-4xl">Continue exploring.</h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.title}
                to={r.to}
                className="group flex flex-col gap-4 rounded-[10px] border border-hairline bg-white p-8 transition-colors hover:border-turquoise"
              >
                <h3 className="text-xl leading-snug">{r.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{r.body}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-navy transition-colors group-hover:text-turquoise">
                  Open <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy text-white">
        <div className="container-x py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-turquoise">Atlas Notes</p>
            <h2 className="mt-5 text-3xl leading-[1.1] text-white md:text-4xl lg:text-5xl">
              Great organizations are built through better decisions.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
              Explore the ideas, observations and market perspectives that shape the Atlas
              Method and every Executive Search engagement.
            </p>
            <AtlasDivider className="mt-10 text-white" />
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/knowledge-hub"
                className="inline-flex items-center rounded-[10px] bg-turquoise px-7 py-4 text-sm font-medium text-navy transition-colors hover:bg-white"
              >
                Explore Market Reports
              </Link>
              <Link
                to="/discovery-experience"
                className="inline-flex items-center rounded-[10px] border border-white/30 px-7 py-4 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/5"
              >
                Experience the Discovery Experience™
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
