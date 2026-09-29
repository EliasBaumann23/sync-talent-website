import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AtlasDivider } from "@/components/site/AtlasLine";
import { CTABand } from "@/components/site/CTA";
import logoHennecke from "@/assets/Hennecke-2.png";
import { SITE_NAME, SITE_URL, absoluteUrl, pageHead } from "@/lib/seo";

const PATH = "/selected-engagements/hennecke-head-of-service-mexico";
const TITLE = "HENNECKE Head of Service Mexico — Selected Engagement | Sync Talent";
const DESCRIPTION =
  "How Sync Talent supported HENNECKE in appointing a Head of Service / Site Manager in Mexico, combining technical service leadership with broader site and commercial responsibility.";
const BOOKING = "https://calendar.app.google/KoYen9KgR1fkMTPP7";
const HEADLINE = "Turning a replacement hire into a broader leadership mandate.";

export const Route = createFileRoute("/selected-engagements/hennecke-head-of-service-mexico")({
  head: () => ({
    ...pageHead({ path: PATH, title: TITLE, description: DESCRIPTION, ogType: "article" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: HEADLINE,
          description: DESCRIPTION,
          mainEntityOfPage: absoluteUrl(PATH),
          about: { "@type": "Organization", name: "HENNECKE" },
          publisher: { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/` },
        }),
      },
    ],
  }),
  component: EngagementPage,
});

const facts: [string, string][] = [
  ["Position", "Head of Service / Site Manager Mexico"],
  ["Location", "Querétaro, Mexico"],
  ["Search type", "Executive Search"],
  ["Focus", "Service Leadership / Site Management"],
  ["Outcome", "Successful Placement"],
  ["Completed", "July 2026"],
];

const snapshot: [string, string][] = [
  ["Position", "Head of Service / Site Manager Mexico"],
  ["Industry", "Industrial Machinery"],
  ["Location", "Querétaro, Mexico"],
  ["Mandate", "Service Leadership + Site Management"],
  ["International Interface", "Mexico / Germany"],
  ["Outcome", "Successful Placement"],
  ["Completed", "July 2026"],
];

const dimensions = [
  "Technical & Service Expertise",
  "People Leadership",
  "Customer & Commercial Orientation",
  "Site & Organizational Responsibility",
];

function Section({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-16 border-t border-hairline pt-12">
      <p className="eyebrow text-turquoise">{label}</p>
      <h2 className="mt-4 text-2xl leading-tight md:text-3xl">{title}</h2>
      <div className="mt-6 space-y-5 text-base leading-relaxed text-ink">{children}</div>
    </section>
  );
}

function EngagementPage() {
  return (
    <SiteLayout>
      <header className="border-b border-hairline bg-white">
        <div className="container-x pt-20 pb-14 lg:pt-28 lg:pb-16">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="eyebrow text-turquoise">Selected Engagement</p>
              <img src={logoHennecke} alt="HENNECKE logo" className="h-8 w-auto opacity-70" loading="eager" />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
              HENNECKE · Industrial Machinery
            </p>
            <h1 className="mt-5 text-4xl leading-[1.08] tracking-tight md:text-5xl">{HEADLINE}</h1>
            <p className="mt-6 text-sm text-ink-muted">
              Querétaro, Mexico · Executive Search · Successful Placement · July 2026
            </p>
            <dl className="mt-10 grid gap-x-8 gap-y-5 border-t border-hairline pt-6 sm:grid-cols-2 lg:grid-cols-3">
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">{k}</dt>
                  <dd className="mt-1 text-sm text-navy">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </header>

      <article className="py-16 lg:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-5 text-lg leading-relaxed text-ink">
              <p>
                Following the departure of its previous Service Manager, HENNECKE needed to appoint a new leader for its service organization in Mexico.
              </p>
              <p>
                Rather than treating the search as a straightforward replacement, the company used the transition as an opportunity to define a broader leadership mandate from the outset.
              </p>
              <p>
                The new position combined responsibility for the local service organization with wider site-management responsibilities, customer interaction, coordination with headquarters in Germany and support for the continued commercial development of the Mexican market.
              </p>
            </div>

            <Section
              label="The Hiring Challenge"
              title="Finding technical credibility, leadership and broader business responsibility in one profile."
            >
              <p>
                The challenge was finding the right combination of technical credibility, service leadership and broader business responsibility.
              </p>
              <p>
                Candidates needed sufficient technical understanding to operate credibly within an industrial machinery environment while also being capable of leading people, managing customer relationships and representing the Mexican organization within an international structure.
              </p>
              <p>The search also required a commercial dimension.</p>
              <p>
                The successful profile needed to understand that service leadership was not only about technical execution, but also about customer development, identifying opportunities and supporting the continued growth of the business in Mexico.
              </p>
              <p>
                This combination made the relevant candidate market significantly more specific than the title “Service Manager” alone would suggest.
              </p>
            </Section>

            <blockquote className="my-16 border-l-2 border-turquoise pl-6 font-display text-2xl leading-snug text-navy md:text-3xl">
              “A replacement need can also be an opportunity to define what the organization needs next.”
            </blockquote>

            <Section label="Our Approach" title="Searching beyond the conventional Service Manager profile.">
              <p>
                Sync Talent mapped candidates across industrial machinery, automation and other service-intensive technical environments.
              </p>
              <p>
                The evaluation focused on several dimensions simultaneously: technical and service experience, people leadership, customer orientation, commercial capabilities, communication with international stakeholders and the ability to take broader responsibility for the local organization.
              </p>
              <p>
                Particular attention was given to the balance between hands-on operational understanding and management capability.
              </p>
              <p>
                Some candidates brought strong service backgrounds but less exposure to broader commercial or organizational responsibility.
              </p>
              <p>
                Others had more general management experience but were further removed from the technical and operational realities of industrial service.
              </p>
              <p>The search therefore focused on identifying a profile capable of connecting both sides of the mandate.</p>
            </Section>

            <figure className="mt-14 rounded-[10px] border border-hairline bg-surface p-8 lg:p-10">
              <figcaption className="text-[12px] font-semibold uppercase tracking-[0.18em] text-navy">
                What the mandate needed to connect
              </figcaption>
              <div className="mt-8 grid gap-px overflow-hidden rounded-[8px] border border-hairline bg-hairline sm:grid-cols-2">
                {dimensions.map((d) => (
                  <div key={d} className="flex items-center gap-3 bg-white p-6">
                    <span className="block h-1.5 w-1.5 shrink-0 rounded-full bg-turquoise" />
                    <span className="text-sm font-medium text-navy">{d}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[12px] uppercase tracking-[0.14em] text-ink-muted">
                Context · International collaboration with headquarters in Germany
              </p>
            </figure>

            <Section label="The Outcome" title="A successful appointment for the broader mandate.">
              <p>
                The search concluded successfully with the appointment of a new Head of Service / Site Manager Mexico in July 2026.
              </p>
              <p>
                The selected candidate brought the combination of technical industry experience, leadership capability, customer orientation and broader management perspective required for the position.
              </p>
              <p>The new leader's onboarding is progressing well following the appointment.</p>
              <p>
                The engagement illustrates how a replacement need can become an opportunity to define a role around the organization's future requirements rather than simply replicate the position that existed before.
              </p>
            </Section>

            <dl className="mt-12 grid gap-px overflow-hidden rounded-[10px] border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
              {snapshot.map(([k, v]) => (
                <div key={k} className="bg-white p-6">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">{k}</dt>
                  <dd className="mt-2 text-sm text-navy">{v}</dd>
                </div>
              ))}
            </dl>

            <section className="mt-16 border-y border-hairline py-12">
              <p className="eyebrow text-turquoise">Key Takeaway</p>
              <p className="mt-5 font-display text-2xl leading-snug text-navy md:text-3xl">
                “A replacement search does not necessarily require replacing the same role. Leadership transitions can create an opportunity to define what the organization needs next.”
              </p>
            </section>

            <section className="mt-16">
              <h2 className="text-2xl leading-tight">Defining the mandate before entering the market.</h2>
              <p className="mt-5 text-base leading-relaxed text-ink">
                For leadership searches, the job title alone rarely captures the complete hiring decision.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink">
                In this engagement, technical service expertise, people leadership, commercial orientation and broader site responsibility needed to be considered together before the relevant candidate market could be defined.
              </p>
              <Link
                to="/atlas-method"
                className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-navy transition-colors hover:text-turquoise"
              >
                Explore the Atlas Method <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </section>

            <AtlasDivider className="mt-16" />
          </div>
        </div>
      </article>

      <CTABand
        eyebrow="Discovery Experience™"
        title="Facing a critical leadership hire in Mexico?"
        text="The Discovery Experience helps define the mandate, the relevant talent market and the evidence needed before the search begins."
        buttonText="Schedule a Discovery Experience"
        externalHref={BOOKING}
        secondaryText="Explore Executive Search →"
        secondaryTo="/services"
      />
    </SiteLayout>
  );
}
