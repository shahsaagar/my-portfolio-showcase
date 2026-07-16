import {
  achievements,
  certifications,
  education,
  experience,
  profile,
  skillGroups,
} from "./data";

function SectionHeader({
  eyebrow,
  num,
  title,
}: {
  eyebrow: string;
  num: string;
  title: React.ReactNode;
}) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-4">
        <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--gold)]">
          {num} — {eyebrow.toUpperCase()}
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-foreground max-w-3xl">
        {title}
      </h2>
    </div>
  );
}

/* ------------------------------- HERO ------------------------------- */

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="px-6 md:px-16 pt-16 md:pt-28 pb-20">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">
          Portfolio · Est. 2005
        </p>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.98] tracking-tight text-foreground">
          Orchestrating <em className="italic text-[var(--emerald)]">multi-million</em>
          <br />
          dollar programs with
          <br />
          the calm of a conductor.
        </h1>
        <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {profile.name}, {profile.credentials} — {profile.title.toLowerCase()} with
          <span className="font-medium text-foreground"> 19+ years</span> guiding
          SAFe Agile and hybrid delivery across healthcare, insurance, and enterprise
          platforms.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 bg-[var(--emerald-deep)] px-6 py-3 text-xs uppercase tracking-[0.22em] text-[var(--cream)] hover:bg-[var(--emerald)] transition-colors"
          >
            Download Résumé
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-[var(--emerald)] transition-colors"
          >
            <span className="border-b border-[var(--gold)] pb-0.5">Book a conversation</span>
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-8 max-w-3xl border-t border-border pt-8">
          {[
            { k: "Experience", v: "19+ yrs" },
            { k: "Largest program", v: "$15M" },
            { k: "Team span", v: "50+" },
            { k: "Certifications", v: certifications.length.toString() },
          ].map((s) => (
            <div key={s.k}>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {s.k}
              </p>
              <p className="mt-1 font-serif text-2xl text-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- ABOUT ------------------------------- */

export function About() {
  return (
    <section id="about" className="scroll-mt-8">
      <div className="px-6 md:px-16 py-24 border-t border-border">
        <SectionHeader
          eyebrow="About"
          num="01"
          title={<>Program leadership grounded in <em className="italic text-[var(--emerald)]">outcomes</em>, not activity.</>}
        />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <p className="md:col-span-8 text-lg leading-[1.75] text-foreground/80">
            {profile.summary}
          </p>
          <aside className="md:col-span-4 border-l-2 border-[var(--gold)] pl-6">
            <p className="font-serif italic text-2xl leading-snug text-foreground">
              "Continuous flow of value, averted release delays, and reduced
              programmatic risk."
            </p>
            <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
              Operating principle
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- IMPACT ------------------------------- */

export function Achievements() {
  return (
    <section id="impact" className="scroll-mt-8">
      <div className="px-6 md:px-16 py-24 border-t border-border">
        <SectionHeader
          eyebrow="Impact"
          num="02"
          title={<>Numbers that <em className="italic text-[var(--emerald)]">moved</em> the needle.</>}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <div
              key={a.label}
              className={`p-8 border-border ${
                i % 3 !== 2 ? "lg:border-r" : ""
              } ${i % 2 !== 1 ? "sm:border-r lg:border-r" : ""} ${
                i < achievements.length - (achievements.length % 3 || 3)
                  ? "border-b"
                  : ""
              }`}
            >
              <p className="font-serif italic text-5xl md:text-6xl leading-none text-[var(--emerald-deep)]">
                {a.value}
              </p>
              <p className="mt-4 text-sm font-medium text-foreground">{a.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{a.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- EXPERIENCE ------------------------------- */

function extractYear(period: string) {
  const parts = period.split("–").map((s) => s.trim());
  const start = parts[0].split(" ").pop() ?? "";
  const end = parts[1] ?? "";
  return { start, end };
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-8">
      <div className="px-6 md:px-16 py-24 border-t border-border">
        <SectionHeader
          eyebrow="Experience"
          num="03"
          title={<>Nineteen years across <em className="italic text-[var(--emerald)]">regulated</em> enterprise delivery.</>}
        />
        <div className="space-y-16">
          {experience.map((r) => {
            const { start, end } = extractYear(r.period);
            return (
              <article
                key={r.company + r.period}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 pb-16 border-b border-border last:border-b-0 last:pb-0"
              >
                <div className="md:col-span-3">
                  <p className="font-serif text-3xl text-[var(--emerald-deep)] leading-none">
                    {start}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    → {end}
                  </p>
                  {r.location && (
                    <p className="mt-4 text-xs text-muted-foreground italic">
                      {r.location}
                    </p>
                  )}
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-tight">
                    {r.company}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--emerald)] italic">{r.title}</p>
                  <ul className="mt-6 space-y-3">
                    {r.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-4 text-[15px] leading-[1.7] text-foreground/75"
                      >
                        <span
                          className="mt-3 h-px w-4 shrink-0 bg-[var(--gold)]"
                          aria-hidden
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- SKILLS ------------------------------- */

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-8">
      <div className="px-6 md:px-16 py-24 border-t border-border">
        <SectionHeader
          eyebrow="Skills"
          num="04"
          title={<>Toolbox and <em className="italic text-[var(--emerald)]">technical</em> depth.</>}
        />
        <dl className="divide-y divide-border border-y border-border">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6"
            >
              <dt className="md:col-span-3 font-serif text-xl text-foreground">
                {g.title}
              </dt>
              <dd className="md:col-span-9 flex flex-wrap gap-x-2 gap-y-1 text-[15px] text-foreground/75">
                {g.items.map((s, i) => (
                  <span key={s} className="whitespace-nowrap">
                    {s}
                    {i < g.items.length - 1 && (
                      <span className="text-[var(--gold)]"> · </span>
                    )}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------------- EDUCATION ------------------------------- */

export function Education() {
  return (
    <section id="education" className="scroll-mt-8">
      <div className="px-6 md:px-16 py-24 border-t border-border">
        <SectionHeader
          eyebrow="Education"
          num="05"
          title={<>Formal <em className="italic text-[var(--emerald)]">training</em>.</>}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((e) => (
            <div
              key={e.school}
              className="border-t-2 border-[var(--gold)] pt-6"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {e.location}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-foreground leading-tight">
                {e.school}
              </h3>
              <p className="mt-3 text-[var(--emerald)] italic">{e.degree}</p>
              {e.track && (
                <p className="text-sm text-muted-foreground">{e.track}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- CONTACT ------------------------------- */

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-8">
      <div className="px-6 md:px-16 py-24 border-t border-border">
        <SectionHeader
          eyebrow="Contact"
          num="06"
          title={<>Let's build the <em className="italic text-[var(--emerald)]">next</em> program together.</>}
        />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <p className="md:col-span-6 font-serif text-3xl md:text-4xl leading-[1.15] text-foreground">
            Open to Lead / Sr. Program Manager and TPM roles. The best way to reach
            me is <a href={`mailto:${profile.email}`} className="italic text-[var(--emerald)] underline decoration-[var(--gold)] decoration-2 underline-offset-4 hover:decoration-[var(--emerald)]">email</a> — I typically respond within 24 hours.
          </p>
          <dl className="md:col-span-6 md:col-start-8 divide-y divide-border border-y border-border">
            {[
              { k: "Email", v: profile.email, href: `mailto:${profile.email}` },
              { k: "Phone", v: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}` },
              { k: "Location", v: profile.location },
              { k: "GitHub", v: "shahsaagar", href: profile.github },
              ...(profile.linkedin !== "#"
                ? [{ k: "LinkedIn", v: "Profile", href: profile.linkedin }]
                : []),
            ].map((row) => (
              <div key={row.k} className="flex items-baseline justify-between gap-4 py-4">
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                  {row.k}
                </dt>
                <dd className="font-serif text-lg text-foreground">
                  {row.href ? (
                    <a href={row.href} className="hover:text-[var(--emerald)] transition-colors">
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
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="px-6 md:px-16 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono tracking-widest">SS · PMP · TPM</p>
      </div>
    </footer>
  );
}
