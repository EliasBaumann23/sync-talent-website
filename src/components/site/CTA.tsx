import { Link } from "@tanstack/react-router";

export function CTABand({
  eyebrow = "Get in touch",
  title = "Looking to Build Your Team in Mexico?",
  text = "Let's discuss your hiring plans and what we are currently seeing in the market.",
  buttonText = "Schedule a Consultation",
  to = "/contact",
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  buttonText?: string;
  to?: string;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="container-x grid gap-10 py-20 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:py-28">
        <div>
          <p className="eyebrow text-turquoise">{eyebrow}</p>
          <h2 className="mt-4 text-3xl text-white md:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">{text}</p>
        </div>
        <div className="flex lg:justify-end">
          <Link
            to={to}
            className="inline-flex items-center rounded-sm bg-turquoise px-7 py-4 text-sm font-medium text-navy transition-colors hover:bg-white"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
