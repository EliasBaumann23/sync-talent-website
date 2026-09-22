import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CTABand } from "@/components/site/CTA";
import { SiteLayout } from "@/components/site/SiteLayout";

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

const CALENDAR_URL = "https://calendar.app.google/KoYen9KgR1fkMTPP7";

const dimensions = [
  {
    n: "01",
    title: "Technical & Functional Capability",
    body: "Evidence that the candidate can handle the core responsibilities and functional challenges of the role.",
  },
  {
    n: "02",
    title: "Business & Leadership Judgement",
    body: "Evidence of how the candidate reasons, prioritizes, makes decisions, influences others and connects their work to business outcomes.",
  },
  {
    n: "03",
    title: "Organizational & Contextual Fit",
    body: "Evidence of whether the candidate can succeed within the specific organization, market, operating environment and leadership context.",
  },
  {
    n: "04",
    title: "Motivation & Trajectory",
    body: "Evidence of why the opportunity makes sense now, what motivates the candidate and how the role fits their professional direction.",
  },
] as const;

const snapshot = [
  {
    label: "Background",
    text: "12+ years in industrial service and technical operations within international machinery and automation environments.",
  },
  {
    label: "Current Scope",
    text: "Leads a field-service team supporting industrial customers across multiple locations in Mexico.",
  },
  { label: "Languages", text: "Spanish and English." },
  {
    label: "Relevant Exposure",
    text: "Technical service leadership, customer escalation, field operations, team development and international stakeholder collaboration.",
  },
] as const;

const assessments = [
  {
    n: "01",
    title: "Technical & Functional Capability",
    evidence: [
      "More than a decade in industrial service and technical operations.",
      "Direct leadership of field-service activities.",
      "Experience coordinating technical teams across customer locations.",
      "Exposure to service planning, customer escalation and operational execution.",
    ],
    suggests:
      "Strong evidence of direct relevance to the functional demands of the role.",
    question:
      "How much experience does the candidate have redesigning service processes rather than operating within an established structure?",
  },
  {
    n: "02",
    title: "Business & Leadership Judgement",
    evidence: [
      "Current responsibility for a technical service team.",
      "Regular prioritization of field resources across customer requirements.",
      "Direct involvement in escalations and customer-facing decisions.",
      "Experience collaborating with international management.",
    ],
    suggests:
      "Relevant leadership evidence, particularly in operational prioritization and customer-facing decision making.",
    question:
      "How has the candidate translated operational improvements into measurable business or customer outcomes?",
  },
  {
    n: "03",
    title: "Organizational & Contextual Fit",
    evidence: [
      "Experience within international industrial organizations.",
      "Familiarity with matrix collaboration and cross-border stakeholders.",
      "Customer-facing experience across industrial environments in Mexico.",
      "Experience operating across multiple locations.",
    ],
    suggests:
      "The candidate's operating context appears broadly aligned with the environment defined in the Search Blueprint.",
    question:
      "How effectively would the candidate adapt from an established service structure to an organization requiring greater process development and change?",
  },
  {
    n: "04",
    title: "Motivation & Trajectory",
    evidence: [
      "Current career progression has moved from technical execution toward broader service leadership.",
      "The opportunity would expand responsibility for organizational development and service performance.",
      "Candidate expresses interest in broader leadership responsibility.",
    ],
    suggests:
      "The opportunity appears directionally consistent with the candidate's progression toward broader operational leadership.",
    question:
      "Is the motivation primarily driven by increased responsibility, or are compensation and title the dominant factors?",
  },
] as const;

const evidenceView = [
  {
    title: "Strongest Evidence",
    items: [
      "Industrial service leadership",
      "Field operations",
      "Customer-facing responsibility",
      "International organizational exposure",
    ],
  },
  {
    title: "Remaining Uncertainty",
    items: [
      "Depth of process-transformation experience",
      "Evidence connecting service improvements to business outcomes",
      "Motivation for the specific opportunity",
    ],
  },
  {
    title: "What to Validate Next",
    items: [
      "Concrete example of redesigning or improving a service process",
      "Business impact of a significant operational decision",
      "Motivation and expectations around the next career step",
    ],
  },
] as const;

function EvidenceList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span className="mt-2 h-px w-3 shrink-0 bg-turquoise" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TalentLensPage() {
  return (
    <SiteLayout>
      {/* 01 — Hero */}
      <section className="border-b border-hairline bg-white">
        <div className="container-x pt-20 pb-16 lg:pt-28 lg:pb-24">
          <p className="eyebrow">Talent Lens™</p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            See the evidence behind the résumé.
          </h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <p className="max-w-2xl text-base leading-relaxed text-ink-muted lg:text-lg">
              The Talent Lens structures the evidence behind a candidate against
              the requirements, context and success criteria defined for the
              search.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-ink-muted lg:text-lg">
              Instead of reducing a person to a score or résumé summary, it makes
              relevant experience, strengths, risks and open questions easier to
              examine before a hiring decision is made.
            </p>
          </div>
          <div className="mt-10">
            <Link
              to="/atlas-method"
              className="group inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-navy"
            >
              Stage 04 of the Atlas Method
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 02 — Four Evidence Dimensions */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="eyebrow">Four Evidence Dimensions</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Four dimensions. One hiring context.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted lg:text-lg">
              Every Talent Lens uses the same four dimensions, but the evidence
              that matters within them depends on the specific role and
              organization.
            </p>
          </div>
          <div className="mt-14 divide-y divide-hairline border-y border-hairline">
            {dimensions.map((dimension) => (
              <div
                key={dimension.n}
                className="grid gap-3 py-7 md:grid-cols-[64px_320px_1fr] md:items-baseline lg:py-8"
              >
                <p className="font-display text-sm text-turquoise">
                  {dimension.n}
                </p>
                <h3 className="font-display text-lg leading-snug text-navy md:text-xl">
                  {dimension.title}
                </h3>
                <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
                  {dimension.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Inside a Talent Lens */}
      <section className="border-y border-hairline bg-surface py-24 lg:py-32">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="eyebrow">Inside a Talent Lens</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              What this looks like in practice.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted lg:text-lg">
              The Talent Lens brings together relevant evidence, areas of
              strength, potential risks and questions that still need to be
              resolved.
            </p>
          </div>

          <article className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-[10px] border border-hairline bg-white shadow-[0_30px_80px_-40px_rgba(16,36,58,0.35)]">
            <header className="border-b border-hairline px-6 py-6 lg:px-8">
              <p className="font-display text-xs uppercase tracking-[0.18em] text-turquoise">
                Illustrative Assessment
              </p>
              <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="font-display text-xl text-navy">
                  Head of Service — Mexico
                </h3>
                <p className="font-display text-sm text-ink-muted">Candidate A</p>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-ink-muted">
                Candidate and company details are fictionalized for demonstration
                purposes.
              </p>
            </header>

            <div className="border-b border-hairline px-6 py-7 lg:px-8 lg:py-9">
              <p className="font-display text-xs uppercase tracking-[0.18em] text-turquoise">
                Candidate Snapshot
              </p>
              <dl className="mt-6 grid gap-x-10 gap-y-6 md:grid-cols-2">
                {snapshot.map((item) => (
                  <div key={item.label}>
                    <dt className="font-display text-sm text-navy">{item.label}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {item.text}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <div className="border-b border-hairline px-6 py-5 lg:px-8">
                <p className="font-display text-xs uppercase tracking-[0.18em] text-turquoise">
                  Talent Lens Assessment
                </p>
              </div>
              {assessments.map((assessment) => (
                <section
                  key={assessment.n}
                  className="border-b border-hairline px-6 py-8 last:border-b-0 lg:px-8 lg:py-10"
                >
                  <div className="grid gap-3 md:grid-cols-[48px_1fr]">
                    <p className="font-display text-sm text-turquoise">
                      {assessment.n}
                    </p>
                    <h4 className="font-display text-xl leading-snug text-navy">
                      {assessment.title}
                    </h4>
                  </div>
                  <div className="mt-7 grid gap-7 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr] lg:gap-10 lg:pl-12">
                    <div>
                      <p className="font-display text-[11px] uppercase tracking-[0.18em] text-turquoise">
                        Evidence
                      </p>
                      <EvidenceList items={assessment.evidence} />
                    </div>
                    <div>
                      <p className="font-display text-[11px] uppercase tracking-[0.18em] text-turquoise">
                        What this suggests
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-ink">
                        {assessment.suggests}
                      </p>
                    </div>
                    <div className="md:col-span-2 lg:col-span-1">
                      <p className="font-display text-[11px] uppercase tracking-[0.18em] text-turquoise">
                        Open question
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-ink">
                        {assessment.question}
                      </p>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <section className="border-t border-hairline bg-surface px-6 py-8 lg:px-8 lg:py-10">
              <p className="eyebrow">Overall Evidence View</p>
              <h3 className="mt-3 font-display text-2xl text-navy">
                Evidence view
              </h3>
              <div className="mt-7 grid gap-8 md:grid-cols-3">
                {evidenceView.map((group) => (
                  <div key={group.title}>
                    <h4 className="font-display text-sm text-navy">
                      {group.title}
                    </h4>
                    <EvidenceList items={group.items} />
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>
      </section>

      {/* 04 — From Evidence to Decision */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="eyebrow">From Evidence to Decision</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Evidence first. Confidence second.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted lg:text-lg">
              The Talent Lens does not remove uncertainty. It makes the available
              evidence and remaining questions visible so that the next stage of
              the decision can focus on what still needs to be validated.
            </p>
          </div>

          <ol className="mt-14 flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-6">
            {[
              { label: "Search Blueprint", to: "/atlas-library/search-blueprint" },
              { label: "Search & Market Intelligence" },
              { label: "Talent Lens", current: true },
              {
                label: "Hiring Confidence",
                to: "/atlas-library/hiring-confidence-index",
              },
            ].map((step, index) => (
              <li
                key={step.label}
                className="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-6"
              >
                {step.current ? (
                  <p className="font-display text-xl text-navy md:text-2xl">
                    {step.label}
                    <span className="ml-3 align-middle font-display text-xs uppercase tracking-[0.18em] text-turquoise">
                      This page
                    </span>
                  </p>
                ) : step.to ? (
                  <Link
                    to={step.to}
                    className="font-display text-xl text-ink-muted transition-colors hover:text-navy md:text-2xl"
                  >
                    {step.label}
                  </Link>
                ) : (
                  <p className="font-display text-xl text-ink-muted md:text-2xl">
                    {step.label}
                  </p>
                )}
                {index < 3 && (
                  <>
                    <span className="text-lg text-turquoise lg:hidden">↓</span>
                    <span className="hidden text-lg text-turquoise lg:inline">→</span>
                  </>
                )}
              </li>
            ))}
          </ol>

          <p className="mt-10 max-w-3xl text-base leading-relaxed text-ink-muted lg:text-lg">
            The Search Blueprint defines what evidence matters. The Talent Lens
            structures what we know about the candidate. Hiring Confidence then
            considers how strong the overall evidence is—and where uncertainty
            remains.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:gap-6">
            <Link
              to="/atlas-library/search-blueprint"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-navy transition-colors hover:text-turquoise"
            >
              Explore the Search Blueprint
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/atlas-library/hiring-confidence-index"
              className="group inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-navy"
            >
              Explore Hiring Confidence
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 — CTA */}
      <CTABand
        eyebrow="Talent Lens™"
        title="Better candidate evaluation starts before the interview."
        text="The Atlas Method begins by defining the hiring decision and the evidence that should matter before candidates enter the process."
        buttonText="Schedule a Discovery Experience"
        secondaryText="Explore the Atlas Method"
        externalHref={CALENDAR_URL}
        secondaryTo="/atlas-method"
      />
    </SiteLayout>
  );
}
