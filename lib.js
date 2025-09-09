export const SITE = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Adsphere',
  ownerEmail: process.env.NEXT_PUBLIC_OWNER_EMAIL || 'jonathonmaloney16@gmail.com',
  ownerWallet: process.env.NEXT_PUBLIC_OWNER_WALLET || '0x2bf98ae9970Fa85242E6C2BE5A0461e1273e1E76',
  pricing: { regular: 50000, gold: 100000, diamond: 250000 },
  launch: { prepayRequired: true, weeklyPayoutDay: 'Friday', emergencyDailyCashoutUSD: 4000, emergencyDays: 2 }
};
