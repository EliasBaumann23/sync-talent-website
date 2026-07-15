import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTABand } from "@/components/site/CTA";
import aboutImg from "@/assets/about-mexico.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Helping industrial companies make better hiring decisions | Sync Talent" },
      {
        name: "description",
        content:
          "Sync Talent exists to help international industrial companies make better hiring decisions in North America — through methodology, market intelligence and Executive Search.",
      },
      { property: "og:title", content: "About Sync Talent" },
      { property: "og:description", content: "Why Sync Talent exists, what we believe and how we work." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const philosophy = [
  {
    t: "The hiring decision comes first",
    d: "Before the search, we help you define what the decision actually is. Everything else follows from that clarity.",
  },
  {
    t: "Evidence over impression",
    d: "The Talent Lens™ replaces gut-feel screening with structured perspectives, cases and calibrated references.",
  },
  {
    t: "Institutional learning",
    d: "Every conversation feeds the Atlas Method™. Your engagement improves the next one — and the market view we bring to it.",
  },
  {
    t: "Industrial specialization",
    d: "Automation, packaging, industrial software, OEM, food processing, manufacturing and industrial equipment. Nothing else.",
  },
  {
    t: "International perspective",
    d: "Operating fluency across German, Swiss, Dutch, French, US and Canadian organizations working in Mexico.",
  },
  {
    t: "A human standard",
    d: "Direct, calm, professional. We speak to candidates and clients the way we would want to be spoken to.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About Sync Talent"
        title="We help organizations make better hiring decisions."
        description="Sync Talent is a boutique executive search firm and a knowledge institution for industrial hiring in North America. Executive Search is the commercial application. Decision intelligence is the purpose."
      />

      <section className="py-32 lg:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">Why we exist</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Executive Search deserves a better methodology.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-muted lg:text-lg">
            <p>
              International industrial companies expanding into Mexico are making increasingly
              consequential hiring decisions in a market they do not fully understand.
            </p>
            <p>
              The traditional Executive Search response — collect requirements, search, interview,
              recommend — treats hiring as a sourcing problem. Sync Talent treats it as a decision
              problem.
            </p>
            <p className="text-navy">
              Our mission is simple: help industrial companies make hiring decisions they can
              defend, explain and learn from.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-32 lg:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">Mission & Vision</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              An institution for industrial hiring intelligence.
            </h2>
          </div>
          <div className="space-y-8 text-base leading-relaxed text-ink-muted lg:text-lg">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.18em] text-navy">Mission</p>
              <p className="mt-3">
                Help international industrial companies make confident hiring decisions in North
                America through advisory, market intelligence and Executive Search.
              </p>
            </div>
            <div>
              <p className="font-display text-sm uppercase tracking-[0.18em] text-navy">Vision</p>
              <p className="mt-3">
                Establish decision intelligence as the standard for how industrial leaders think
                about hiring — beyond a single search, beyond a single market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 lg:py-40">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">The Atlas Philosophy</p>
            <h2 className="mt-4 text-3xl md:text-4xl">How we think.</h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {philosophy.map((v, i) => (
              <div key={v.t} className="bg-white p-8">
                <p className="font-display text-sm text-ink-muted">0{i + 1}</p>
                <h3 className="mt-4 text-lg">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-32 lg:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[10px] border border-hairline">
            <img
              src={aboutImg}
              alt="Industrial corridor across the Bajío region of Mexico"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Founders</p>
            <h2 className="mt-4 text-3xl md:text-4xl">A European operating standard, based in Mexico.</h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-ink-muted">
              <p>
                Sync Talent was founded by a German executive with an international management
                background, now based in Mexico and specialized in industrial hiring intelligence.
              </p>
              <p>
                The firm combines a European operating standard with a working understanding of
                how North American organizations actually operate — across the Bajío, Monterrey and
                Mexico City industrial corridors.
              </p>
              <p className="text-navy">
                We are not the largest recruiter in the market. We are the one asking a different
                question.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </SiteLayout>
  );
}
