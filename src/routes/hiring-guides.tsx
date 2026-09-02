import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTABand } from "@/components/site/CTA";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/hiring-guides")({
  head: () => ({
    meta: [
      { title: "Hiring Guides — Industrial Recruitment Mexico | Sync Talent" },
      {
        name: "description",
        content:
          "Guides on hiring engineers, sales engineers, field service engineers in Mexico, structuring technical interviews, hiring timelines and evaluating bilingual technical talent.",
      },
      { property: "og:title", content: "Hiring Guides — Sync Talent" },
      { property: "og:description", content: "Playbooks for hiring industrial talent in Mexico." },
      { property: "og:url", content: "/hiring-guides" },
    ],
    links: [{ rel: "canonical", href: "/hiring-guides" }],
  }),
  component: HiringGuidesPage,
});

const guides = [
  {
    title: "Hiring Engineers in Mexico",
    text: "Where to find them, what they expect, and how international companies should structure offers.",
  },
  {
    title: "Hiring Sales Engineers in Mexico",
    text: "Commercial credibility, technical depth and bilingual fluency — how to evaluate all three.",
  },
  {
    title: "Hiring Field Service Engineers in Mexico",
    text: "Travel realities, certifications and the most common mistakes international OEMs make.",
  },
  {
    title: "Hiring in Mexico for German Companies",
    text: "Cultural alignment, decision-making styles and how to present your brand to Mexican talent.",
  },
  {
    title: "How to Structure Interviews for Technical Roles",
    text: "Competency frameworks, case-based scenarios and what to ask for at each round.",
  },
  {
    title: "Mexico Hiring Timeline for Industrial Companies",
    text: "Realistic timelines from kick-off to onboarding for technical and leadership roles.",
  },
  {
    title: "How to Evaluate Bilingual Technical Talent",
    text: "Practical methods to assess EN/ES/DE language fluency in technical and commercial contexts.",
  },
];

function HiringGuidesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Hiring Guides"
        title="Playbooks for hiring industrial talent in Mexico."
        description="Step-by-step guides for international leaders running technical and commercial searches in Mexico and North America — written from active recruiting experience."
      />

      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g, i) => (
            <Link
              key={g.title}
              to="/contact"
              className="group flex flex-col gap-5 rounded-sm border border-hairline bg-white p-8 transition-colors hover:border-turquoise"
            >
              <p className="font-display text-sm text-turquoise">
                Guide · {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="text-xl leading-snug">{g.title}</h2>
              <p className="text-sm leading-relaxed text-ink-muted">{g.text}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-navy transition-colors group-hover:text-turquoise">
                Read guide <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTABand secondaryText="" />
    </SiteLayout>
  );
}
