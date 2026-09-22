import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AtlasDivider } from "@/components/site/AtlasLine";
import { ArrowRight, Calendar } from "lucide-react";

export const Route = createFileRoute("/discovery-experience")({
  head: () =>
    pageHead({
      path: "/discovery-experience",
      title: "Discovery Experience™ — Start the Hiring Decision | Sync Talent",
      description:
        "A focused conversation to clarify the business context, role and hiring decision before beginning an Executive Search.",
    }),
  component: DiscoveryPage,
});

const questions = [
  {
    n: "01",
    q: "Why does this hire matter now?",
    d: "Understand the business situation, trigger and reason the organization needs this person.",
  },
  {
    n: "02",
    q: "What needs to change because this person joins?",
    d: "Define the business contribution expected from the hire rather than relying only on responsibilities.",
  },
  {
    n: "03",
    q: "What would success look like after 12 months?",
    d: "Clarify the outcomes that would make the organization consider the hiring decision successful.",
  },
  {
    n: "04",
    q: "What will shape the search?",
    d: "Identify relevant realities such as market availability, location, compensation, language, organizational context and other practical constraints.",
  },
];

const outcomes = [
  {
    t: "A clearer hiring question",
    d: "A shared understanding of what the organization is actually trying to solve through the hire.",
  },
  {
    t: "An initial market perspective",
    d: "An early view of the realities that may influence the search, based on the context discussed.",
  },
  {
    t: "A clear next step",
    d: "A decision on whether there is a search to solve together and, if so, what should happen next.",
  },
];

const CALENDAR_URL = "https://calendar.app.google/KoYen9KgR1fkMTPP7";

function DiscoveryPage() {
  return (
    <SiteLayout>
      {/* 01 — Hero */}
      <section className="border-b border-hairline bg-white">
        <div className="container-x pt-20 pb-16 lg:pt-28 lg:pb-24">
          <p className="eyebrow">Discovery Experience™</p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Before defining the search, define the decision.
          </h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <p className="max-w-2xl text-base leading-relaxed text-ink-muted lg:text-lg">
              The Discovery Experience is a focused conversation about the business context
              behind a critical hire—before job descriptions, candidate lists and search
              activity begin.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-ink-muted lg:text-lg">
              Together, we clarify why the hire matters, what success should look like and
              which realities may shape the search.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] bg-navy px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-turquoise hover:text-navy"
            >
              <Calendar className="h-4 w-4" /> Schedule a Discovery Experience
            </a>
            <Link
              to="/atlas-method"
              className="group inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-navy"
            >
              Part of the Atlas Method
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 02 — What We Explore */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">What we explore</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Four questions before the search begins.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted lg:text-lg">
              The conversation focuses on the decision behind the vacancy rather than starting
              with a conventional job description.
            </p>
          </div>
          <div className="mt-14 divide-y divide-hairline border-y border-hairline">
            {questions.map((item) => (
              <div
                key={item.n}
                className="grid gap-4 py-8 md:grid-cols-[80px_1.1fr_1fr] md:items-baseline lg:py-10"
              >
                <p className="font-display text-sm text-turquoise">{item.n}</p>
                <h3 className="font-display text-xl leading-snug text-navy md:text-2xl">
                  {item.q}
                </h3>
                <p className="max-w-xl text-base leading-relaxed text-ink-muted">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — What You Leave With */}
      <section className="border-y border-hairline bg-surface py-24 lg:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">What you leave with</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">Clarity before commitment.</h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted lg:text-lg">
              The Discovery Experience should leave both sides with a clearer view of the hiring
              decision and whether a search should move forward.
            </p>
          </div>
          <AtlasDivider className="mt-12" />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {outcomes.map((o, i) => (
              <div key={o.t} className="max-w-sm">
                <p className="font-display text-sm text-turquoise">0{i + 1}</p>
                <h3 className="mt-3 font-display text-xl text-navy">{o.t}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — What Happens Next */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">What happens next</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              If there is a search to solve, we structure it.
            </h2>
          </div>

          <div className="mt-14 flex flex-col items-start gap-2">
            {[
              { label: "Discovery Experience", current: true },
              { label: "Search Blueprint", to: "/atlas-library/search-blueprint" },
              { label: "Executive Search", to: "/services" },
            ].map((step, i) => (
              <div key={step.label}>
                {step.current ? (
                  <p className="font-display text-2xl text-navy md:text-3xl">
                    {step.label}
                    <span className="ml-3 align-middle font-display text-xs uppercase tracking-[0.18em] text-turquoise">
                      You are here
                    </span>
                  </p>
                ) : (
                  <Link
                    to={step.to}
                    className="font-display text-2xl text-ink-muted transition-colors hover:text-navy md:text-3xl"
                  >
                    {step.label}
                  </Link>
                )}
                {i < 2 && <p className="my-1 text-lg text-turquoise">↓</p>}
              </div>
            ))}
          </div>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-ink-muted lg:text-lg">
            When there is a clear search to move forward with, the next step is the Search
            Blueprint—where the business context becomes an explicit definition of success,
            candidate requirements and search strategy.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3">
            <Link
              to="/atlas-library/search-blueprint"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-navy transition-colors hover:text-turquoise"
            >
              Explore the Search Blueprint
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/atlas-method"
              className="group inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-navy"
            >
              See the complete Atlas Method
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 — Schedule Your Discovery Experience */}
      <section className="bg-navy py-28 text-white lg:py-36">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-turquoise">Schedule your Discovery Experience™</p>
            <h2 className="mt-5 text-3xl leading-[1.1] text-white md:text-4xl lg:text-5xl">
              Start with the hiring decision.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 lg:text-lg">
              Schedule a Discovery Experience to discuss the role, business context and market
              before deciding how the search should begin.
            </p>
            <AtlasDivider className="mx-auto mt-10 text-white" />
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-[10px] bg-turquoise px-7 py-4 text-sm font-medium text-navy transition-colors hover:bg-white"
            >
              <Calendar className="h-4 w-4" /> Schedule a Discovery Experience
            </a>
            <p className="mt-5 text-xs text-white/60">
              45–60 minutes · No fee · No commitment
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
