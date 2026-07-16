import {
  achievements,
  certifications,
  education,
  experience,
  profile,
  skillGroups,
} from "../components/portfolio/data";

export function buildResumeContext(): string {
  const exp = experience
    .map(
      (r) =>
        `- ${r.company} — ${r.title} (${r.period}${r.location ? `, ${r.location}` : ""})\n${r.bullets.map((b) => `    • ${b}`).join("\n")}`,
    )
    .join("\n");

  const skills = skillGroups
    .map((g) => `- ${g.title}: ${g.items.join(", ")}`)
    .join("\n");

  const edu = education
    .map((e) => `- ${e.degree} — ${e.school}${e.location ? `, ${e.location}` : ""}${e.track ? ` (${e.track})` : ""}`)
    .join("\n");

  const wins = achievements.map((a) => `- ${a.value} — ${a.label} (${a.sub})`).join("\n");

  return `# ${profile.name}, ${profile.credentials}
Title: ${profile.title}
Tagline: ${profile.tagline}
Location: ${profile.location}
Status: ${profile.status}
Email: ${profile.email}
Phone: ${profile.phone}

## Summary
${profile.summary}

## Certifications
${certifications.join(", ")}

## Key Achievements
${wins}

## Experience
${exp}

## Skills
${skills}

## Education
${edu}
`;
}

export const RESUME_SYSTEM_PROMPT = `You are the résumé assistant for ${profile.name}, ${profile.title}. Answer visitor questions using ONLY the résumé context provided below. Be concise, professional, and specific — cite companies, years, and metrics where relevant. If asked to summarize, produce a crisp 3–5 sentence overview highlighting scale, domains, and outcomes. If a question is outside the résumé (personal, speculative, unrelated to Sagar's career), briefly say you can only speak to his professional background and suggest emailing ${profile.email}. Never invent employers, dates, or metrics. Format answers in short paragraphs or tight bullet lists using markdown.

--- RÉSUMÉ CONTEXT ---
${buildResumeContext()}
--- END CONTEXT ---`;
