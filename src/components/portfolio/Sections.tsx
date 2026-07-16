import {
  achievements,
  certifications,
  education,
  experience,
  profile,
  skillGroups,
} from "./data";

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklab,var(--color-primary)_10%,transparent),transparent)]" />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Available for senior program leadership · {profile.status}
          </p>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.05]">
            {profile.name}
            <span className="block text-2xl md:text-3xl font-normal text-muted-foreground mt-4">
              {profile.title}
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            {profile.tagline} — 19+ years orchestrating multi-million-dollar Agile
            and hybrid delivery programs across healthcare, insurance, and enterprise
            platforms.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/85 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" />
              </svg>
              Download Resume (PDF)
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              {profile.location}
            </span>
            <a href={`mailto:${profile.email}`} className="hover:text-foreground">
              {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
              GitHub
            </a>
            {profile.linkedin !== "#" && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">
                LinkedIn
              </a>
            )}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {certifications.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 border-t border-border">
        <SectionHeader eyebrow="About" title="Program leadership grounded in outcomes." />
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {profile.summary}
        </p>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 border-t border-border">
        <SectionHeader eyebrow="Impact" title="Numbers that moved the needle." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a) => (
            <div
              key={a.label}
              className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
                {a.value}
              </div>
              <div className="mt-3 text-sm font-medium text-foreground">{a.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{a.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 border-t border-border">
        <SectionHeader eyebrow="Experience" title="19+ years across regulated enterprise delivery." />
        <ol className="relative border-l border-border ml-3">
          {experience.map((r) => (
            <li key={r.company + r.period} className="mb-12 ml-6">
              <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-foreground">{r.company}</h3>
                <span className="text-xs text-muted-foreground">{r.period}</span>
              </div>
              <p className="mt-1 text-sm text-foreground/80">
                {r.title}
                {r.location ? <span className="text-muted-foreground"> · {r.location}</span> : null}
              </p>
              <ul className="mt-4 space-y-2.5">
                {r.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 border-t border-border">
        <SectionHeader eyebrow="Skills" title="Toolbox and technical depth." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((g) => (
            <div key={g.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
                {g.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-card px-2.5 py-1 text-xs text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 border-t border-border">
        <SectionHeader eyebrow="Education" title="Formal training." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((e) => (
            <div key={e.school} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">{e.school}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.location}</p>
              <p className="mt-3 text-sm font-medium text-foreground">{e.degree}</p>
              {e.track && <p className="text-xs text-muted-foreground">{e.track}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 border-t border-border">
        <SectionHeader eyebrow="Contact" title="Let's build the next program together." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <p className="text-lg text-muted-foreground max-w-md">
            Open to Lead / Sr. Program Manager and TPM roles. The best way to reach me
            is email — I typically respond within 24 hours.
          </p>
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <ContactRow label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactRow label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`} />
            <ContactRow label="Location" value={profile.location} />
            <ContactRow label="GitHub" value="shahsaagar" href={profile.github} />
            {profile.linkedin !== "#" && (
              <ContactRow label="LinkedIn" value="Profile" href={profile.linkedin} />
            )}
            <a
              href={profile.resumeUrl}
              download
              className="mt-2 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/85"
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      {href ? (
        <a href={href} className="text-sm text-foreground hover:text-primary transition-colors">
          {value}
        </a>
      ) : (
        <span className="text-sm text-foreground">{value}</span>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>Built with React, Vite &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
