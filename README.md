# Compound Interest Calculator

English educational savings calculator built with Next.js, React and TypeScript. All calculations run in the browser. No accounts, database, analytics or payment integration.

## Run locally

Use Node 22 and npm. From this directory:

```powershell
npm ci
npm run check
npm run build
npm start
```

Open http://127.0.0.1:3000. `npm start` serves the completed static `out/` build on loopback only; use `npm run dev` for development. Stop the process with Ctrl+C. Changing source or build-time environment requires another build before previewing. `PORT` can override 3000.

## Features

- Monthly or annual contributions; start/end timing; four compounding frequencies.
- Nominal annual rate or APY, inflation illustration and five display currencies.
- Live validation, accessible chart and annual/monthly tables.
- PNG/CSV preview dialogs with explicit downloads and manual-save fallback, print layout, copy summary and versioned hash sharing.
- Contact dialog and About, Contact, Privacy and Terms pages.

The model uses equal abstract months, 365 daily compounding periods and fixed nonnegative rates. Currency selection is formatting, not conversion. See [methodology](docs/research/keyword.md).

## Configuration and deployment

`.env.example` documents public build variables. Preview defaults to noindex, omits canonical/absolute OG URLs and has an empty sitemap. Before an authorized public deployment, configure a real HTTPS `NEXT_PUBLIC_SITE_URL` and explicitly set `NEXT_PUBLIC_ALLOW_INDEXING=true`, then rebuild. Never deploy the local preview server as the production service: it deliberately sends `X-Robots-Tag: noindex`.

Static hosting must serve `out/`, resolve trailing-slash routes, deliver `404.html` with status 404, use correct asset MIME types and apply the intended indexing headers. The public site is https://compound-interest-calculator.co. `vercel.json` builds the source with `npm ci` / `npm run build` and publishes `out/`; the package engine selects Node 22. Public production metadata lives in the tracked `.env.production` (no credentials). See the [deployment record](docs/DEPLOYMENT.md) for release status, verification and recovery.

## Code and verification

- `lib/calculator.ts`: formulas, validation, rows, CSV and share schema.
- `components/Calculator.tsx`, `Chart.tsx`, `Contact.tsx`: interactive UI.
- `lib/downloads.ts`: PNG creation; `components/ExportDialog.tsx`: previews and file delivery; `lib/site.ts`: public metadata settings.
- `app/`: pages, original content, responsive and print CSS.
- `public/`: original SVG mark, favicon, Apple icon and social image.
- `tests/calculator.test.ts`: independent arithmetic and untrusted-input tests.
- `scripts/create-assets.mjs`: optional artwork regeneration using Sharp supplied by the locked Next dependency tree; generated assets are already included.

`npm run check` runs arithmetic tests, strict type checking and ESLint. ESLint uses TypeScript recommended rules and React Hooks rules. The Next ESLint preset was replaced to remove an audited vulnerable dependency chain; this does not provide the preset's full Next/accessibility rule coverage. Browser and HTML checks supplement it.

Read [handoff](docs/HANDOFF.md), [QA coverage](docs/QA-REPORT.md) and [implementation status](docs/IMPLEMENTATION-STATUS.md). Browser test artifacts under `docs/evidence/local/` are local-only and ignored by Git. Do not interpret an implemented feature as a fully verified external download or deployment.
