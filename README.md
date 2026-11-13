# adsassist-public

Marketing site for AdsAssist, served at **adsassist.in**. The product itself is at app.adsassist.in.

Next.js 16 (App Router), Tailwind CSS 4, Motion for animation. Copy comes from the "AdsAssist Landing Page Copy" doc; product screens are animated mockups with sample data (`components/mock`).

## Pages

| Path | Page |
|---|---|
| `/` | Home |
| `/edtech`, `/saas`, `/fintech`, `/real-estate` | Industry pages (content in `content/industries.ts`) |
| `/agencies` | For agencies |
| `/about` | About |
| `/demo` | Book a demo form |
| `/privacy`, `/terms` | Placeholders until the legal text is ready |

## Run locally

```bash
npm install
cp .env.example .env.local   # optional
npm run dev                  # http://localhost:3100
```

`npm run build && npm start` runs the production build (port from `PORT`, default 3000).

## Environment

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL, default `https://adsassist.in` |
| `NEXT_PUBLIC_APP_URL` | "Log in" link, default `https://app.adsassist.in` |
| `DEMO_WEBHOOK_URL` | Where demo requests go: an AdsAssist incoming webhook URL. Server-side only. Empty = the form opens an email to office@bda.co.in |

## Deploy on Coolify

1. New resource → this repository, build pack **Nixpacks** (detects Next.js), port **3000**.
2. Set the environment variables above.
3. Domains: `https://adsassist.in` and `https://www.adsassist.in`, and point both DNS records to the Coolify server.
