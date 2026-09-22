import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
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

const principles = [
  {
    t: "Context before credentials",
    d: "A résumé only becomes meaningful when viewed against the business, role and environment in which someone will operate.",
  },
  {
    t: "Evidence before assumption",
    d: "Important hiring decisions should be supported by relevant evidence—not only impressions, job titles or familiarity.",
  },
  {
    t: "Clarity before certainty",
    d: "No hiring process eliminates uncertainty. A strong process makes that uncertainty visible and easier to discuss.",
  },
  {
    t: "Human judgement remains essential",
    d: "Structure and technology can improve the information available to decision-makers. The final decision still requires human judgement.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      {/* 01 — Hero */}
      <PageHeader
        eyebrow="About Sync Talent"
        title="Better hiring decisions begin with better questions."
        description="Sync Talent is an Executive Search company helping international industrial organizations hire leadership, commercial and specialized technical talent across Mexico and North America."
      />

      <section className="py-20 lg:py-24">
        <div className="container-x max-w-3xl">
          <p className="text-lg leading-relaxed text-ink-muted lg:text-xl">
            We combine hands-on search execution, industrial market understanding and structured
            decision-making to help clients approach important hires with greater clarity.
          </p>
        </div>
      </section>

      {/* 02 — Why Sync Talent Exists */}
      <section className="border-t border-hairline py-24 lg:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">Why we exist</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Search is only part of the hiring decision.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-muted lg:text-lg">
            <p>
              Companies often begin searching before they have fully defined what the role needs to
              accomplish, which evidence should matter and how candidates should be evaluated.
            </p>
            <p className="text-navy">
              We built Sync Talent around a different premise: important searches should begin with
              the hiring decision itself.
            </p>
            <p>
              That means understanding the business context before entering the market, structuring
              the search around evidence rather than intuition alone and helping decision-makers see
              both what they know and where uncertainty remains.
            </p>
            <p className="border-l-2 border-turquoise pl-5 font-display text-lg leading-snug text-navy lg:text-xl">
              The objective is not to remove judgement from hiring. It is to give judgement better
              information.
            </p>
            <p>
              <Link
                to="/atlas-method"
                className="text-sm font-medium text-steel underline-offset-4 transition-colors hover:text-turquoise hover:underline"
              >
                Explore the Atlas Method →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 03 — What We Believe */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">How we think</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              A few principles shape the way we work.
            </h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.t} className="bg-white p-8 lg:p-10">
                <h3 className="text-lg font-medium text-navy">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted lg:text-base">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — The People Behind Sync Talent */}
      <section className="py-24 lg:py-32">
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
                    Management and business development, his work focuses on the intersection
                    between international organizations, industrial markets and talent
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

        </div>
      </section>

      {/* 05 — Final CTA */}
      <CTABand
        title="Have an important hire ahead?"
        text="Start with a focused conversation about the role, business context and market."
        buttonText="Schedule a Discovery Experience"
        secondaryText="Explore Executive Search"
        secondaryTo="/services"
        externalHref="https://calendar.app.google/KoYen9KgR1fkMTPP7"
      />
    </SiteLayout>
  );
}
