import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTABand } from "@/components/site/CTA";
import aboutImg from "@/assets/about-mexico.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Boutique Executive Search Mexico | Sync Talent" },
      {
        name: "description",
        content:
          "Sync Talent helps international industrial companies hire in Mexico. German founder, based in Mexico, specialized in industrial recruiting and talent intelligence.",
      },
      { property: "og:title", content: "About Sync Talent" },
      { property: "og:description", content: "Why Sync Talent exists and how we work." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { t: "Specialization", d: "Industrial sectors only — packaging, automation, machinery, software." },
  { t: "Transparency", d: "Honest assessments, even when they slow a search down." },
  { t: "Market Understanding", d: "Active intelligence on compensation, demand and competitors." },
  { t: "Long-term Partnerships", d: "We build with clients across multiple hires, not single mandates." },
  { t: "Structured Evaluation", d: "Competency-based methods over gut-feel screening." },
  { t: "International Mindset", d: "Native fluency across European and North American business cultures." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About"
        title="Built for international industrial companies hiring in Mexico."
        description="Sync Talent was created to solve a specific problem: finding candidates in Mexico who combine technical expertise, commercial maturity and international communication."
      />

      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-sm border border-hairline">
            <img src={aboutImg} alt="Monterrey industrial corridor" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow">Why We Exist</p>
            <h2 className="mt-4 text-3xl md:text-4xl">
              International companies often struggle to find the right industrial talent in Mexico.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-ink-muted">
              <p>
                Mexico has a deep industrial workforce — but the candidates who combine technical
                expertise, commercial maturity and international communication are rare and rarely
                on the open market.
              </p>
              <p>
                Generic recruiters move on volume; international companies need depth. Sync Talent
                operates as a boutique executive search firm focused exclusively on industrial
                sectors, with the language, culture and technical fluency international leaders
                expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">Founder</p>
            <h2 className="mt-4 text-3xl md:text-4xl">A German operator, based in Mexico.</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink-muted">
            <p>
              Sync Talent was founded by a German executive with an international management
              background, now based in Mexico and specialized in industrial recruiting and talent
              intelligence.
            </p>
            <p>
              The firm combines a German operating standard with a local industrial network across
              the Bajío, Monterrey and Mexico City corridors — and a working understanding of how
              European, US and Canadian organizations actually operate.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Values</p>
            <h2 className="mt-4 text-3xl md:text-4xl">How we work.</h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.t} className="bg-white p-8">
                <p className="font-display text-sm text-turquoise">0{i + 1}</p>
                <h3 className="mt-4 text-lg">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </SiteLayout>
  );
}
