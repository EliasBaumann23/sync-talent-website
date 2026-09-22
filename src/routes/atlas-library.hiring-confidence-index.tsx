import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CTABand } from "@/components/site/CTA";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/atlas-library/hiring-confidence-index")({
  head: () => ({
    meta: [
      {
        title:
          "Hiring Confidence Index™ — Evidence Behind the Hiring Decision | Sync Talent",
      },
      {
        name: "description",
        content:
          "The Hiring Confidence Index™ helps leadership teams understand the strength and completeness of the evidence supporting a hiring decision.",
      },
      {
        property: "og:title",
        content:
          "Hiring Confidence Index™ — Evidence Behind the Hiring Decision | Sync Talent",
      },
      {
        property: "og:description",
        content:
          "See where a hiring decision is well supported, where evidence remains incomplete and what still requires validation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      {
        property: "og:url",
        content: "/atlas-library/hiring-confidence-index",
      },
    ],
    links: [
      { rel: "canonical", href: "/atlas-library/hiring-confidence-index" },
    ],
  }),
  component: HiringConfidenceIndexPage,
});

const CALENDAR_URL = "https://calendar.app.google/KoYen9KgR1fkMTPP7";

const evidenceAreas = [
  {
    n: "01",
    title: "Role Clarity",
    body: "How clearly the business need, role mandate and definition of success have been established.",
  },
  {
    n: "02",
    title: "Market Evidence",
    body: "How well the search has tested assumptions against candidate availability, market realities and relevant alternatives.",
  },
  {
    n: "03",
    title: "Candidate Evidence",
    body: "How much relevant evidence supports the candidate against the requirements and context defined for the search.",
  },
  {
    n: "04",
    title: "Reference Evidence",
    body: "What independent professional references add, confirm, qualify or challenge about the evidence gathered during the process.",
  },
  {
    n: "05",
    title: "Decision Alignment",
    body: "How clearly the relevant decision-makers understand the evidence, trade-offs and remaining uncertainty behind the decision.",
  },
] as const;

const decisionEvidence = [
  {
    n: "01",
    title: "Role Clarity",
    strength: "Strong evidence",
    evidence: [
      "Business context and hiring trigger explicitly defined.",
      "Role mandate established before entering the market.",
      "12-month success outcomes agreed.",
      "Critical candidate evidence defined through the Search Blueprint.",
    ],
    interpretation:
      "The organization has a clear reference point for evaluating the decision.",
  },
  {
    n: "02",
    title: "Market Evidence",
    strength: "Strong evidence",
    evidence: [
      "Search tested the defined requirements against the relevant industrial market.",
      "Candidate availability and adjacent backgrounds were considered.",
      "Market realities were used to challenge initial assumptions where relevant.",
    ],
    interpretation:
      "The decision is informed by an active view of the available market rather than a single candidate in isolation.",
  },
  {
    n: "03",
    title: "Candidate Evidence",
    strength: "Strong evidence",
    evidence: [
      "Relevant industrial service leadership experience.",
      "Evidence of field operations and customer-facing responsibility.",
      "Experience within international industrial organizations.",
      "Career progression toward broader service leadership.",
    ],
    uncertainty:
      "Depth of experience redesigning service processes and measurable business impact still requires further validation.",
  },
  {
    n: "04",
    title: "Reference Evidence",
    strength: "Moderate evidence",
    evidence: [
      "Professional references support the candidate's operational leadership and customer-facing responsibility.",
    ],
    uncertainty:
      "Additional evidence around change leadership and process transformation would strengthen the decision.",
  },
  {
    n: "05",
    title: "Decision Alignment",
    strength: "Strong evidence",
    evidence: [
      "Decision-makers are aligned around the role mandate.",
      "Candidate strengths and open questions are explicit.",
      "Remaining uncertainties have been identified before the final decision.",
    ],
    interpretation:
      "The decision can focus on explicit trade-offs rather than competing interpretations of the role.",
  },
] as const;

const decisionView = [
  {
    title: "What Supports the Decision",
    items: [
      "Clear role mandate and success outcomes",
      "Relevant industrial service leadership evidence",
      "Strong contextual alignment with the operating environment",
      "Market evidence supporting the candidate's relevance",
    ],
  },
  {
    title: "What Remains Uncertain",
    items: [
      "Depth of process-transformation experience",
      "Evidence connecting operational improvements to measurable business outcomes",
      "Motivation for this specific opportunity",
      "Additional reference evidence around change leadership",
    ],
  },
  {
    title: "What to Validate Before Commitment",
    items: [
      "Detailed example of leading a service-process transformation",
      "Measurable impact from a significant operational decision",
      "Motivation, expectations and longer-term trajectory",
      "Additional reference evidence where appropriate",
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

function HiringConfidenceIndexPage() {
  return (
    <SiteLayout>
      {/* 01 — Hero */}
      <section className="border-b border-hairline bg-white">
        <div className="container-x pt-20 pb-16 lg:pt-28 lg:pb-24">
          <p className="eyebrow">Hiring Confidence Index™</p>
          <h1 className="mt-5 max-w-5xl text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Know what supports the decision—and what still does not.
          </h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <p className="max-w-2xl text-base leading-relaxed text-ink-muted lg:text-lg">
              The Hiring Confidence Index structures the strength and completeness
              of the evidence behind a hiring decision.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-ink-muted lg:text-lg">
              It does not score the candidate. It shows where the decision is well
              supported, where evidence remains incomplete and which uncertainties
              should still be examined before a final commitment is made.
            </p>
          </div>
          <div className="mt-10">
            <Link
              to="/atlas-method"
              className="group inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-navy"
            >
              Stage 05 of the Atlas Method
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 02 — What Creates Hiring Confidence */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="eyebrow">What Creates Hiring Confidence</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Confidence comes from evidence, not certainty.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted lg:text-lg">
              A hiring decision becomes more defensible when the role is clear,
              relevant evidence has been gathered and the people making the
              decision understand what is known—and what remains uncertain.
            </p>
          </div>

          <div className="mt-14 divide-y divide-hairline border-y border-hairline">
            {evidenceAreas.map((area) => (
              <div
                key={area.n}
                className="grid gap-3 py-7 md:grid-cols-[64px_260px_1fr] md:items-baseline lg:py-8"
              >
                <p className="font-display text-sm text-turquoise">{area.n}</p>
                <h3 className="font-display text-lg leading-snug text-navy md:text-xl">
                  {area.title}
                </h3>
                <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
                  {area.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 border-l border-turquoise pl-6 md:grid-cols-2 md:gap-10">
            <div>
              <p className="font-display text-sm text-navy">Talent Lens</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                What evidence do we have about this candidate?
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-ink-muted">
                Unit of analysis: Candidate evidence
              </p>
            </div>
            <div>
              <p className="font-display text-sm text-navy">
                Hiring Confidence Index™
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                How strongly is the hiring decision supported by the evidence
                available?
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-ink-muted">
                Unit of analysis: The decision
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Inside a Hiring Confidence View */}
      <section className="border-y border-hairline bg-surface py-24 lg:py-32">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="eyebrow">Inside a Hiring Confidence View</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              What this looks like before the decision.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted lg:text-lg">
              The Hiring Confidence view brings the available evidence together
              and makes remaining uncertainty explicit before a final hiring
              decision is made.
            </p>
          </div>

          <article className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-[10px] border border-hairline bg-white">
            <header className="border-b border-hairline px-6 py-6 lg:px-8">
              <p className="font-display text-xs uppercase tracking-[0.18em] text-turquoise">
                Illustrative Decision View
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">
                    Role
                  </p>
                  <p className="mt-1 font-display text-lg text-navy">
                    Head of Service — Mexico
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">
                    Candidate
                  </p>
                  <p className="mt-1 font-display text-lg text-navy">Candidate A</p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-ink-muted">
                Candidate and company details are fictionalized for demonstration
                purposes.
              </p>
            </header>

            <section className="border-b border-hairline bg-navy px-6 py-8 lg:px-8 lg:py-10">
              <p className="font-display text-xs uppercase tracking-[0.18em] text-turquoise">
                Overall Confidence
              </p>
              <div className="mt-4 grid gap-5 md:grid-cols-[minmax(0,280px)_1fr] md:items-end">
                <div>
                  <p className="font-display text-2xl leading-snug text-white">
                    Overall Hiring Confidence
                    <span className="text-white/50"> — </span>High
                  </p>
                </div>
                <div>
                  <p className="max-w-2xl text-sm leading-relaxed text-white/80">
                    The decision is supported by substantial evidence across the
                    role, market and candidate. Several specific questions remain
                    worth validating before final commitment.
                  </p>
                </div>
              </div>
            </section>

            <div>
              <div className="border-b border-hairline px-6 py-5 lg:px-8">
                <p className="font-display text-xs uppercase tracking-[0.18em] text-turquoise">
                  Evidence Areas
                </p>
              </div>
              {decisionEvidence.map((area) => (
                <section
                  key={area.n}
                  className="border-b border-hairline px-6 py-8 last:border-b-0 lg:px-8 lg:py-10"
                >
                  <div className="grid gap-3 md:grid-cols-[48px_1fr_auto] md:items-center">
                    <p className="font-display text-sm text-turquoise">{area.n}</p>
                    <h3 className="font-display text-xl leading-snug text-navy">
                      {area.title}
                    </h3>
                    <p className="w-fit border border-hairline px-3 py-1.5 font-display text-xs text-navy">
                      {area.strength}
                    </p>
                  </div>
                  <div className="mt-7 grid gap-7 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr] lg:gap-12 lg:pl-12">
                    <div>
                      <p className="font-display text-[11px] uppercase tracking-[0.18em] text-turquoise">
                        Evidence
                      </p>
                      <EvidenceList items={area.evidence} />
                    </div>
                    <div>
                      {"interpretation" in area && area.interpretation && (
                        <div>
                          <p className="font-display text-[11px] uppercase tracking-[0.18em] text-turquoise">
                            Interpretation
                          </p>
                          <p className="mt-3 text-sm leading-relaxed text-ink">
                            {area.interpretation}
                          </p>
                        </div>
                      )}
                      {"uncertainty" in area && area.uncertainty && (
                        <div>
                          <p className="font-display text-[11px] uppercase tracking-[0.18em] text-turquoise">
                            Remaining uncertainty
                          </p>
                          <p className="mt-3 text-sm leading-relaxed text-ink">
                            {area.uncertainty}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <section className="border-t border-hairline bg-surface px-6 py-8 lg:px-8 lg:py-10">
              <p className="eyebrow">Decision View</p>
              <h3 className="mt-3 font-display text-2xl text-navy">Decision view</h3>
              <div className="mt-7 grid gap-8 md:grid-cols-3">
                {decisionView.map((group) => (
                  <div key={group.title}>
                    <h4 className="font-display text-sm text-navy">
                      {group.title}
                    </h4>
                    <EvidenceList items={group.items} />
                  </div>
                ))}
              </div>
              <p className="mt-8 border-t border-hairline pt-6 text-sm leading-relaxed text-ink-muted">
                The Hiring Confidence Index structures the decision. It does not
                make the decision.
              </p>
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
              Confidence does not mean certainty.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted lg:text-lg">
              No hiring process removes uncertainty completely. The objective is
              to understand whether the decision is supported by enough relevant
              evidence—and to know exactly where uncertainty remains.
            </p>
          </div>

          <ol className="mt-14 flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-6">
            {[
              { label: "Search Blueprint", to: "/atlas-library/search-blueprint" },
              { label: "Talent Lens", to: "/atlas-library/talent-lens" },
              { label: "Hiring Confidence", current: true },
              { label: "Hiring Decision & Placement" },
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

          <div className="mt-10 max-w-3xl space-y-2 text-base leading-relaxed text-ink-muted lg:text-lg">
            <p>The Search Blueprint defines what evidence matters.</p>
            <p>The Talent Lens structures what we know about the candidate.</p>
            <p>
              The Hiring Confidence Index examines how strongly the overall
              decision is supported.
            </p>
            <p className="text-navy">The final hiring decision remains a human decision.</p>
          </div>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
            {[
              {
                label: "Explore the Search Blueprint",
                to: "/atlas-library/search-blueprint" as const,
              },
              {
                label: "Explore the Talent Lens",
                to: "/atlas-library/talent-lens" as const,
              },
              { label: "Explore the Atlas Method", to: "/atlas-method" as const },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-navy"
              >
                {link.label}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — CTA */}
      <CTABand
        eyebrow="Hiring Confidence Index™"
        title="Better decisions begin with better evidence."
        text="The Atlas Method starts before the search by defining the hiring decision, the evidence that should matter and the market in which that decision will be made."
        buttonText="Schedule a Discovery Experience"
        secondaryText="Explore Executive Search"
        externalHref={CALENDAR_URL}
        secondaryTo="/services"
      />
    </SiteLayout>
  );
}
