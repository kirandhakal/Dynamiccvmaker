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
