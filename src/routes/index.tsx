import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "../components/portfolio/Nav";
import { Footer } from "../components/portfolio/Sections";
import {
  achievements,
  certifications,
  education,
  experience,
  profile,
  skillGroups,
} from "../components/portfolio/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: { "@type": "PostalAddress", addressLocality: "Pune", addressCountry: "IN" },
  url: profile.github,
  sameAs: [profile.github, profile.linkedin].filter((u) => u && u !== "#"),
};

export const Route = createFileRoute("/")({
  head: () => ({
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  component: Index,
});

/* ------------------------- Bento primitives ------------------------- */

function Tile({
  children,
  className = "",
  id,
  eyebrow,
  num,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  eyebrow?: string;
  num?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-8 relative rounded-2xl border border-border bg-card/40 p-6 md:p-8 flex flex-col ${className}`}
    >
      {eyebrow && (
        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.28em] text-[var(--gold)] uppercase">
            {num} — {eyebrow}
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>
      )}
      {children}
    </section>
  );
}

/* ------------------------------ TILES ------------------------------ */

function HeroTile() {
  return (
    <Tile
      id="top"
      className="md:col-span-8 md:row-span-2 bg-gradient-to-br from-card/60 to-transparent"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">
        Portfolio · Est. 2005
      </p>
      <h1 className="mt-5 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tight text-foreground">
        Orchestrating{" "}
        <em className="italic text-[var(--emerald)]">multi-million</em> dollar
        programs with the calm of a conductor.
      </h1>
      <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground">
        {profile.name}, {profile.credentials} — {profile.title.toLowerCase()}{" "}
        with <span className="font-medium text-foreground">19+ years</span>{" "}
        guiding SAFe Agile and hybrid delivery across healthcare, insurance,
        and enterprise platforms.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-5">
        <a
          href={profile.resumeUrl}
          download
          className="inline-flex items-center gap-2 rounded-full bg-[var(--emerald-deep)] px-5 py-3 text-xs uppercase tracking-[0.22em] text-[var(--cream)] hover:bg-[var(--emerald)] transition-colors"
        >
          Download Résumé
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm text-foreground hover:text-[var(--emerald)] transition-colors"
        >
          <span className="border-b border-[var(--gold)] pb-0.5">
            Book a conversation
          </span>
          <span aria-hidden>→</span>
        </a>
      </div>
    </Tile>
  );
}

function QuickStats() {
  const stats = [
    { k: "Experience", v: "19+ yrs" },
    { k: "Largest program", v: "$15M" },
    { k: "Team span", v: "50+" },
    { k: "Certifications", v: certifications.length.toString() },
  ];
  return (
    <Tile className="md:col-span-4" eyebrow="At a glance" num="00">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-5">
        {stats.map((s) => (
          <div key={s.k}>
            <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">
              {s.k}
            </dt>
            <dd className="mt-1 font-serif text-2xl text-foreground">{s.v}</dd>
          </div>
        ))}
      </dl>
    </Tile>
  );
}

function CertsTile() {
  return (
    <Tile className="md:col-span-4" eyebrow="Certifications" num="0*">
      <ul className="flex flex-wrap gap-2">
        {certifications.map((c) => (
          <li
            key={c}
            className="rounded-full border border-[var(--gold)]/40 px-3 py-1 text-xs tracking-wide text-foreground/80"
          >
            {c}
          </li>
        ))}
      </ul>
      <p className="mt-auto pt-6 text-xs text-muted-foreground italic">
        {profile.status} · {profile.location}
      </p>
    </Tile>
  );
}

function AboutTile() {
  return (
    <Tile
      id="about"
      className="md:col-span-8"
      eyebrow="About"
      num="01"
    >
      <h2 className="font-serif text-2xl md:text-3xl leading-tight text-foreground">
        Program leadership grounded in{" "}
        <em className="italic text-[var(--emerald)]">outcomes</em>, not
        activity.
      </h2>
      <p className="mt-5 text-[15px] leading-[1.75] text-foreground/80">
        {profile.summary}
      </p>
      <blockquote className="mt-6 border-l-2 border-[var(--gold)] pl-4 font-serif italic text-lg text-foreground">
        "Continuous flow of value, averted release delays, and reduced
        programmatic risk."
      </blockquote>
    </Tile>
  );
}

function ImpactTile() {
  return (
    <Tile
      id="impact"
      className="md:col-span-12"
      eyebrow="Impact"
      num="02"
    >
      <h2 className="mb-6 font-serif text-2xl md:text-3xl text-foreground">
        Numbers that <em className="italic text-[var(--emerald)]">moved</em>{" "}
        the needle.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((a) => (
          <div
            key={a.label}
            className="rounded-xl border border-border bg-background/40 p-5"
          >
            <p className="font-serif italic text-4xl md:text-5xl leading-none text-[var(--emerald-deep)]">
              {a.value}
            </p>
            <p className="mt-3 text-sm font-medium text-foreground">
              {a.label}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{a.sub}</p>
          </div>
        ))}
      </div>
    </Tile>
  );
}

function extractYear(period: string) {
  const parts = period.split("–").map((s) => s.trim());
  const start = parts[0].split(" ").pop() ?? "";
  const end = parts[1] ?? "";
  return { start, end };
}

function ExperienceTile() {
  return (
    <Tile
      id="experience"
      className="md:col-span-12"
      eyebrow="Experience"
      num="03"
    >
      <h2 className="mb-8 font-serif text-2xl md:text-3xl text-foreground">
        Nineteen years across{" "}
        <em className="italic text-[var(--emerald)]">regulated</em> enterprise
        delivery.
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {experience.map((r) => {
          const { start, end } = extractYear(r.period);
          return (
            <article
              key={r.company + r.period}
              className="rounded-xl border border-border bg-background/40 p-5 flex flex-col"
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-serif text-2xl text-[var(--emerald-deep)] leading-none">
                  {start}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  → {end}
                </p>
              </div>
              <h3 className="mt-4 font-serif text-lg text-foreground leading-tight">
                {r.company}
              </h3>
              <p className="mt-1 text-xs text-[var(--emerald)] italic">
                {r.title}
              </p>
              {r.location && (
                <p className="mt-1 text-[11px] text-muted-foreground italic">
                  {r.location}
                </p>
              )}
              <ul className="mt-4 space-y-2">
                {r.bullets.slice(0, 2).map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[13px] leading-[1.6] text-foreground/75"
                  >
                    <span
                      className="mt-2 h-px w-3 shrink-0 bg-[var(--gold)]"
                      aria-hidden
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Tile>
  );
}

function SkillsTile() {
  return (
    <Tile
      id="skills"
      className="md:col-span-8"
      eyebrow="Skills"
      num="04"
    >
      <h2 className="mb-6 font-serif text-2xl md:text-3xl text-foreground">
        Toolbox and <em className="italic text-[var(--emerald)]">technical</em>{" "}
        depth.
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <div
            key={g.title}
            className="rounded-lg border border-border/60 bg-background/40 p-4"
          >
            <p className="font-serif text-sm text-foreground">{g.title}</p>
            <p className="mt-2 text-[12px] leading-[1.7] text-foreground/70">
              {g.items.map((s, i) => (
                <span key={s} className="whitespace-nowrap">
                  {s}
                  {i < g.items.length - 1 && (
                    <span className="text-[var(--gold)]"> · </span>
                  )}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </Tile>
  );
}

function EducationTile() {
  return (
    <Tile
      id="education"
      className="md:col-span-4"
      eyebrow="Education"
      num="05"
    >
      <h2 className="mb-5 font-serif text-2xl text-foreground">
        Formal <em className="italic text-[var(--emerald)]">training</em>.
      </h2>
      <div className="space-y-5">
        {education.map((e) => (
          <div
            key={e.school}
            className="border-t-2 border-[var(--gold)] pt-3"
          >
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
              {e.location}
            </p>
            <h3 className="mt-1 font-serif text-lg text-foreground leading-tight">
              {e.school}
            </h3>
            <p className="mt-1 text-sm text-[var(--emerald)] italic">
              {e.degree}
            </p>
            {e.track && (
              <p className="text-xs text-muted-foreground">{e.track}</p>
            )}
          </div>
        ))}
      </div>
    </Tile>
  );
}

function ContactTile() {
  const rows = [
    { k: "Email", v: profile.email, href: `mailto:${profile.email}` },
    {
      k: "Phone",
      v: profile.phone,
      href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
    },
    { k: "Location", v: profile.location },
    { k: "GitHub", v: "shahsaagar", href: profile.github },
    ...(profile.linkedin !== "#"
      ? [{ k: "LinkedIn", v: "Profile", href: profile.linkedin }]
      : []),
  ];
  return (
    <Tile
      id="contact"
      className="md:col-span-12 bg-gradient-to-br from-[var(--emerald-deep)]/10 to-transparent"
      eyebrow="Contact"
      num="06"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <p className="md:col-span-7 font-serif text-2xl md:text-3xl leading-[1.2] text-foreground">
          Let's build the{" "}
          <em className="italic text-[var(--emerald)]">next</em> program
          together. Open to Lead / Sr. Program Manager and TPM roles — best
          reached by{" "}
          <a
            href={`mailto:${profile.email}`}
            className="italic text-[var(--emerald)] underline decoration-[var(--gold)] decoration-2 underline-offset-4 hover:decoration-[var(--emerald)]"
          >
            email
          </a>
          .
        </p>
        <dl className="md:col-span-5 divide-y divide-border border-y border-border">
          {rows.map((row) => (
            <div
              key={row.k}
              className="flex items-baseline justify-between gap-4 py-3"
            >
              <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {row.k}
              </dt>
              <dd className="font-serif text-base text-foreground">
                {row.href ? (
                  <a
                    href={row.href}
                    className="hover:text-[var(--emerald)] transition-colors"
                  >
                    {row.v}
                  </a>
                ) : (
                  row.v
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Tile>
  );
}

/* ------------------------------ PAGE ------------------------------ */

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="lg:ml-[var(--sidebar-width)]">
        <main className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-min gap-4 md:gap-5">
            <HeroTile />
            <QuickStats />
            <CertsTile />
            <AboutTile />
            <ImpactTile />
            <ExperienceTile />
            <SkillsTile />
            <EducationTile />
            <ContactTile />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
