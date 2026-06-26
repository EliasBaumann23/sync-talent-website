import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTABand } from "@/components/site/CTA";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Executive Search & Industrial Recruitment Mexico | Sync Talent" },
      {
        name: "description",
        content:
          "Executive search, direct hire, technical and commercial recruitment, market mapping, candidate assessment and reference checks for industrial companies in Mexico.",
      },
      { property: "og:title", content: "Services — Sync Talent" },
      { property: "og:description", content: "Strategic industrial hiring services for international companies in Mexico." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    name: "Executive Search",
    blurb:
      "Retained search for leadership roles: Country Managers, General Managers, VP Sales, Operations and Plant leadership.",
    points: [
      "Confidential mandates and discreet outreach",
      "Direct competitor and adjacent industry mapping",
      "Structured competency and leadership assessment",
    ],
  },
  {
    name: "Direct Hire Recruitment",
    blurb:
      "Full-cycle search for technical and commercial professionals across industrial sectors.",
    points: ["Active and passive candidate sourcing", "Bilingual screening (EN/DE/ES)", "Shortlist with written evaluations"],
  },
  {
    name: "Technical Recruitment",
    blurb:
      "Engineers, automation specialists, field service and applications profiles for OEMs and integrators.",
    points: ["Technical pre-qualification", "Hands-on, field and software profiles", "OEM and end-user backgrounds"],
  },
  {
    name: "Commercial Recruitment",
    blurb:
      "Sales Engineers, Regional Sales Managers, Service Managers and Account Directors with industrial credibility.",
    points: ["Quota and pipeline reference checks", "Channel and direct sales backgrounds", "International account exposure"],
  },
  {
    name: "Market Mapping",
    blurb:
      "Independent intelligence on competitor org structures, compensation and talent availability before you commit to a search.",
    points: ["Anonymous competitor mapping", "Compensation benchmarking", "Build-vs-buy decision support"],
  },
  {
    name: "Candidate Assessment",
    blurb:
      "Structured interviews, technical scoring and motivational evaluation built around your role scorecard.",
    points: ["Competency frameworks", "Case-based scenarios", "Cultural and language alignment"],
  },
  {
    name: "Background Checks",
    blurb:
      "Education, employment and legal verifications in line with Mexico and international compliance.",
    points: ["Identity and education verification", "Employment history", "Legal record checks"],
  },
  {
    name: "Reference Checks",
    blurb:
      "Structured reference conversations focused on performance, leadership and reliability — not formality.",
    points: ["Past manager and peer references", "Performance and conflict scenarios", "Written summaries with insights"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Services"
        title="Strategic hiring support for international industrial companies."
        description="Sync Talent is positioned as a long-term hiring partner, not a transactional recruiter. Our services are designed for international leaders building teams in Mexico and North America."
      />

      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-px border border-hairline bg-hairline md:grid-cols-2">
          {services.map((s, i) => (
            <article key={s.name} className="bg-white p-8 lg:p-10">
              <p className="font-display text-sm text-turquoise">0{i + 1}</p>
              <h2 className="mt-4 text-2xl lg:text-3xl">{s.name}</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted lg:text-base">{s.blurb}</p>
              <ul className="mt-6 space-y-3 text-sm text-navy">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-turquoise" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CTABand
        eyebrow="Engage Sync Talent"
        title="Tell us about the role."
        text="Share the role and we will respond with a search plan, timeline and market view."
        buttonText="Discuss Your Search"
      />
    </SiteLayout>
  );
}
