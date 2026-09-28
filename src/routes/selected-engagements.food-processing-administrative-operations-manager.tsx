import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AtlasDivider } from "@/components/site/AtlasLine";
import { CTABand } from "@/components/site/CTA";
import { SITE_NAME, SITE_URL, absoluteUrl, pageHead } from "@/lib/seo";

const PATH = "/selected-engagements/food-processing-administrative-operations-manager";
const TITLE = "Administrative & Operations Manager — Food Processing | Sync Talent";
const DESCRIPTION =
  "How Sync Talent helped a family-owned food processing company in Mexico appoint an Administrative & Operations Manager to strengthen its organizational structure.";
const BOOKING = "https://calendar.app.google/KoYen9KgR1fkMTPP7";

export const Route = createFileRoute(
  "/selected-engagements/food-processing-administrative-operations-manager",
)({
  head: () => ({
    ...pageHead({ path: PATH, title: TITLE, description: DESCRIPTION, ogType: "article" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Professionalizing leadership in a growing family business.",
          description: DESCRIPTION,
          mainEntityOfPage: absoluteUrl(PATH),
          publisher: { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/` },
        }),
      },
    ],
  }),
  component: EngagementPage,
});

const facts: [string, string][] = [
  ["Position", "Administrative & Operations Manager"],
  ["Location", "State of Mexico, Mexico"],
  ["Search type", "Executive Search"],
  ["Outcome", "Successful Placement"],
  ["Date", "September 2026"],
];

const outcome: [string, string][] = [
  ["Position", "Administrative & Operations Manager"],
  ["Industry", "Food Processing"],
  ["Company", "Family-owned · 40+ years"],
  ["Organization", "~100 employees"],
  ["Outcome", "Successful Placement"],
  ["Start", "September 2026"],
];

const dimensions = [
  "Administrative Structure",
  "Operational Understanding",
  "Practical Judgement",
  "Organizational Adaptability",
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
            <p className="eyebrow text-turquoise">Selected Engagement</p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Confidential Client · Food Processing
            </p>
            <h1 className="mt-5 text-4xl leading-[1.08] tracking-tight md:text-5xl">
              Professionalizing leadership in a growing family business.
            </h1>
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
                After more than 40 years of growth, this family-owned food processing company had reached a stage where parts of its administrative and operational structure required greater professionalization.
              </p>
              <p>
                With approximately 100 employees, the organization was looking for a leader who could strengthen processes, improve coordination across functions and bring greater structure to the business — without losing the agility and practicality of an owner-led company.
              </p>
            </div>

            <Section label="The Hiring Challenge" title="Finding the balance between structure and pragmatism.">
              <p>The challenge went beyond finding an experienced administrative manager.</p>
              <p>
                The role required someone who could operate across administrative and operational functions, introduce greater process discipline and work effectively within the dynamics of an established family business.
              </p>
              <p>
                Candidates coming from highly corporate environments could bring sophisticated processes, but not necessarily the flexibility required by the organization.
              </p>
              <p>
                At the same time, profiles accustomed to less structured environments might fit the culture but lack the experience needed to professionalize the operation.
              </p>
              <p>The search therefore focused on finding the right balance between structure and pragmatism.</p>
            </Section>

            <blockquote className="my-16 border-l-2 border-turquoise pl-6 font-display text-2xl leading-snug text-navy md:text-3xl">
              “The search was defined around what the organization needed for its next stage — not simply around a conventional job description.”
            </blockquote>

            <Section label="Our Approach" title="Evaluating how candidates think, not only what they have done.">
              <p>
                Sync Talent evaluated candidates from administrative, operational and process-improvement backgrounds, looking for a balanced combination of experience, execution capability and adaptability to the company's specific environment.
              </p>
              <p>The assessment went beyond CV review and interviews.</p>
              <p>
                Finalists completed practical business cases designed to provide additional evidence of how they structured problems, established priorities and translated their previous experience into decisions relevant to real organizational situations.
              </p>
              <p>
                This allowed the evaluation to focus not only on the positions candidates had held previously, but also on how they thought, exercised judgement and translated experience into actions relevant to the organization.
              </p>
            </Section>

            <figure className="mt-14 rounded-[10px] border border-hairline bg-surface p-8 lg:p-10">
              <figcaption className="text-[12px] font-semibold uppercase tracking-[0.18em] text-navy">
                What the search needed to balance
              </figcaption>
              <div className="relative mt-8 grid gap-px overflow-hidden rounded-[8px] border border-hairline bg-hairline sm:grid-cols-2">
                {dimensions.map((d) => (
                  <div key={d} className="flex items-center gap-3 bg-white p-6">
                    <span className="block h-1.5 w-1.5 shrink-0 rounded-full bg-turquoise" />
                    <span className="text-sm font-medium text-navy">{d}</span>
                  </div>
                ))}
              </div>
            </figure>

            <Section label="The Outcome" title="A successful appointment for the company's next stage.">
              <p>
                The search resulted in the successful appointment of a new Administrative & Operations Manager, who joined the company in September 2026.
              </p>
              <p>
                The selected candidate demonstrated the combination of administrative perspective, operational understanding and practical judgement required for the role, performing strongly across both the interview and case-assessment stages.
              </p>
              <p>
                As the appointment is recent, Sync Talent does not yet attribute long-term business outcomes to the hire.
              </p>
              <p>
                The engagement does, however, illustrate the value of defining a leadership role around the organization's next stage rather than around a conventional job description.
              </p>
            </Section>

            <dl className="mt-12 grid gap-px overflow-hidden rounded-[10px] border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
              {outcome.map(([k, v]) => (
                <div key={k} className="bg-white p-6">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">{k}</dt>
                  <dd className="mt-2 text-sm text-navy">{v}</dd>
                </div>
              ))}
            </dl>

            <section className="mt-16 border-y border-hairline py-12">
              <p className="eyebrow text-turquoise">Key Takeaway</p>
              <p className="mt-5 font-display text-2xl leading-snug text-navy md:text-3xl">
                “Professionalization does not necessarily mean adding more complexity. The right leadership hire can introduce structure while preserving the agility that helped a family business grow in the first place.”
              </p>
            </section>

            <section className="mt-16">
              <h2 className="text-2xl leading-tight">Evidence beyond the CV.</h2>
              <p className="mt-5 text-base leading-relaxed text-ink">
                For this engagement, candidate evaluation combined structured interviews with practical business cases, providing additional evidence of how finalists approached problems, established priorities and applied their experience to the organization's context.
              </p>
              <Link
                to="/atlas-method"
                className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-navy transition-colors hover:text-turquoise"
              >
                Explore the Atlas Method <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </section>

            <aside className="mt-16 border-t border-hairline pt-8 text-sm leading-relaxed text-ink-muted">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy">Client Confidentiality</p>
              <p className="mt-3">
                At the client's request, the company name and the identity of the appointed candidate remain confidential. The engagement is presented with permission using only the business context relevant to the hiring challenge.
              </p>
            </aside>

            <AtlasDivider className="mt-16" />
          </div>
        </div>
      </article>

      <CTABand
        eyebrow="Discovery Experience™"
        title="Facing a critical leadership hire in Mexico?"
        text="The Discovery Experience helps define the hiring decision, the relevant talent market and the evidence needed before the search begins."
        buttonText="Schedule a Discovery Experience"
        externalHref={BOOKING}
        secondaryText="Explore Executive Search →"
        secondaryTo="/services"
      />
    </SiteLayout>
  );
}
