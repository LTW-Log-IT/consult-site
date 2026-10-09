# consult-site

Static site for consult.leadthewaylogistics.info (Lead the Way Logistics & IT, BD Consulting).

Astro + Tailwind, built to `dist/` and published to the `gh-pages` branch with a `CNAME` file.

```
npm ci
npm run build
```

## Structure

- Public pages: `/`, `/services/`, `/process/`, `/about/`, `/firewall/`, `/contact/`
- Internal reference pages (v1 method and engagement library): `/internal/`, `/internal/method/`, `/internal/engagements/`, `/internal/proof/`, `/internal/firewall/`
- Retired v1 public URLs redirect: `/method/` -> `/process/`, `/engagements/` -> `/services/`, `/proof/` -> `/about/`

## Search engines and /internal/

Internal pages carry `<meta name="robots" content="noindex, nofollow, noarchive">` and `<meta name="googlebot" content="noindex, nofollow">`, have no canonical or og: tags, and are excluded from the sitemap. They are not linked from any public page.

`robots.txt` deliberately does NOT list `/internal/`. A `Disallow` line would publish the path in robots.txt, and a crawler that obeys `Disallow` never fetches the page, so it never sees the noindex tag; a URL linked from elsewhere could then still appear as a bare link in results. Joe's direction for v2 was noindex meta only.

## Security note

> /internal/ is **obscurity, not access control**. GitHub Pages serves every file publicly: anyone with the URL can read these pages, and the source is visible in the repository if it is public. Do not put anything confidential here (client data, pursuit lists, pricing, partner names). If real access control is needed later, move internal content behind an authenticated host such as Cloudflare Access or a private repo plus a private host.

## Feature flags

`src/data.ts`: `showRegistrationReadiness = false` (registration readiness guidance service hidden until CAGE is active or Joe approves guidance-only wording).
