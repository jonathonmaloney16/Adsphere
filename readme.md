# Adsphere Starter (Next.js → Netlify)

## Quickstart
npm i
npm run dev
# open http://localhost:3000

## Deploy (Netlify + GitHub)
1) Push this folder to a new GitHub repo.
2) In Netlify, "Add new site" → "Import from GitHub" → pick the repo.
3) Build command: npm run build
4) Publish directory: .next
Netlify auto-detects Next.js via @netlify/plugin-nextjs.

## Config
Copy `.env.example` → `.env.local` and set:
- NEXT_PUBLIC_BRAND_NAME
- NEXT_PUBLIC_PRIMARY_DOMAIN
- NEXT_PUBLIC_OWNER_EMAIL
- NEXT_PUBLIC_OWNER_WALLET
- NEXT_PUBLIC_MIN_PREPAY_ETH (optional)
