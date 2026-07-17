import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Executive Search" },
  { to: "/industries", label: "Industries" },
  { to: "/knowledge-hub", label: "Knowledge Hub" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-hairline"
          : "bg-white/0 border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-ink/80">
          {nav.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="link-underline transition-colors hover:text-turquoise"
              activeProps={{ className: "text-navy" }}
              activeOptions={{ exact: i.to === "/" }}
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-sm bg-navy px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-turquoise"
          >
            Contact us
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden inline-flex items-center justify-center rounded-sm p-2 text-navy"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-hairline bg-white">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-ink hover:text-turquoise"
              >
                {i.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-sm bg-navy px-4 py-3 text-sm font-medium text-white"
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
