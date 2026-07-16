
# Sagar Shah — Portfolio Site Plan

A single-page, static portfolio site (Modern Minimal aesthetic: black `#0A0A0A`, off-white `#FAFAFA`, blue accent `#3B82F6`, muted `#E5E7EB`) built to deploy directly to GitHub Pages.

Note on stack: Angular isn't supported in Lovable, so this uses **React + Vite** producing a fully static build. Deployment to GitHub Pages works identically — a workflow builds and pushes `dist/` to the `gh-pages` branch.

## Sections (single page, smooth-scroll nav)

1. **Hero** — Name, title ("Lead Technical Program Manager | SAFe Agile Hybrid Delivery"), Pune location, "Download Resume" (PDF) + "Contact" buttons, LinkedIn / GitHub / Email icons.
2. **About** — Condensed summary from the resume (19+ years, Agile/hybrid delivery, regulated environments).
3. **Key Achievements** — Metric callouts in a card grid:
   - $15M MCP program, 98% budget adherence
   - 20% infrastructure cost reduction
   - 30% platform performance gain
   - 40% batch processing improvement
   - Revenue scaled $2M → $3.2M
   - 50+ member cross-functional teams
4. **Experience** — Vertical timeline of all roles (Persistent, LSDB, AtoS-Syntel, L&T Infotech, Macro Technologies, Siemens, UCF, Shah N.G.) with company, title, dates, location, and bulleted highlights.
5. **Skills** — Grouped chips: Methodologies, PM & Agile Tools, Cloud & Infra, Platforms & Tech, Reporting & Analytics, AI & Emerging Tech, Compliance.
6. **Certifications** — PMP, PMI-ACP, CSM, SAFe Practitioner, ITIL badges.
7. **Education** — UCF (MS Industrial Engineering) and Government College of Engineering, Pune (BS Electrical Engineering).
8. **Contact** — Email `shahsagar0@gmail.com`, phone `+91-70307-45678`, Pune India, plus LinkedIn/GitHub links (placeholders you can fill in).
9. **Footer** — Copyright + built-with note.

## Design details

- Typography: Inter for body, tight tracking sans for headings; large hero type, generous whitespace.
- Layout: max-w container, single column with section bands; subtle blue accent for links, dividers, and metric numbers.
- Sticky top nav with anchor links; smooth scroll; active-section highlighting.
- Fully responsive (mobile → desktop); accessible (semantic HTML, proper heading hierarchy, alt text).
- SEO: page title "Sagar Shah — Lead Technical Program Manager", meta description, OG/Twitter tags, JSON-LD Person schema.

## Technical

- Overwrite `src/routes/index.tsx` as the single-page portfolio; keep the existing TanStack Start shell.
- Update `src/routes/__root.tsx` head metadata (title, description, OG).
- Add small components under `src/components/portfolio/`: `Nav`, `Hero`, `About`, `Achievements`, `Experience`, `Skills`, `Certifications`, `Education`, `Contact`, `Footer`.
- Place the uploaded resume PDF at `public/Sagar_Shah_Resume.pdf` so the Download button links to `/Sagar_Shah_Resume.pdf`.
- Update `src/styles.css` tokens to the Modern Minimal palette (light + dark values).
- Add a `.github/workflows/deploy.yml` GitHub Actions workflow that runs `bun install && bun run build` and publishes `dist/` to the `gh-pages` branch. Include instructions in `README.md` for enabling Pages (Settings → Pages → Source: `gh-pages` branch) and setting the `base` in `vite.config.ts` to `/<repo-name>/` if hosted at `username.github.io/<repo-name>`.
- No backend, no DB, no server functions — pure static output.

## Placeholders you'll fill in later

- LinkedIn URL
- GitHub URL
- Optional professional headshot (I'll leave a monogram avatar as default)

Confirm and I'll build it.
