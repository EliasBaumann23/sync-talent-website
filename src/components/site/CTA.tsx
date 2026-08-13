import { Link } from "@tanstack/react-router";
import { AtlasDivider } from "./AtlasLine";

export function CTABand({
  eyebrow = "The Discovery Experience™",
  title = "Better hiring decisions begin with a structured conversation.",
  text = "The Discovery Experience™ is how international industrial leaders align on the role, the market and the decision criteria before a single candidate is approached.",
  buttonText = "Contact us",
  secondaryText = "Continue to the Discovery Experience™",
  to = "/contact",
  secondaryTo = "/discovery-experience",
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  buttonText?: string;
  secondaryText?: string;
  to?: string;
  secondaryTo?: string;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="container-x py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-turquoise">{eyebrow}</p>
          <h2 className="mt-5 text-3xl leading-[1.1] text-white md:text-4xl lg:text-5xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
            {text}
          </p>
          <AtlasDivider className="mt-10 text-white" />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to={to}
              className="inline-flex items-center rounded-[10px] bg-turquoise px-7 py-4 text-sm font-medium text-navy transition-colors hover:bg-white"
            >
              {buttonText}
            </Link>
          {secondaryText && (
            <Link
              to={secondaryTo}
              className="inline-flex items-center rounded-[10px] border border-white/30 px-7 py-4 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/5"
            >
              {secondaryText}
            </Link>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}

