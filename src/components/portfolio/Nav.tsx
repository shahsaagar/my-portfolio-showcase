import { useEffect, useState } from "react";
import { certifications, profile } from "./data";

const links = [
  { href: "#about", label: "About", num: "01" },
  { href: "#impact", label: "Impact", num: "02" },
  { href: "#experience", label: "Experience", num: "03" },
  { href: "#skills", label: "Skills", num: "04" },
  { href: "#education", label: "Education", num: "05" },
  { href: "#contact", label: "Contact", num: "06" },
];

const initials = profile.name
  .split(" ")
  .map((p) => p[0])
  .join("")
  .slice(0, 2);

export function Sidebar() {
  const [active, setActive] = useState<string>("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/90 backdrop-blur px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--emerald-deep)] font-serif text-[var(--cream)] text-sm">
            {initials}
          </span>
          <span className="font-serif text-lg text-foreground">{profile.name}</span>
        </a>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="rounded p-2 text-foreground"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden fixed inset-x-0 top-[57px] z-40 border-b border-border bg-background">
          <ul className="px-6 py-4 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 py-2 text-foreground"
                >
                  <span className="text-xs text-[var(--gold)] font-mono">{l.num}</span>
                  <span className="font-serif text-lg">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-[var(--sidebar-width)] flex-col justify-between bg-[var(--emerald-deep)] text-[var(--cream)] px-10 py-12">
        <div>
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-full border border-[var(--gold)]/50 font-serif text-2xl text-[var(--gold)] italic">
              {initials}
            </span>
            <div>
              <p className="font-serif text-2xl leading-none text-[var(--cream)]">
                {profile.name.split(" ")[0]}
              </p>
              <p className="font-serif text-2xl leading-none text-[var(--cream)]">
                {profile.name.split(" ").slice(1).join(" ")}
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
            {profile.credentials}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-[var(--cream)]/75">
            {profile.title}
            <br />
            <span className="italic text-[var(--cream)]/60">{profile.tagline}</span>
          </p>

          <div className="mt-10 h-px bg-[var(--gold)]/25" />

          <nav className="mt-8">
            <ul className="space-y-4">
              {links.map((l) => {
                const isActive = active === l.href.slice(1);
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="group flex items-baseline gap-4 text-sm"
                    >
                      <span
                        className={`font-mono text-[10px] tracking-widest transition-colors ${
                          isActive ? "text-[var(--gold)]" : "text-[var(--cream)]/40"
                        }`}
                      >
                        {l.num}
                      </span>
                      <span
                        className={`relative pb-1 transition-colors ${
                          isActive
                            ? "text-[var(--cream)]"
                            : "text-[var(--cream)]/60 group-hover:text-[var(--cream)]"
                        }`}
                      >
                        {l.label}
                        <span
                          className={`absolute -bottom-0.5 left-0 h-px bg-[var(--gold)] transition-all ${
                            isActive ? "w-8" : "w-0 group-hover:w-4"
                          }`}
                        />
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5">
            {certifications.map((c) => (
              <span
                key={c}
                className="rounded-full border border-[var(--gold)]/40 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[var(--cream)]/80"
              >
                {c}
              </span>
            ))}
          </div>

          <a
            href={profile.resumeUrl}
            download
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-none border border-[var(--gold)] px-4 py-3 text-xs uppercase tracking-[0.2em] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--emerald-deep)] transition-colors"
          >
            Download Résumé
          </a>

          <div className="mt-6 flex gap-4 text-xs text-[var(--cream)]/60">
            <a href={`mailto:${profile.email}`} className="hover:text-[var(--gold)]">
              Email
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-[var(--gold)]">
              GitHub
            </a>
            {profile.linkedin !== "#" && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--gold)]">
                LinkedIn
              </a>
            )}
          </div>

          <p className="mt-6 text-[10px] uppercase tracking-widest text-[var(--cream)]/40">
            {profile.location} · {profile.status}
          </p>
        </div>
      </aside>
    </>
  );
}
