# CV Maker

CV Maker is a Next.js App Router application for creating role-specific, ATS-friendly resumes. The app uses TypeScript for routes and UI modules, JSON for page and profession content, and static generation for profession editor routes.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run typecheck
npm run build
npm start
```

Run `npm run build` before `npm start` when serving locally. The production build lives in `.next/`.

For Vercel, import the repository root as a Next.js project. `vercel.json` selects the Next.js preset and clears the old `build/` output override. Vercel runs the build and serves the app; do not set an Output Directory override to `build`. If you change settings in the dashboard, use **Framework Preset: Next.js**, **Root Directory: `./`**, and leave **Output Directory** on its framework default. Redeploy after pushing these changes.

## Project structure

- `app/` — App Router pages, metadata, sitemap, robots, and social images.
- `components/` — Landing, editor, legal, and CV UI components.
- `data/` — JSON page copy, legal content, profession catalog, and default CV data.
- `types/` — Shared page and route prop types.
- `config/` — CV template style configuration.
- `seo/` — Metadata helpers.
- `public/` — Static images, icons, and downloadable files.

Edit site copy in `data/pages/landing.json`, legal copy in `data/legal/`, and profession/role content in `data/professionCatalog.json`.

## Search engines and AI readers

See [the SEO launch checklist](docs/seo-launch.md) for production deployment, Google/Bing verification, sitemap submission, and curl checks. Public Markdown is available at `/llms.txt` and `/llms-full.txt`; the full guide is generated from shared content at build time.
