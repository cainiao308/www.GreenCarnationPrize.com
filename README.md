# Green Carnation Prize — Next.js on Vercel

Static visual restore of [The Green Carnation Prize](https://greencarnationprize.wordpress.com/) as a Next.js app for Vercel. Content fidelity targets the literary prize’s winners, shortlists, and about materials, with a look close to the 2014–2018 WordPress / Twenty Ten era.

Twenty Ten chrome (header, nav, sidebar `#primary`, footer) is embedded inside each page’s HTML body — there is no shared React Header/Footer.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000/

```bash
npm run build
npm start
```

## Deploy (Vercel)

- Framework: Next.js (`vercel.json` sets `"framework": "nextjs"`)
- Root directory: this repo
- Trailing slash URLs (`next.config.ts` → `trailingSlash: true`)

Suggested production hosts: `www.greencarnationprize.com` and/or `greencarnationprize.com`.

## AdSense / ads.txt env vars

Set these in the Vercel project (Environment Variables). Copy from `.env.example`:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_ADSENSE_ENABLED` | `"true"` to enable AdSense script injection; anything else keeps ads off |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | Publisher client id (e.g. `ca-pub-…`). When set, also emits `<meta name="google-adsense-account">` |
| `ADS_TXT_CONTENT` | Full body served at `/ads.txt` (plain text, `Cache-Control: no-store`) |

Semantics (see `src/lib/adsense.ts`):

- `shouldShowAds()` is true only when enabled **and** client is non-empty → then the adsbygoogle script is loaded in the root layout.
- `/ads.txt` is a force-dynamic route that returns `ADS_TXT_CONTENT` (empty string if unset).

Do not commit real secrets; only `.env.example` is in git.

## Content model

Pages live in `src/data/pages.json` (loaded by `src/lib/content.ts`). Static assets are under `public/css/` and `public/images/`. Catch-all routing: `src/app/page.tsx` for `/`, `src/app/[...slug]/page.tsx` for everything else.

## Sources & timestamps

| Source | Role | Timestamp / note |
|--------|------|------------------|
| https://greencarnationprize.wordpress.com/ | Primary live mirror (content through ~May 2017 winner) | Fetched 2026-09-13 |
| https://public-api.wordpress.com/rest/v1.1/sites/greencarnationprize.wordpress.com/ | Post HTML via WP.com public API | 2026-09-13 |
| https://web.archive.org/web/20180831164113/https://greencarnationprize.com/ | Styled snapshot + Twenty Ten CSS | 2018-08-31 |
| Theme CSS | `public/css/twentyten.css` from Wayback `id_` of twentyten style.css | 2018-08-31 |

## Pages

Standing pages: `/`, `/about/`, `/judges/`, `/previous-years/`, `/contact/`, `/submissions/`, `/longlist-2016/`, `/archive/`, plus restored posts under `/2010/`–`/2017/`.
