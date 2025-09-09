export default function handler(req, res) {
  res.status(200).json({ ok: true, service: process.env.NEXT_PUBLIC_SITE_NAME || 'Adsphere', ts: new Date().toISOString() });
}
