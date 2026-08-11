import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTABand } from "@/components/site/CTA";
import { AtlasLine } from "@/components/site/AtlasLine";
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

const stages = [
  {
    n: "01",
    name: "Understand",
    d: "Clarify the business objective the hiring decision is supposed to serve. Most engagements begin with a role. Ours begins with a decision.",
    reduces: "Reduces ambiguity about what a successful hire actually means.",
  },
  {
    n: "02",
    name: "Structure",
    d: "Translate the objective into a Search Blueprint™ — a written articulation of the market, the profile and the decision criteria.",
    reduces: "Reduces disagreement between stakeholders before the search begins.",
  },
  {
    n: "03",
    name: "Evaluate",
    d: "Apply the Talent Lens™: structured perspectives, case-based scenarios and calibrated references. Evidence, not impressions.",
    reduces: "Reduces the risk of selection based on presentation rather than substance.",
  },
  {
    n: "04",
    name: "Decide",
    d: "Frame the decision using the Hiring Confidence Index™ — a shared measure of how well the decision is understood, not just made.",
    reduces: "Reduces the gap between the person hired and the decision explained.",
  },
  {
    n: "05",
    name: "Learn",
    d: "Feed the engagement back into institutional intelligence. Every conversation improves the next Search Blueprint™ and the market view we bring to it.",
    reduces: "Reduces the extent to which knowledge lives inside a single search.",
  },
];

function AtlasMethodPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="The Atlas Method™"
        title="A methodology for better hiring decisions."
        description="The Atlas Method™ is the reasoning process behind every Sync Talent engagement. This page is educational — written to explain the methodology, not to sell it."
      />

      <section className="py-32 lg:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div>
            <p className="eyebrow">Why methodology matters</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Hiring is a decision problem, not a sourcing problem.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-muted lg:text-lg">
            <p>
              Executive Search has, for decades, been organized around the search itself:
              collecting requirements, scanning a market and presenting candidates. That model
              treats hiring as a sourcing problem.
            </p>
            <p>
              In practice, most engagements fail — or produce hires that later feel wrong — not
              because sourcing was inadequate, but because the underlying decision was never
              structured.
            </p>
            <p className="text-navy">
              The Atlas Method™ is our response: an engagement structured around the decision, not
              the search.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-32 text-white lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-turquoise">The Five Stages</p>
            <h2 className="mt-4 text-3xl text-white md:text-4xl lg:text-[44px]">
              Understand · Structure · Evaluate · Decide · Learn
            </h2>
          </div>

          <AtlasLine nodes={5} active={2} className="mx-auto mt-14 max-w-3xl text-white/60" />

          <div className="mt-14 space-y-px overflow-hidden border border-white/10 bg-white/10">
            {stages.map((s) => (
              <div key={s.n} className="grid gap-6 bg-navy p-8 lg:grid-cols-[120px_1fr_1fr] lg:gap-10 lg:p-12">
                <p className="font-display text-4xl text-turquoise">{s.n}</p>
                <div>
                  <h3 className="font-display text-2xl text-white">{s.name}</h3>
                  <p className="mt-4 text-base leading-relaxed text-white/70">{s.d}</p>
                </div>
                <div className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  <p className="font-display text-xs uppercase tracking-[0.18em] text-turquoise">
                    How this stage reduces uncertainty
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{s.reduces}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 lg:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">Applied to Executive Search</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              How the Atlas Method™ shows up inside an engagement.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink-muted lg:text-lg">
            <p>
              An Atlas engagement is visible in its deliverables. Instead of a slide of candidate
              headshots, you receive:
            </p>
            <ul className="grid gap-px border border-hairline bg-hairline">
              {[
                "A Search Blueprint™ your board can read.",
                "Talent Lens™ evaluations grounded in evidence.",
                "A Hiring Confidence Index™ shared by every stakeholder.",
                "An Atlas Note summarizing what the market taught us.",
              ].map((t) => (
                <li key={t} className="bg-white p-5 text-sm font-medium text-navy">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface py-32 lg:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">Beyond Executive Search</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              A methodology that will outgrow its original application.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink-muted lg:text-lg">
            <p>
              The Atlas Method™ was developed inside Executive Search, but the underlying
              reasoning applies wherever industrial leaders must make consequential people
              decisions: succession planning, market entry, leadership benchmarking, organizational
              design.
            </p>
            <p className="text-navy">
              Our long-term ambition is that the Atlas Method™ becomes a shared vocabulary for how
              industrial companies think about hiring — beyond a single engagement, beyond a
              single firm.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy link-underline"
            >
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </SiteLayout>
  );
}
