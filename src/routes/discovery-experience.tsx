import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTABand } from "@/components/site/CTA";
import { AtlasDivider } from "@/components/site/AtlasLine";
import { Calendar } from "lucide-react";

export const Route = createFileRoute("/discovery-experience")({
  head: () => ({
    meta: [
      { title: "The Discovery Experience™ — Sync Talent" },
      {
        name: "description",
        content:
          "A structured conversation that defines the hiring decision before a search begins. What the Discovery Experience™ is, why it exists and what leaders receive.",
      },
      { property: "og:title", content: "The Discovery Experience™ — Sync Talent" },
      {
        property: "og:description",
        content:
          "Every interaction should leave you better prepared to make the right decision.",
      },
      { property: "og:url", content: "/discovery-experience" },
    ],
    links: [{ rel: "canonical", href: "/discovery-experience" }],
  }),
  component: DiscoveryPage,
});

const deliverables = [
  {
    t: "The Discovery Canvas™",
    d: "A one-page structured articulation of the hiring decision: objective, constraints, decision criteria and open questions.",
  },
  {
    t: "Initial Perspective",
    d: "An honest read on market realities, salary evidence and candidate availability for the profile you are considering.",
  },
  {
    t: "Recommendation",
    d: "A recommendation on whether — and how — to proceed. Sometimes that recommendation is not to search yet.",
  },
];

const faqs = [
  {
    q: "How long does the Discovery Experience™ take?",
    a: "One structured 60 to 90 minute conversation, followed by a written Discovery Canvas™ delivered within a few working days.",
  },
  {
    q: "Is it a sales meeting?",
    a: "No. It is a working session about your hiring decision. If we are the right partner afterwards, we say so. If not, we say that too.",
  },
  {
    q: "Do I have to commit to a search afterwards?",
    a: "No. Many leaders use the Discovery Experience™ to sharpen thinking before committing to any engagement.",
  },
  {
    q: "What do you need from me?",
    a: "Enough context to have a substantive conversation: the role, the business objective and the stakeholders involved.",
  },
  {
    q: "Is there a fee?",
    a: "The Discovery Experience™ is offered without fee for qualified industrial leaders. It is our institutional investment in better hiring decisions.",
  },
];

function DiscoveryPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="The Discovery Experience™"
        title="Every interaction should leave you better prepared to make the right decision."
        description="The Discovery Experience™ is a structured conversation about your hiring decision. It exists to remove uncertainty — not to sell a search."
      />

      <section className="py-32 lg:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div>
            <p className="eyebrow">What it is</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              A working session, not a sales meeting.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-muted lg:text-lg">
            <p>
              The Discovery Experience™ is the first stage of the Atlas Method™. It is a structured
              conversation designed to surface the business objective behind the hiring decision,
              the constraints around it and the criteria by which it will ultimately be judged.
            </p>
            <p>
              It exists because most hiring engagements begin with a candidate profile. We believe
              they should begin with a decision.
            </p>
            <p className="text-navy">
              Whether or not we work together afterwards, our objective is that every conversation
              leaves you with a clearer understanding of your hiring decision.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-32 text-white lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-turquoise">What you receive</p>
            <h2 className="mt-4 text-3xl text-white md:text-4xl lg:text-[44px]">
              Three deliverables. One clearer decision.
            </h2>
          </div>

          <AtlasDivider className="mx-auto mt-14 text-white" />

          <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {deliverables.map((d, i) => (
              <div key={d.t} className="flex flex-col gap-4 bg-navy p-8 lg:p-10">
                <p className="font-display text-sm text-turquoise">0{i + 1}</p>
                <h3 className="font-display text-xl text-white">{d.t}</h3>
                <p className="text-sm leading-relaxed text-white/70 lg:text-base">{d.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-[10px] border border-white/15 bg-white/[0.03] p-6">
              <p className="font-display text-xs uppercase tracking-[0.18em] text-turquoise">
                Duration
              </p>
              <p className="mt-3 font-display text-xl text-white">60–90 minutes</p>
              <p className="mt-2 text-sm text-white/60">One structured conversation</p>
            </div>
            <div className="rounded-[10px] border border-white/15 bg-white/[0.03] p-6">
              <p className="font-display text-xs uppercase tracking-[0.18em] text-turquoise">
                Follow-up
              </p>
              <p className="mt-3 font-display text-xl text-white">Discovery Canvas™</p>
              <p className="mt-2 text-sm text-white/60">Delivered within a few working days</p>
            </div>
            <div className="rounded-[10px] border border-white/15 bg-white/[0.03] p-6">
              <p className="font-display text-xs uppercase tracking-[0.18em] text-turquoise">
                Format
              </p>
              <p className="mt-3 font-display text-xl text-white">Remote or on-site</p>
              <p className="mt-2 text-sm text-white/60">Mexico · Europe · North America</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 lg:py-40">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Frequently asked</p>
            <h2 className="mt-4 text-3xl md:text-4xl">Questions leaders usually ask first.</h2>
          </div>
          <div className="mt-12 divide-y divide-hairline border-y border-hairline">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer items-center justify-between gap-6 text-base font-medium text-navy">
                  <span>{f.q}</span>
                  <span className="text-ink-muted transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-32 lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-2xl rounded-[10px] border border-hairline bg-white p-10 text-center lg:p-14">
            <p className="eyebrow">Book</p>
            <h2 className="mt-4 text-3xl md:text-4xl">Schedule the Discovery Experience™</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
              A structured conversation about your hiring decision. No pitch. No commitment.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-[10px] bg-navy px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-turquoise hover:text-navy"
            >
              <Calendar className="h-4 w-4" /> Open calendar
            </a>
            <p className="mt-4 text-xs text-ink-muted">
              Calendly placeholder — connect your scheduling link to enable bookings.
            </p>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Prefer to write first?"
        title="Send a note. We respond within one business day."
        text="Share the hiring decision you are considering. We will respond with an honest read and, if appropriate, a proposed Discovery Experience™."
        buttonText="Send a note"
        secondaryText="Explore the Atlas Method™"
        to="/contact"
        secondaryTo="/atlas-method"
      />
    </SiteLayout>
  );
}
