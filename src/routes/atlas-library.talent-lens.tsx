import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABand } from "@/components/site/CTA";
import { AtlasLine } from "@/components/site/AtlasLine";
import { Check } from "lucide-react";

export const Route = createFileRoute("/atlas-library/talent-lens")({
  head: () => ({
    meta: [
      {
        title:
          "Talent Lens™ — Atlas Library, Methodology Document 03 | Sync Talent",
      },
      {
        name: "description",
        content:
          "The Talent Lens™ is a structured decision framework that replaces subjective impressions with evidence, ensuring every candidate is evaluated against the same business objectives.",
      },
      {
        property: "og:title",
        content: "Talent Lens™ — Atlas Library | Sync Talent",
      },
      {
        property: "og:description",
        content:
          "Methodology Document 03. Every candidate deserves to be evaluated against the same decision.",
      },
      { property: "og:url", content: "/atlas-library/talent-lens" },
    ],
    links: [{ rel: "canonical", href: "/atlas-library/talent-lens" }],
  }),
  component: TalentLensPage,
});

const problems = [
  "Different interviewers prioritize different qualities",
  "Opinions replace evidence",
  "Evaluation criteria change during the search",
  "Final decisions become difficult to defend",
];

const comparison = {
  traditional: ["First Impression", "Personal Opinion", "General Discussion", "Recommendation"],
  talentLens: ["Structured Observation", "Evidence", "Business Context", "Decision Support"],
};

const evidenceCards = [
  {
    title: "Behavior",
    body: "Observable examples from previous experience.",
  },
  {
    title: "Achievements",
    body: "Measurable business outcomes and results.",
  },
  {
    title: "Decision Making",
    body: "Examples of judgement under real business conditions.",
  },
  {
    title: "Market Context",
    body: "Comparison against similar candidates and current market realities.",
  },
];

const reportSections = [
  { title: "Executive Summary", blur: false },
  { title: "Technical Assessment", blur: false },
  { title: "Commercial Assessment", blur: true },
  { title: "Leadership Assessment", blur: true },
  { title: "International Perspective", blur: true },
  { title: "Strengths", blur: false },
  { title: "Potential Risks", blur: true },
  { title: "Open Questions", blur: false },
  { title: "Overall Recommendation", blur: true },
];

const whyItMatters = [
  {
    title: "Objectivity",
    body: "Every candidate is evaluated against the same framework.",
  },
  {
    title: "Transparency",
    body: "Leadership teams understand why recommendations are made.",
  },
  {
    title: "Confidence",
    body: "Hiring decisions become easier to explain internally because they are supported by structured observations.",
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

const principles = [
  {
    title: "Consistency",
    body: "Every candidate is measured against the same criteria.",
  },
  {
    title: "Evidence",
    body: "Observations are supported by examples.",
  },
  {
    title: "Business Relevance",
    body: "Evaluation is connected to the hiring decision, not generic competencies.",
  },
  {
    title: "Transparency",
    body: "Clients understand how recommendations are reached.",
  },
  {
    title: "Continuous Learning",
    body: "Every interview strengthens future evaluations by expanding institutional market intelligence.",
  },
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

function DimensionsDiagram() {
  return (
    <div className="mx-auto mt-16 max-w-5xl">
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:items-center lg:gap-0">
        {/* Technical Fluency */}
        <article className="rounded-[10px] border border-hairline bg-white p-8 lg:p-10">
          <h3 className="font-display text-xl text-navy">Technical Fluency</h3>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            Can this person solve the technical challenges of the role?
          </p>
        </article>

        {/* Vertical connector on desktop */}
        <div className="hidden lg:flex lg:items-center lg:justify-center">
          <div className="h-px w-16 bg-hairline" />
        </div>

        {/* Commercial Judgement */}
        <article className="rounded-[10px] border border-hairline bg-white p-8 lg:p-10">
          <h3 className="font-display text-xl text-navy">Commercial Judgement</h3>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            Can they create business value beyond technical expertise?
          </p>
        </article>

        {/* Horizontal connector on desktop */}
        <div className="hidden lg:flex lg:items-center lg:justify-end lg:pr-8">
          <div className="h-px w-16 bg-hairline" />
        </div>

        {/* Center: Hiring Decision */}
        <div className="flex items-center justify-center py-8 lg:py-0">
          <div className="flex h-36 w-36 items-center justify-center rounded-full border border-hairline bg-white shadow-[0_20px_60px_-30px_rgba(16,36,58,0.25)] md:h-40 md:w-40">
            <span className="text-center font-display text-sm font-semibold leading-tight text-navy">
              Hiring
              <br />
              Decision
            </span>
          </div>
        </div>

        {/* Horizontal connector on desktop */}
        <div className="hidden lg:flex lg:items-center lg:justify-start lg:pl-8">
          <div className="h-px w-16 bg-hairline" />
        </div>

        {/* Leadership Impact */}
        <article className="rounded-[10px] border border-hairline bg-white p-8 lg:p-10">
          <h3 className="font-display text-xl text-navy">Leadership Impact</h3>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            Can they influence people, projects and organizational outcomes?
          </p>
        </article>

        {/* Vertical connector on desktop */}
        <div className="hidden lg:flex lg:items-center lg:justify-center">
          <div className="h-px w-16 bg-hairline" />
        </div>

        {/* International Mindset */}
        <article className="rounded-[10px] border border-hairline bg-white p-8 lg:p-10">
          <h3 className="font-display text-xl text-navy">International Mindset</h3>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            Can they operate successfully across cultures, organizations and international stakeholders?
          </p>
        </article>
      </div>
    </div>
  );
}

function TalentLensPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="border-b border-hairline bg-white">
        <div className="container-x pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">Atlas Library · Methodology Document 03</p>
              <h1 className="mt-5 text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                Every candidate deserves to be evaluated against the same decision.
              </h1>
            </div>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-ink-muted lg:text-lg">
                The Talent Lens™ replaces subjective impressions with structured evidence. It ensures every candidate is assessed against the same business objectives, creating consistency, transparency and confidence throughout the Executive Search process.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/atlas-library/hiring-confidence-index"
                  className="inline-flex items-center rounded-[10px] bg-navy px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-turquoise"
                >
                  Explore the Hiring Confidence Index™
                </Link>
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
              Most hiring decisions are more subjective than organizations realize.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-muted lg:text-lg">
            <p>
              Two interviewers often leave the same meeting with different opinions.
            </p>
            <p>
              Not because one of them is wrong. But because each person unconsciously evaluates different characteristics.
            </p>
            <p>
              Without a common evaluation framework, candidates are compared using different standards throughout the process. The result is inconsistent hiring decisions.
            </p>
            <p className="text-navy">
              Better hiring decisions require a common evaluation language.
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
        </div>
      </section>

      {/* SECTION 2 — FROM IMPRESSIONS TO EVIDENCE */}
      <section className="border-y border-hairline bg-surface py-32 lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Section 02 · From Impressions to Evidence</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Replacing impressions with structured observations.
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
            {/* Traditional Interviews */}
            <div className="rounded-[10px] border border-hairline bg-white p-8 lg:p-10">
              <p className="font-display text-xs uppercase tracking-[0.18em] text-ink-muted">
                Traditional Interviews
              </p>
              <ol className="mt-8 space-y-5">
                {comparison.traditional.map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-hairline" />
                    <span className="text-base text-navy">{item}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 flex items-center justify-center">
                <span className="text-2xl text-hairline">↓</span>
              </div>
              <p className="mt-6 text-center text-sm text-ink-muted">
                Recommendation
              </p>
            </div>

            {/* Talent Lens™ */}
            <div className="rounded-[10px] border border-hairline bg-navy p-8 text-white lg:p-10">
              <p className="font-display text-xs uppercase tracking-[0.18em] text-turquoise">
                Talent Lens™
              </p>
              <ol className="mt-8 space-y-5">
                {comparison.talentLens.map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-turquoise" />
                    <span className="text-base text-white">{item}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 flex items-center justify-center">
                <span className="text-2xl text-turquoise">↓</span>
              </div>
              <p className="mt-6 text-center text-sm text-white/80">
                Decision Support
              </p>
            </div>
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center text-base text-ink-muted lg:text-lg">
            The Talent Lens™ creates consistency across every interview and every evaluator.
          </p>
        </div>
      </section>

      {/* SECTION 3 — THE FOUR DIMENSIONS */}
      <section className="py-32 lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Section 03 · The Four Dimensions</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Every candidate is evaluated through four complementary dimensions.
            </h2>
          </div>

          <DimensionsDiagram />
        </div>
      </section>

      {/* SECTION 4 — WHAT EVIDENCE LOOKS LIKE */}
      <section className="border-y border-hairline bg-surface py-32 lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Section 04 · What Evidence Looks Like</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Every evaluation is built on evidence.
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {evidenceCards.map((c) => (
              <article key={c.title} className="bg-white p-8 lg:p-10">
                <h3 className="font-display text-xl text-navy">{c.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {c.body}
                </p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center text-base text-ink-muted lg:text-lg">
            Evidence replaces intuition without eliminating professional judgement.
          </p>
        </div>
      </section>

      {/* SECTION 5 — THE TALENT LENS REPORT */}
      <section className="py-32 lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Section 05 · The Talent Lens Report</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              What clients receive.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted lg:text-lg">
              A structured executive assessment that transforms interview observations into decision-ready intelligence.
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
                    Talent Lens™ Assessment · Operations Director, North America
                  </p>
                </div>
                <p className="text-xs text-ink-muted">Document 03 · v1.0</p>
              </div>

              <div className="grid gap-px bg-hairline md:grid-cols-2 lg:grid-cols-3">
                {reportSections.map((sec) => (
                  <div key={sec.title} className="bg-white p-6 lg:p-8">
                    <p className="font-display text-[11px] uppercase tracking-[0.18em] text-turquoise">
                      {sec.title}
                    </p>
                    <ul
                      className={`mt-4 space-y-2 text-sm leading-relaxed text-ink ${
                        sec.blur ? "blur-[2px] select-none" : ""
                      }`}
                    >
                      <li>• {sec.title} content prepared for the hiring committee.</li>
                      <li>• Supporting evidence and observations included.</li>
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

      {/* SECTION 6 — WHY IT MATTERS */}
      <section className="border-y border-hairline bg-surface py-32 lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Section 06 · Why It Matters</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Consistency creates better hiring decisions.
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-3">
            {whyItMatters.map((c) => (
              <div key={c.title} className="bg-white p-10">
                <h3 className="font-display text-xl text-navy">{c.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — INSIDE THE ATLAS METHOD */}
      <section className="py-32 lg:py-40">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <div>
              <p className="eyebrow">Section 07 · Inside the Atlas Method</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
                Where the Talent Lens™ fits.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-ink-muted lg:text-lg">
              The Talent Lens™ transforms interview observations into structured decision evidence.
            </p>
          </div>

          <AtlasLine
            nodes={6}
            active={4}
            className="mx-auto mt-16 max-w-4xl text-navy/60"
          />
          <div className="mt-10">
            <FlowRow steps={atlasFlow} />
          </div>
        </div>
      </section>

      {/* SECTION 8 — THE PRINCIPLES */}
      <section className="border-y border-hairline bg-surface py-32 lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Section 08 · The Principles of Talent Lens™</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Five principles guide every evaluation.
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-5">
            {principles.map((p, i) => (
              <article key={p.title} className="bg-white p-8 lg:p-10">
                <p className="font-display text-4xl text-turquoise">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 font-display text-xl text-navy">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {p.body}
                </p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center text-base leading-relaxed text-ink-muted lg:text-lg">
            The Talent Lens™ is not an interview scorecard. It is a business decision framework.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTABand
        eyebrow="Atlas Library · Methodology Document 03"
        title="Hiring decisions improve when every candidate is evaluated through the same lens."
        text="The Talent Lens™ transforms interviews into structured decision evidence, helping leadership teams compare candidates with greater confidence and clarity."
        buttonText="Contact us"
        secondaryText={"Continue to the\u00a0\nHiring Confidence Index™"}
        to="/contact"
        secondaryTo="/atlas-library/hiring-confidence-index"
      />
    </SiteLayout>
  );
}
