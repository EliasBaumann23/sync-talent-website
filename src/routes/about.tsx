import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTABand } from "@/components/site/CTA";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="eyebrow">The people behind Sync Talent</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">Built on judgement. Led by people.</h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-ink-muted lg:text-lg">
              <p>
                Sync Talent combines international business perspective, local market knowledge
                and structured search methodology to help industrial companies make better hiring
                decisions.
              </p>
              <p>
                Our work is hands-on. The people leading the search remain directly involved from
                the first conversation through candidate evaluation and the final hiring decision.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-8 lg:mt-20 lg:gap-14">
            <article className="border-t border-hairline pt-5">
              <div className="aspect-square w-2/3 overflow-hidden rounded-full bg-surface-light">
                <img
                  src="/images/team/elias-baumann.png"
                  alt="Elias Baumann, Co-Founder and Managing Director at Sync Talent"
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="pt-7">
                <h3 className="text-2xl">Elias Baumann</h3>
                <p className="mt-2 text-sm font-medium text-steel">Co-Founder &amp; Managing Director</p>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-muted lg:text-base">
                  <p>Elias leads Sync Talent's Executive Search and Industrial Hiring Intelligence activities.</p>
                  <p>
                    Based in Mexico, he works with international industrial companies hiring
                    leadership, commercial and technical talent across Mexico and North America.
                  </p>
                  <p>
                    With a German-Mexican academic and professional background in International
                    Management and business development, his work focuses on understanding the
                    intersection between international organizations, industrial markets and talent
                    in Mexico.
                  </p>
                  <p>He works across English, Spanish and German.</p>
                </div>
                <p className="mt-6 border-t border-hairline pt-4 text-xs leading-relaxed text-ink-muted">
                  Mexico City · Executive Search · Industrial Markets · EN / ES / DE
                </p>
              </div>
            </article>

            <article className="border-t border-hairline pt-5">
              <div className="aspect-square w-2/3 overflow-hidden rounded-full bg-surface-light">
                <img
                  src="/images/team/daniela-cardoso.png"
                  alt="Daniela Cardoso, Talent Strategy and Search at Sync Talent"
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="pt-7">
                <h3 className="text-2xl">Daniela Cardoso</h3>
                <p className="mt-2 text-sm font-medium text-steel">Talent Strategy &amp; Search</p>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-muted lg:text-base">
                  <p>
                    Daniela works across talent strategy, candidate identification and search
                    execution at Sync Talent.
                  </p>
                  <p>
                    Her work combines an understanding of the Latin American talent market with
                    hands-on candidate engagement and structured evaluation, supporting searches
                    from initial market mapping through candidate presentation.
                  </p>
                  <p>
                    She plays a central role in creating a candidate experience that is
                    professional, transparent and human throughout the search process.
                  </p>
                </div>
              </div>
            </article>
          </div>

          <p className="mt-20 max-w-4xl border-t border-navy pt-8 font-display text-2xl leading-snug text-navy md:text-3xl">
            We are not trying to build the largest recruiting firm. We are building a better way
            to make hiring decisions.
          </p>
        </div>
      </section>

      <CTABand
        buttonText="Schedule a Discovery Experience"
        secondaryText="Contact us"
        secondaryTo="/contact"
        externalHref="https://calendar.app.google/KoYen9KgR1fkMTPP7"
      />
    </SiteLayout>
  );
}
