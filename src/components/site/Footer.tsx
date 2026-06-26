import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Linkedin, Mail } from "lucide-react";

const cols = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/services", label: "Services" },
      { to: "/industries", label: "Industries" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Knowledge",
    links: [
      { to: "/knowledge-hub", label: "Knowledge Hub" },
      { to: "/salary-guides", label: "Salary Guides" },
      { to: "/hiring-guides", label: "Hiring Guides" },
    ],
  },
  {
    title: "Specialization",
    links: [
      { to: "/industries", label: "Industrial Recruitment" },
      { to: "/services", label: "Executive Search" },
      { to: "/services", label: "Market Mapping" },
      { to: "/services", label: "Candidate Assessment" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-32 border-t border-hairline bg-navy text-white/80">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Logo invert />
            <p className="mt-6 text-sm leading-relaxed text-white/65">
              Boutique executive search and industrial recruitment for international companies
              building technical, commercial and leadership teams in Mexico.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 text-white/80 transition-colors hover:border-turquoise hover:text-turquoise"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@synctalent.mx"
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 text-white/80 transition-colors hover:border-turquoise hover:text-turquoise"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-turquoise">
                {c.title}
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-white/75 transition-colors hover:text-turquoise">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sync Talent. Industrial executive search, Mexico & North America.</p>
          <p>Monterrey · México</p>
        </div>
      </div>
    </footer>
  );
}
