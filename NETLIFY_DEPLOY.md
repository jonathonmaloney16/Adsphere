# Netlify Deployment Guide for Adsphere

1. Go to [Netlify](https://app.netlify.com/) and create a free account.
2. Click **Add new site** → **Import an existing project**.
3. Connect your **GitHub** account and select your Adsphere repo.
4. In build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Add environment variables (optional):
   - `OWNER_EMAIL=jonathonmaloney16@gmail.com`
   - `OWNER_WALLET=0x2bf98ae9970Fa85242E6C2BE5A0461e1273e1E76`
6. Click **Deploy site**.
7. Netlify will build and deploy your Adsphere app to a live public URL.
