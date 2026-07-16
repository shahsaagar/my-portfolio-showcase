import { useEffect, useState } from "react";
import { profile } from "./data";

const links = [
  { href: "#about", label: "About" },
  { href: "#achievements", label: "Impact" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
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
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          {profile.name}
          <span className="ml-2 text-xs font-normal text-muted-foreground">
            {profile.credentials}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          download
          className="hidden md:inline-flex items-center rounded-md bg-foreground px-3.5 py-2 text-xs font-medium text-background hover:bg-foreground/85 transition-colors"
        >
          Download Resume
        </a>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex mt-2 items-center rounded-md bg-foreground px-3.5 py-2 text-xs font-medium text-background"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
