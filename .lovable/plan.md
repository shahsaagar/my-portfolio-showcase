## Goal

Get `https://shahsaagar.github.io/my-portfolio-showcase/` serving the portfolio via the GitHub Actions workflow.

## Why the last run failed

The `deploy.yml` workflow copied `dist/client/*` and expected an `index.html` inside it. TanStack Start's default build renders HTML on a server (Cloudflare Workers) — `dist/client/` only contains JS/CSS/assets, no HTML. GitHub Pages serves static files only, so the copy step failed and nothing was published.

The repo also has a second workflow (`static.yml`) that uploads the raw repository as the site — it would publish source code, not a working app. It needs to be removed.

## Plan

**1. Switch the production build to static prerendering**

Update `vite.config.ts` to force the Nitro `static` preset and set a build-time base path:

```ts
export default defineConfig({
  tanstackStart: { server: { entry: "server" } },
  nitro: { preset: "static" },
  vite: { base: process.env.PAGES_BASE ?? "/" },
});
```

The Lovable-hosted preview ignores these overrides (the wrapper forces Cloudflare inside Lovable builds), so the in-app preview is unaffected. Only CI builds use `static`.

**2. Teach the router about the sub-path**

GitHub Pages serves under `/my-portfolio-showcase/`. Add `basepath: import.meta.env.BASE_URL` to the router in `src/router.tsx` so links and asset URLs resolve correctly there and stay `/` locally.

**3. Rewrite `.github/workflows/deploy.yml`**

```yaml
- run: bun install --frozen-lockfile
- run: PAGES_BASE=/my-portfolio-showcase/ bun run build
- run: |
    mkdir -p _site
    cp -r .output/public/* _site/
    cp _site/index.html _site/404.html
    touch _site/.nojekyll
- uses: actions/upload-pages-artifact@v3
  with: { path: _site }
```

The `static` preset emits prerendered HTML into `.output/public/`. Copying `index.html` to `404.html` gives SPA fallback for client-side routes.

**4. Delete `.github/workflows/static.yml`**

Prevents the duplicate broken run and the "publish whole repo" mistake.

**5. Trigger a fresh run**

Lovable syncs these edits to GitHub automatically; the push kicks off `Deploy to GitHub Pages`. I'll poll the Actions API and, once green, fetch the live URL to confirm the portfolio renders.

## Risks / caveats

- Prerendering is safe here because there's a single `index.tsx` route and no `createServerFn` usage. Adding server functions or auth later would break static export — you'd need to move to Cloudflare Pages/Workers or the Lovable-published URL.
- The `basepath` change means links must use TanStack Router's `<Link>` (already the case). Hardcoded `/foo` `<a href>` values would break on Pages.
- If you ever rename the repo, `PAGES_BASE` in the workflow must be updated to match.

## Alternative (one-click)

If you'd rather skip the static-conversion work, say "publish" and I'll ship it to a `.lovable.app` URL immediately — no workflow, no base-path gymnastics, and server features stay available.
