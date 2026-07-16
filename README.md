# Sagar Shah — Portfolio

Static single-page portfolio site built with React, Vite, TanStack Router and Tailwind CSS.

## Local development

```bash
bun install
bun run dev
```

## Deploying to GitHub Pages

This repo ships with `.github/workflows/deploy.yml`, which builds the site and
publishes the client bundle to GitHub Pages on every push to `main`.

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the Actions tab).
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

### Custom domain / user site

- Publishing at a project subpath (`/<repo-name>/`) works out of the box.
- For a root-level site (`username.github.io` or a custom domain), no config
  changes are required — Pages will serve `/` correctly.

## Replacing the resume

Drop a new `Sagar_Shah_Resume.pdf` into `public/` — the Download buttons link to it.

## Editing content

All resume content lives in a single file: `src/components/portfolio/data.ts`.
Update your LinkedIn URL and any other links there.

## Alternative: Lovable Publish

The easiest way to publish is Lovable's built-in **Publish** button — it hosts
the full app (SSR-capable) at a `*.lovable.app` URL with zero setup.
