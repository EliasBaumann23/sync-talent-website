import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABand } from "@/components/site/CTA";
import { AtlasLine } from "@/components/site/AtlasLine";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/atlas-library/search-blueprint")({
  head: () => ({
    meta: [
      {
        title:
          "Search Blueprint™ — Atlas Library, Methodology Document 02 | Sync Talent",
      },
      {
        name: "description",
        content:
          "The Search Blueprint™ transforms a hiring request into a structured decision document that aligns every stakeholder before the Executive Search begins.",
      },
      {
        property: "og:title",
        content: "Search Blueprint™ — Atlas Library | Sync Talent",
      },
      {
        property: "og:description",
        content:
          "Methodology Document 02. Every successful Executive Search begins with a written hiring strategy.",
      },
      { property: "og:url", content: "/atlas-library/search-blueprint" },
    ],
    links: [{ rel: "canonical", href: "/atlas-library/search-blueprint" }],
  }),
  component: SearchBlueprintPage,
});

const problems = [
  "Success is not clearly defined.",
  "Stakeholders have different expectations.",
  "Market realities are misunderstood.",
  "Candidates are evaluated differently throughout the process.",
];

const discoveryToSearch = [
  "Discovery Experience™",
  "Business Understanding",
  "Market Intelligence",
  "Leadership Alignment",
  "Search Blueprint™",
  "Executive Search",
];

const blueprintCards = [
  {
    n: "01",
    title: "Business Context",
    body: "Why the position exists, the current business challenges and the strategic objectives the hire is expected to serve.",
  },
  {
    n: "02",
    title: "Success Definition",
    body: "What success should look like after six, twelve and twenty-four months — expressed in outcomes, not activities.",
  },
  {
    n: "03",
    title: "Market Position",
    body: "Target industries, target companies, competitive realities and the availability of the talent you are seeking.",
  },
  {
    n: "04",
    title: "Candidate Profile",
    body: "Technical expertise, leadership expectations, commercial capabilities and cultural fit with your organization.",
  },
  {
    n: "05",
    title: "Search Strategy",
    body: "Search geography, priority companies, alternative profiles and the compensation assumptions guiding the market approach.",
  },
  {
    n: "06",
    title: "Decision Criteria",
    body: "The measurable framework used throughout candidate evaluation and the Hiring Confidence Index™.",
  },
];

const atlasFlow = [
  "Discovery Experience™",
  "Search Blueprint™",
  "Executive Search",
  "Talent Lens™",
  "Hiring Confidence Index™",
  "Hiring Decision",
];

const deliverables = [
  "Executive Summary",
  "Business Objectives",
  "Success Definition",
  "Market Perspective",
  "Target Companies",
  "Candidate Definition",
  "Search Geography",
  "Compensation Assumptions",
  "Decision Criteria",
  "Hiring Risks",
  "Strategic Recommendations",
];

function FlowRow({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="grid gap-px overflow-hidden border border-hairline bg-hairline lg:grid-cols-6">
      {steps.map((s, i) => (
        <li
          key={s}
          className="flex flex-col justify-between gap-6 bg-white p-6"
        >
          <span className="font-display text-xs uppercase tracking-[0.18em] text-turquoise">
            Step {String(i + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-base leading-snug text-navy">
            {s}
          </span>
        </li>
      ))}
    </ol>
  );
}

function SearchBlueprintPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="border-b border-hairline bg-white">
        <div className="container-x pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">Atlas Library · Methodology Document 02</p>
              <h1 className="mt-5 text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                Every successful Executive Search begins with a written hiring
                strategy.
              </h1>
            </div>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-ink-muted lg:text-lg">
                Before speaking with candidates, we define the business
                decision, the market reality and the search strategy. The
                Search Blueprint™ transforms a hiring request into a structured
                decision document that aligns every stakeholder before the
                search begins.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/discovery-experience"
                  className="inline-flex items-center rounded-[10px] bg-navy px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-turquoise"
                >
                  Experience the Discovery Experience™
                </Link>
                <a
                  href="#example-blueprint"
                  className="inline-flex items-center rounded-[10px] border border-hairline px-6 py-3.5 text-sm font-medium text-navy transition-colors hover:border-navy"
                >
                  View Example Blueprint
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — THE PROBLEM */}
      <section className="py-32 lg:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div>
            <p className="eyebrow">Section 01 · The Problem</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Most Executive Searches begin too early.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-muted lg:text-lg">
            <p>
              Many organizations begin searching for candidates before they
              have fully defined the hiring decision itself.
            </p>
            <p>
              This often creates uncertainty later in the process because
              leadership teams may have different expectations regarding
              success, priorities or candidate profiles.
            </p>
            <p className="text-navy">
              The Search Blueprint™ exists to create clarity before execution
              begins.
            </p>
          </div>
        </div>

        <div className="container-x mt-16">
          <ul className="grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {problems.map((p, i) => (
              <li key={p} className="bg-white p-8">
                <p className="font-display text-xs uppercase tracking-[0.18em] text-turquoise">
                  0{i + 1}
                </p>
                <p className="mt-4 text-base leading-relaxed text-navy">{p}</p>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-16 max-w-3xl text-center">
            <p className="text-xl leading-snug text-navy md:text-2xl">
              Recruitment rarely fails because of sourcing.
            </p>
            <p className="mt-3 text-xl leading-snug text-ink-muted md:text-2xl">
              It fails because the hiring decision was never fully structured.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — FROM DISCOVERY TO SEARCH */}
      <section className="border-y border-hairline bg-surface py-32 lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Section 02 · From Discovery to Search</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              From conversation to blueprint.
            </h2>
          </div>


          <div className="mt-10">
            <FlowRow steps={discoveryToSearch} />
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-base text-ink-muted lg:text-lg">
            The Search Blueprint™ is the bridge between discovery and
            execution.
          </p>
        </div>
      </section>

      {/* SECTION 3 — WHAT IS INSIDE */}
      <section className="py-32 lg:py-40">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <div>
              <p className="eyebrow">Section 03 · Inside the Blueprint</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
                Every Search Blueprint™ answers the questions that matter
                most.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-ink-muted lg:text-lg">
              Each blueprint is organized around six sections. Together they
              describe the business decision, the market it lives in and the
              criteria against which every candidate will be evaluated.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {blueprintCards.map((c) => (
              <article key={c.n} className="bg-white p-8 lg:p-10">
                <p className="font-display text-4xl text-turquoise">{c.n}</p>
                <h3 className="mt-6 font-display text-xl text-navy">
                  {c.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — EXAMPLE BLUEPRINT */}
      <section
        id="example-blueprint"
        className="border-y border-hairline bg-surface py-32 lg:py-40"
      >
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Section 04 · Example</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              A blueprint before a search.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted lg:text-lg">
              An illustrative preview of the document your leadership team
              receives before the Executive Search begins.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="overflow-hidden rounded-[10px] border border-hairline bg-white shadow-[0_30px_80px_-40px_rgba(16,36,58,0.35)]">
              <div className="flex items-center justify-between border-b border-hairline bg-white px-8 py-5">
                <div>
                  <p className="font-display text-xs uppercase tracking-[0.18em] text-turquoise">
                    Sync Talent · Confidential
                  </p>
                  <p className="mt-1 font-display text-base text-navy">
                    Search Blueprint™ · Plant Manager, Bajío Region
                  </p>
                </div>
                <p className="text-xs text-ink-muted">Document 02 · v1.0</p>
              </div>

              <div className="grid gap-px bg-hairline md:grid-cols-2">
                {[
                  {
                    h: "Executive Summary",
                    lines: [
                      "New plant scaling from 180 to 420 FTE within 24 months.",
                      "Hiring decision is a proxy for regional operating strategy.",
                    ],
                    blur: false,
                  },
                  {
                    h: "Business Context",
                    lines: [
                      "European industrial group entering Mexican market.",
                      "First operating leadership hire in North America.",
                    ],
                    blur: false,
                  },
                  {
                    h: "Success Definition",
                    lines: [
                      "6 months — operational stabilization and safety baseline.",
                      "12 months — OEE ████ %, on-time delivery ████.",
                      "24 months — regional leadership bench of ██ managers.",
                    ],
                    blur: true,
                  },
                  {
                    h: "Market Overview",
                    lines: [
                      "Bajío corridor: ██ addressable operating leaders.",
                      "Cross-border experience concentrated in ██ companies.",
                    ],
                    blur: true,
                  },
                  {
                    h: "Target Companies",
                    lines: [
                      "Tier 1 — ██████, ██████, ██████.",
                      "Tier 2 — ██████, ██████.",
                      "Adjacent industries considered: ██████.",
                    ],
                    blur: true,
                  },
                  {
                    h: "Candidate Profile",
                    lines: [
                      "10+ years operating leadership in regulated manufacturing.",
                      "Fluency in Spanish and English; German preferred.",
                      "Demonstrated experience scaling greenfield sites.",
                    ],
                    blur: false,
                  },
                  {
                    h: "Search Geography",
                    lines: [
                      "Primary — Bajío, Monterrey, Mexico City.",
                      "Secondary — Southern US border states.",
                    ],
                    blur: false,
                  },
                  {
                    h: "Decision Criteria",
                    lines: [
                      "Operational depth · Leadership maturity.",
                      "Cross-cultural fluency · Strategic judgment.",
                      "Weighted into Hiring Confidence Index™.",
                    ],
                    blur: false,
                  },
                  {
                    h: "Compensation Strategy",
                    lines: [
                      "Base range: MXN ████–████ / annual.",
                      "Variable: ██% target, tied to safety and OEE.",
                      "LTI aligned to regional P&L milestones.",
                    ],
                    blur: true,
                  },
                ].map((sec) => (
                  <div key={sec.h} className="bg-white p-6 lg:p-8">
                    <p className="font-display text-[11px] uppercase tracking-[0.18em] text-turquoise">
                      {sec.h}
                    </p>
                    <ul
                      className={`mt-4 space-y-2 text-sm leading-relaxed text-ink ${
                        sec.blur ? "blur-[2px] select-none" : ""
                      }`}
                    >
                      {sec.lines.map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-hairline px-8 py-5 text-xs text-ink-muted">
                <span>Prepared for the hiring committee.</span>
                <span>Illustrative preview — details redacted.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY CLIENTS VALUE IT */}
      <section className="py-32 lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Section 05 · Value to Leadership</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Why leadership teams appreciate the Search Blueprint™.
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-3">
            {[
              {
                h: "Alignment",
                b: "The leadership team begins the search with one shared understanding instead of individual assumptions.",
              },
              {
                h: "Transparency",
                b: "Hiring decisions become easier to communicate internally because expectations are documented.",
              },
              {
                h: "Better Decisions",
                b: "Candidates are evaluated against predefined business objectives instead of changing expectations.",
              },
            ].map((c) => (
              <div key={c.h} className="bg-white p-10">
                <h3 className="font-display text-xl text-navy">{c.h}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {c.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — EVERY BLUEPRINT IS UNIQUE */}
      <section className="border-y border-hairline bg-surface py-32 lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Section 06 · Bespoke by Design</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Every hiring decision deserves its own blueprint.
            </h2>
          </div>

          <div className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-4">
            {[
              "Sales Director",
              "Plant Manager",
              "Automation Engineer",
              "Managing Director",
            ].map((r, i, arr) => (
              <div key={r} className="flex items-center gap-4">
                <span className="rounded-[10px] border border-hairline bg-white px-5 py-3 font-display text-sm text-navy">
                  {r}
                </span>
                {i < arr.length - 1 && (
                  <span className="font-display text-lg text-turquoise">≠</span>
                )}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-2xl space-y-3 text-center text-base leading-relaxed text-ink-muted lg:text-lg">
            <p>
              Every Search Blueprint™ is built specifically for one business
              decision.
            </p>
            <p>It is never reused. It is never generic.</p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — INSIDE THE ATLAS METHOD */}
      <section className="py-32 lg:py-40">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <div>
              <p className="eyebrow">Section 07 · Inside the Atlas Method™</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
                Where the Search Blueprint™ fits.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-ink-muted lg:text-lg">
              The Search Blueprint™ transforms understanding into a structured
              search strategy — the pivot point between what leadership has
              decided and how the market will be engaged.
            </p>
          </div>

          <AtlasLine
            nodes={6}
            active={1}
            className="mx-auto mt-16 max-w-4xl text-navy/60"
          />
          <div className="mt-10">
            <FlowRow steps={atlasFlow} />
          </div>
        </div>
      </section>

      {/* SECTION 8 — WHAT CLIENTS RECEIVE */}
      <section className="border-y border-hairline bg-surface py-32 lg:py-40">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <div>
              <p className="eyebrow">Section 08 · Deliverables</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
                Every Search Blueprint™ includes
              </h2>
            </div>
            <ul className="grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
              {deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-center gap-3 bg-white px-6 py-4"
                >
                  <Check className="h-4 w-4 shrink-0 text-turquoise" />
                  <span className="text-sm text-navy">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center text-base leading-relaxed text-ink-muted lg:text-lg">
            The Search Blueprint™ becomes the reference document for the
            entire Executive Search engagement.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTABand
        eyebrow="Atlas Library · Methodology Document 02"
        title="Great hiring decisions begin long before the first interview."
        text="The Search Blueprint™ creates clarity before the search begins, ensuring that every candidate is evaluated against the same business decision."
        buttonText="Experience the Discovery Experience™"
        secondaryText="Continue to the Talent Lens™"
        to="/contact"
        secondaryTo="/atlas-library/talent-lens"
      />
    </SiteLayout>
  );
}
