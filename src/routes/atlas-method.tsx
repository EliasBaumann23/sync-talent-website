import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABand } from "@/components/site/CTA";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/atlas-method")({
  head: () => ({
    meta: [
      { title: "The Atlas Method™ — A methodology for better hiring decisions | Sync Talent" },
      {
        name: "description",
        content:
          "The Atlas Method™ is Sync Talent's reasoning process for industrial hiring. Understand, Structure, Evaluate, Decide, Learn — a methodology that produces defensible hiring decisions.",
      },
      { property: "og:title", content: "The Atlas Method™ — Sync Talent" },
      {
        property: "og:description",
        content:
          "A structured methodology for industrial hiring decisions in North America.",
      },
      { property: "og:url", content: "/atlas-method" },
    ],
    links: [{ rel: "canonical", href: "/atlas-method" }],
  }),
  component: AtlasMethodPage,
});

const BOOKING_URL = "https://calendar.app.google/KoYen9KgR1fkMTPP7";

const journey: { n: string; t: string; d: string; to?: string }[] = [
  {
    n: "01",
    t: "Discovery Experience",
    d: "Understand the business context, why the hire matters and what the organization actually needs before defining the search.",
    to: "/discovery-experience",
  },
  {
    n: "02",
    t: "Search Blueprint",
    d: "Translate the hiring need into explicit success criteria, candidate requirements and a structured search strategy.",
    to: "/atlas-library/search-blueprint",
  },
  {
    n: "03",
    t: "Search & Market Intelligence",
    d: "Enter the market, identify relevant talent and build a clearer view of candidate availability, constraints and market realities.",
  },
  {
    n: "04",
    t: "Talent Lens",
    d: "Evaluate candidates through structured evidence against the requirements and context defined at the beginning of the search.",
    to: "/atlas-library/talent-lens",
  },
  {
    n: "05",
    t: "Hiring Confidence",
    d: "Bring evidence, strengths, risks and remaining uncertainties together before the final decision.",
    to: "/atlas-library/hiring-confidence-index",
  },
  {
    n: "06",
    t: "Hiring Decision & Placement",
    d: "Support the transition from evaluation to an informed hiring decision and successful placement.",
  },
  {
    n: "07",
    t: "Institutional Learning",
    d: "Capture what the search revealed about the role, market and organization so that the intelligence created during the process is not lost.",
  },
];

const principles = [
  { name: "Understand", d: "Start with context before requirements." },
  { name: "Structure", d: "Turn assumptions into explicit criteria." },
  { name: "Evaluate", d: "Build evidence instead of relying on impressions." },
  { name: "Decide", d: "Make strengths, risks and uncertainty visible." },
  { name: "Learn", d: "Preserve the intelligence created through the search." },
];

const tools = [
  {
    name: "Discovery Experience™",
    d: "Define the decision before defining the search.",
    to: "/discovery-experience",
    cta: "Explore Discovery Experience",
  },
  {
    name: "Search Blueprint™",
    d: "Turn the hiring need into a shared definition of success and search strategy.",
    to: "/atlas-library/search-blueprint",
    cta: "Explore Search Blueprint",
  },
  {
    name: "Talent Lens™",
    d: "Structure the evidence behind each candidate.",
    to: "/atlas-library/talent-lens",
    cta: "Explore Talent Lens",
  },
  {
    name: "Hiring Confidence Index™",
    d: "Make the strength of the evidence—and remaining uncertainty—visible before the decision.",
    to: "/atlas-library/hiring-confidence-index",
    cta: "Explore Hiring Confidence Index",
  },
];

function AtlasMethodPage() {
  return (
    <SiteLayout>
      {/* 01 — HERO */}
      <section className="border-b border-hairline bg-white">
        <div className="container-x pt-20 pb-16 lg:pt-28 lg:pb-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">The Atlas Method</p>
              <h1 className="mt-4 text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                A better search begins with a better decision process.
              </h1>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink-muted lg:text-lg">
              <p>
                The Atlas Method is Sync Talent's structured approach to Executive Search. It
                connects business context, market intelligence and candidate evidence so that
                hiring decisions are made with greater clarity and confidence.
              </p>
              <p>
                Rather than treating search as a sequence of candidate introductions, Atlas
                structures the full journey—from understanding why the hire matters to capturing
                what the organization learns from the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — THE ATLAS JOURNEY */}
      <section className="bg-navy py-28 text-white lg:py-36">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow text-turquoise">The Atlas Journey</p>
            <h2 className="mt-4 text-3xl leading-tight text-white md:text-4xl lg:text-[44px]">
              One search. Seven connected stages.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70 lg:text-lg">
              Each stage builds on the previous one, creating a continuous path from the initial
              hiring question to the final decision and the knowledge created along the way.
            </p>
          </div>

          {/* Desktop — continuous horizontal journey */}
          <ol className="mt-16 hidden lg:grid lg:grid-cols-7">
            {journey.map((s) => {
              const body = (
                <>
                  <p className="flex h-7 items-end font-display text-[13px] tracking-wide text-turquoise">
                    {s.n}
                  </p>
                  <div className="relative h-9">
                    <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-turquoise/60 bg-navy transition-colors group-hover:bg-turquoise" />
                  </div>
                  <span
                    className={`mt-3 block font-display text-xs leading-snug xl:text-[13px] ${
                      s.to
                        ? "text-white transition-colors group-hover:text-turquoise"
                        : "text-white/80"
                    }`}
                  >
                    {s.t}
                    {s.to && (
                      <ArrowRight className="ml-1.5 inline h-3 w-3 text-turquoise opacity-0 transition-opacity group-hover:opacity-100" />
                    )}
                  </span>
                  <span className="mt-3 block text-[12.5px] leading-relaxed text-white/55">
                    {s.d}
                  </span>
                </>
              );
              return (
                <li key={s.n} className="relative pr-4 pb-2 last:pr-0 xl:pr-5">
                  <span className="absolute left-0 right-0 top-[46px] h-px bg-white/15" />
                  {s.n === "07" && (
                    <ArrowRight
                      aria-hidden
                      className="absolute right-[-4px] top-[46px] h-3 w-3 -translate-y-1/2 text-white/40"
                    />
                  )}
                  {s.to ? (
                    <Link to={s.to} className="group block">
                      {body}
                    </Link>
                  ) : (
                    <div className="group">{body}</div>
                  )}
                </li>
              );
            })}
          </ol>

          {/* Mobile — vertical timeline */}
          <ol className="mt-14 lg:hidden">
            {journey.map((s) => {
              const body = (
                <>
                  <p className="font-display text-[13px] tracking-wide text-turquoise">{s.n}</p>
                  <p
                    className={`mt-1.5 font-display text-base leading-snug ${
                      s.to
                        ? "text-white transition-colors group-hover:text-turquoise"
                        : "text-white/80"
                    }`}
                  >
                    {s.t}
                    {s.to && (
                      <ArrowRight className="ml-1.5 inline h-3.5 w-3.5 text-turquoise opacity-0 transition-opacity group-hover:opacity-100" />
                    )}
                  </p>
                  <span className="mt-2 block text-sm leading-relaxed text-white/60">{s.d}</span>
                </>
              );
              return (
                <li key={s.n} className="relative border-l border-white/15 pb-8 pl-6 last:pb-0">
                  <span className="absolute -left-[4.5px] top-1 h-2 w-2 rounded-full border border-turquoise/60 bg-navy transition-colors group-hover:bg-turquoise" />
                  {s.to ? (
                    <Link to={s.to} className="group block">
                      {body}
                    </Link>
                  ) : (
                    <div className="group">{body}</div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* 03 — HOW ATLAS THINKS */}
      <section className="py-28 lg:py-36">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">How Atlas Thinks</p>
            <p className="mt-6 text-base leading-relaxed text-ink-muted lg:text-lg">
              Behind the seven-stage journey are five simple reasoning principles. They describe how
              Atlas approaches a hiring decision—not another process the client has to learn.
            </p>
          </div>

          <div className="mt-14 flex flex-col gap-8 md:flex-row md:items-start md:gap-5">
            {principles.map((p, i) => (
              <Fragment key={p.name}>
                <div className="min-w-0 md:flex-1">
                  <p className="font-display text-2xl text-navy md:text-[26px]">{p.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.d}</p>
                </div>
                {i < principles.length - 1 && (
                  <span
                    aria-hidden
                    className="self-center font-display text-lg text-turquoise md:mt-2 md:rotate-0 md:self-auto"
                  >
                    ↓
                  </span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — EXPLORE THE ATLAS TOOLS */}
      <section className="bg-surface py-28 lg:py-36">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Explore the Atlas Tools</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
              Go deeper where it matters.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted lg:text-lg">
              Four parts of the Atlas Method have dedicated tools and experiences designed to
              structure specific moments in the search.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2">
            {tools.map((t) => (
              <div key={t.name} className="flex flex-col bg-white p-8 lg:p-10">
                <h3 className="font-display text-xl text-navy">{t.name}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">{t.d}</p>
                <Link
                  to={t.to}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy link-underline"
                >
                  {t.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — DISCOVERY EXPERIENCE CTA */}
      <CTABand
        eyebrow="Start with the decision"
        title="Every search begins with understanding what the organization actually needs."
        text="The Discovery Experience is a focused conversation about the business context, hiring decision and market before a search begins."
        buttonText="Schedule a Discovery Experience"
        externalHref={BOOKING_URL}
        secondaryText="Explore Executive Search"
        secondaryTo="/services"
      />
    </SiteLayout>
  );
}
