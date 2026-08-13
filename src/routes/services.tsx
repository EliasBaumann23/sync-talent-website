import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTABand } from "@/components/site/CTA";
import { AtlasDivider } from "@/components/site/AtlasLine";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Executive Search — Reimagined for Industrial Leaders | Sync Talent" },
      {
        name: "description",
        content:
          "Executive Search is our commercial application. Decision intelligence is our methodology. How Sync Talent structures industrial searches through the Atlas Method™.",
      },
      { property: "og:title", content: "Executive Search — Sync Talent" },
      {
        property: "og:description",
        content:
          "Executive Search structured around methodology — Discovery Experience™, Search Blueprint™, Talent Lens™ and Hiring Confidence Index™.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const stages = [
  {
    n: "01",
    name: "The Discovery Experience™",
    d: "Before we search, we help you define the decision. A structured conversation that surfaces business objectives, decision criteria and unspoken assumptions.",
  },
  {
    n: "02",
    name: "The Search Blueprint™",
    d: "A written articulation of the market, the role and the evidence that will justify the hire. Every search begins with a document you can defend to your board.",
  },
  {
    n: "03",
    name: "Market Intelligence",
    d: "Independent evidence on competitor structures, compensation and availability — read as institutional knowledge, not one-off data.",
  },
  {
    n: "04",
    name: "Talent Lens™",
    d: "Structured evaluation that produces evidence, not impressions. Competency frameworks, case-based scenarios and calibrated references.",
  },
  {
    n: "05",
    name: "Hiring Confidence™",
    d: "A shared measure of how well the decision is understood. Confidence is what you present to leadership — not a candidate score.",
  },
  {
    n: "06",
    name: "Placement",
    d: "Offer strategy, negotiation and onboarding designed to protect the decision after it is made.",
  },
  {
    n: "07",
    name: "Institutional Learning",
    d: "Every engagement feeds back into the Atlas Method™. Your search improves the next one.",
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Executive Search"
        title="Executive Search, reimagined around methodology."
        description="Executive Search is our commercial application. Decision intelligence is our purpose. This page describes how a Sync Talent engagement is structured — and why it looks different from a traditional search."
      />

      <section className="py-32 lg:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div>
            <p className="eyebrow">Why Executive Search still matters</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              The most important hires are rarely on the market.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-muted lg:text-lg">
            <p>
              For industrial leadership, technical leadership and commercial leadership, the
              candidates who define the next chapter of a business are not looking for a job. They
              are performing in one.
            </p>
            <p>
              Executive Search remains the discipline of finding, understanding and convincing
              those individuals. What has changed — what Sync Talent believes must change — is how
              the engagement itself is structured.
            </p>
            <p className="text-navy">
              A better search does not start with a better search. It starts with a better
              understanding of the hiring decision.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-32 text-white lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-turquoise">A Sync Talent Engagement</p>
            <h2 className="mt-4 text-3xl text-white md:text-4xl lg:text-[44px]">
              Seven stages, one reasoning process.
            </h2>
          </div>

          <AtlasDivider className="mx-auto mt-14 text-white" />

          <ol className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            {stages.map((s) => (
              <li key={s.n} className="flex flex-col gap-4 bg-navy p-8 lg:p-10">
                <p className="font-display text-sm text-turquoise">{s.n}</p>
                <h3 className="font-display text-xl text-white">{s.name}</h3>
                <p className="text-sm leading-relaxed text-white/70 lg:text-base">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-32 lg:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">What this means for you</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              A search you can explain, defend and learn from.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink-muted lg:text-lg">
            <p>
              Every deliverable — the Search Blueprint™, the Talent Lens™ evaluations, the Hiring
              Confidence Index™ — is written to be read by a board, not just an HR partner.
            </p>
            <p>
              The engagement produces a hiring decision you can articulate, and institutional
              knowledge you can carry into the next one.
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

      <CTABand secondaryText="" />
    </SiteLayout>
  );
}
