import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABand } from "@/components/site/CTA";
import { AtlasDivider, AtlasLine } from "@/components/site/AtlasLine";

export const Route = createFileRoute("/atlas-library/hiring-confidence-index")({
  head: () => ({
    meta: [
      {
        title:
          "Hiring Confidence Index™ — Atlas Library, Methodology Document 04 | Sync Talent",
      },
      {
        name: "description",
        content:
          "The Hiring Confidence Index™ is a decision framework that helps leadership teams understand how well a hiring decision is supported by evidence.",
      },
      {
        property: "og:title",
        content: "Hiring Confidence Index™ — Atlas Library | Sync Talent",
      },
      {
        property: "og:description",
        content:
          "Methodology Document 04. Great hiring decisions are built on confidence, not certainty.",
      },
      { property: "og:url", content: "/atlas-library/hiring-confidence-index" },
    ],
    links: [{ rel: "canonical", href: "/atlas-library/hiring-confidence-index" }],
  }),
  component: HiringConfidenceIndexPage,
});

const problems = [
  "Opinions are confused with confidence",
  "Different stakeholders hold different levels of certainty",
  "Risks remain hidden",
  "Decisions become difficult to explain later",
];

const sources = [
  {
    title: "Search Blueprint™",
    question: "Was the hiring decision clearly defined?",
    body: "Confidence begins with clarity. When the business objective, success conditions and decision criteria were agreed before the search began, every later observation has a reference point.",
  },
  {
    title: "Talent Lens™",
    question: "Was the candidate evaluated consistently?",
    body: "Structured observation across the same dimensions removes variation between evaluators, so the evidence behind a recommendation is comparable rather than anecdotal.",
  },
  {
    title: "Market Intelligence",
    question: "Does the recommendation reflect current market realities?",
    body: "Compensation, availability and mobility evidence confirm whether the recommendation is realistic in today's market — or dependent on assumptions that no longer hold.",
  },
  {
    title: "References",
    question: "Do previous observations reinforce the evaluation?",
    body: "Independent accounts of past performance either corroborate what was observed during evaluation or surface the questions that remain open.",
  },
  {
    title: "Leadership Alignment",
    question: "Do key decision makers share the same understanding?",
    body: "A decision supported by evidence but not by alignment is fragile. Shared understanding across the hiring committee is itself a source of confidence.",
  },
];

const confidenceLevels = [
  {
    label: "Low Confidence",
    body: "Important elements of the decision remain undefined or unevidenced. Proceeding now would rely primarily on assumption.",
  },
  {
    label: "Moderate Confidence",
    body: "The decision is partially supported. Evidence exists, but material questions or misalignments are still unresolved.",
  },
  {
    label: "High Confidence",
    body: "Independent sources converge. The recommendation is well evidenced and understood consistently across the leadership team.",
  },
  {
    label: "Very High Confidence",
    body: "Every source of evidence supports the same conclusion, remaining risks are named and understood, and the decision can be explained without ambiguity.",
  },
];

const lowConfidenceOptions = [
  "Continue searching.",
  "Redefine the role.",
  "Adjust compensation.",
  "Expand the search geography.",
  "Clarify business objectives.",
  "Delay the hiring decision.",
];

const meetingQuestions = [
  "What evidence supports this recommendation?",
  "What assumptions remain?",
  "What risks are still unresolved?",
  "What additional information would increase confidence?",
];

const atlasFlow = [
  "Discovery Experience™",
  "Search Blueprint™",
  "Executive Search",
  "Talent Lens™",
  "Hiring Confidence Index™",
  "Hiring Decision",
];

const whyItMatters = [
  {
    title: "Transparency",
    body: "Hiring decisions become easier to explain internally, because the reasoning behind them is documented rather than remembered.",
  },
  {
    title: "Consistency",
    body: "Every recommendation follows the same decision logic, so leadership teams compare finalists on the same terms.",
  },
  {
    title: "Institutional Learning",
    body: "Every completed search improves future decision quality by adding evidence to the organization's understanding of its own market.",
  },
];

const convergingSources = [
  "Search Blueprint™",
  "Talent Lens™",
  "Market Intelligence",
  "References",
  "Leadership Alignment",
];

function FlowRow({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="grid gap-px overflow-hidden border border-hairline bg-hairline lg:grid-cols-6">
      {steps.map((s, i) => (
        <li key={s} className="flex flex-col justify-between gap-6 bg-white p-6">
          <span className="font-display text-xs uppercase tracking-[0.18em] text-turquoise">
            Step {String(i + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-base leading-snug text-navy">{s}</span>
        </li>
      ))}
    </ol>
  );
}

function ConvergenceDiagram() {
  return (
    <div className="mx-auto mt-16 max-w-5xl">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {convergingSources.map((s) => (
          <article
            key={s}
            className="rounded-[10px] border border-hairline bg-white p-6 text-center"
          >
            <span className="font-display text-base leading-snug text-navy">{s}</span>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center">
        <span className="h-10 w-px bg-hairline" />
        <div className="flex h-40 w-40 items-center justify-center rounded-full border border-hairline bg-white shadow-[0_20px_60px_-30px_rgba(16,36,58,0.25)] md:h-44 md:w-44">
          <span className="text-center font-display text-sm font-semibold leading-tight text-navy">
            Hiring
            <br />
            Decision
          </span>
        </div>
        <span className="h-10 w-px bg-hairline" />
        <div className="rounded-[10px] border border-hairline bg-navy px-10 py-6 text-center">
          <span className="font-display text-lg text-white">Hiring Confidence™</span>
        </div>
      </div>
    </div>
  );
}

function HiringConfidenceIndexPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="border-b border-hairline bg-white">
        <div className="container-x pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">Atlas Library · Methodology Document 04</p>
              <h1 className="mt-5 text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                Great hiring decisions are built on confidence, not certainty.
              </h1>
            </div>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-ink-muted lg:text-lg">
                The Hiring Confidence Index™ helps leadership teams understand how well a
                hiring decision is supported by evidence. Rather than predicting the future,
                it measures how completely today's decision has been understood. It is a
                decision framework — not a scoring system, and never a measure of a person.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/discovery-experience"
                  className="inline-flex items-center rounded-[10px] bg-navy px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-turquoise"
                >
                  Experience the Discovery Experience™
                </Link>
                <Link
                  to="/atlas-method"
                  className="inline-flex items-center rounded-[10px] border border-hairline px-6 py-3.5 text-sm font-medium text-navy transition-colors hover:border-navy"
                >
                  Explore the Atlas Method™
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
              Hiring is one of the few strategic decisions made without a shared measure of
              confidence.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-muted lg:text-lg">
            <p>
              Organizations routinely measure financial performance, operational efficiency
              and commercial results.
            </p>
            <p>
              Yet one of the most expensive business decisions — the hiring decision — is
              often based on fragmented opinions.
            </p>
            <p>
              Different stakeholders hold different levels of confidence, but those
              differences are rarely visible.
            </p>
            <p className="text-navy">
              The Hiring Confidence Index™ exists to make decision confidence transparent.
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

        <div className="container-x mt-16">
          <div className="mx-auto max-w-2xl text-center">
            <AtlasDivider />
            <p className="mt-10 font-display text-xl leading-snug text-navy md:text-2xl">
              The objective is not certainty.
              <br />
              The objective is measurable confidence.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT IT IS */}
      <section className="border-y border-hairline bg-surface py-32 lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Section 02 · What It Is</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              A shared measure of decision confidence.
            </h2>
          </div>

          <ConvergenceDiagram />

          <p className="mx-auto mt-14 max-w-2xl text-center text-base text-ink-muted lg:text-lg">
            Confidence grows when multiple independent sources support the same conclusion.
          </p>
        </div>
      </section>

      {/* SECTION 3 — FIVE SOURCES OF CONFIDENCE */}
      <section className="py-32 lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Section 03 · Confidence Is Built, Not Assumed</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Five sources of confidence.
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {sources.map((s, i) => (
              <article key={s.title} className="bg-white p-8 lg:p-10">
                <p className="font-display text-xs uppercase tracking-[0.18em] text-turquoise">
                  Source 0{i + 1}
                </p>
                <h3 className="mt-5 font-display text-xl text-navy">{s.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-navy">{s.question}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">{s.body}</p>
              </article>
            ))}
            <div className="hidden bg-surface lg:block" />
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE CONFIDENCE SCALE */}
      <section className="border-y border-hairline bg-surface py-32 lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Section 04 · The Confidence Scale</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Understanding confidence.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-muted lg:text-lg">
              This is not a measure of a candidate. It describes how well the hiring decision
              itself has been supported by evidence.
            </p>
          </div>

          <ol className="mx-auto mt-16 max-w-3xl">
            {confidenceLevels.map((level, i) => (
              <li key={level.label} className="relative">
                <div className="rounded-[10px] border border-hairline bg-white p-8 lg:p-10">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-xs uppercase tracking-[0.18em] text-turquoise">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-xl text-navy">{level.label}</h3>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-ink-muted">
                    {level.body}
                  </p>
                </div>
                {i < confidenceLevels.length - 1 && (
                  <div className="flex justify-center py-5">
                    <span className="h-8 w-px bg-hairline" />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION 5 — WHEN CONFIDENCE IS LOW */}
      <section className="py-32 lg:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div>
            <p className="eyebrow">Section 05 · When Confidence Is Low</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Low confidence is valuable information.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-muted lg:text-lg">
            <p>
              The objective is not always to hire immediately. When the evidence does not yet
              support the decision, that absence is itself a finding — and one worth acting
              on before an appointment is made.
            </p>
            <p>Sometimes the correct decision is:</p>
            <ul className="grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
              {lowConfidenceOptions.map((o) => (
                <li key={o} className="bg-white p-6 text-base text-navy">
                  {o}
                </li>
              ))}
            </ul>
            <p className="text-navy">
              The Hiring Confidence Index™ supports better decisions — even when the answer
              is "not yet."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — THE DECISION MEETING */}
      <section className="border-y border-hairline bg-surface py-32 lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Section 06 · The Decision Meeting</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Supporting executive discussions.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-muted lg:text-lg">
              The Hiring Confidence Index™ gives leadership teams a common language for
              discussing finalists — one grounded in evidence rather than impression.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-[10px] border border-hairline bg-white p-8 lg:p-10">
              <p className="font-display text-xs uppercase tracking-[0.18em] text-ink-muted">
                Instead of
              </p>
              <p className="mt-8 font-display text-xl leading-snug text-navy">
                "I like this person."
              </p>
              <p className="mt-6 text-sm leading-relaxed text-ink-muted">
                A preference expressed without shared reasoning, difficult to compare and
                difficult to revisit later.
              </p>
            </div>

            <div className="rounded-[10px] border border-hairline bg-navy p-8 text-white lg:p-10">
              <p className="font-display text-xs uppercase tracking-[0.18em] text-turquoise">
                The discussion becomes
              </p>
              <ul className="mt-8 space-y-5">
                {meetingQuestions.map((q) => (
                  <li key={q} className="flex items-start gap-4">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-turquoise" />
                    <span className="text-base leading-snug text-white">"{q}"</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — WHERE IT FITS */}
      <section className="py-32 lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Section 07 · Where It Fits</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              The final stage of the Atlas Method.
            </h2>
          </div>

          <AtlasLine
            nodes={6}
            active={4}
            className="mx-auto mt-16 max-w-4xl text-navy/60"
          />
          <div className="mt-10">
            <FlowRow steps={atlasFlow} />
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center text-base text-ink-muted lg:text-lg">
            The Hiring Confidence Index™ transforms evidence into executive confidence.
          </p>
        </div>
      </section>

      {/* SECTION 8 — WHY IT MATTERS */}
      <section className="border-y border-hairline bg-surface py-32 lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Section 08 · Why It Matters</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Better decisions survive future scrutiny.
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-hairline bg-hairline lg:grid-cols-3">
            {whyItMatters.map((w) => (
              <article key={w.title} className="bg-white p-8 lg:p-10">
                <h3 className="font-display text-xl text-navy">{w.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — THE PHILOSOPHY */}
      <section className="py-32 lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Section 09 · The Philosophy</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-5xl">
              Confidence is not certainty.
            </h2>
            <AtlasDivider className="mt-10" />
            <div className="mt-10 space-y-6 text-left text-base leading-relaxed text-ink-muted lg:text-lg">
              <p>Executive Search cannot eliminate uncertainty.</p>
              <p>People are complex. Organizations evolve. Markets change.</p>
              <p>
                No framework, however rigorous, can guarantee how a leader will perform three
                years from now. Any methodology that claims otherwise is selling comfort
                rather than judgement.
              </p>
              <p>
                The objective has never been certainty. The objective is making today's
                decision with the highest possible level of informed confidence — with the
                business context understood, the evidence gathered, the assumptions named and
                the leadership team genuinely aligned.
              </p>
              <p className="font-display text-xl leading-snug text-navy md:text-2xl">
                That is what the Hiring Confidence Index™ measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Hiring Confidence Index™"
        title="The best hiring decisions are those that remain defensible over time."
        text="The Hiring Confidence Index™ helps leadership teams understand not only who they should hire, but how well that decision is supported by evidence."
        buttonText="Experience the Discovery Experience™"
        to="/discovery-experience"
        secondaryText="Explore the Atlas Method™"
        secondaryTo="/atlas-method"
      />
    </SiteLayout>
  );
}
