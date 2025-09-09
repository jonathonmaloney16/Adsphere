export default function Home() {
  const brand = process.env.NEXT_PUBLIC_BRAND_NAME || "Adsphere";
  const domain = process.env.NEXT_PUBLIC_PRIMARY_DOMAIN || "example.com";
  return (
    <div className="container">
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/seats">Seats</a>
        <a href="/pricing">Pricing</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
        <a href="/compliance">Compliance</a>
      </nav>

      <h1 className="h1">{brand}</h1>
      <p className="muted">Public build hosted from GitHub → Netlify. Domain: {domain}</p>

      <div className="card">
        <h2 className="h2">AI-Managed Ad Marketplace</h2>
        <p>Buy seats, prepay escrow, weekly payouts — all online.</p>
        <div className="grid">
          <a className="btn" href="/seats">Explore Seats</a>
          <a className="btn" href="/pricing">View Pricing</a>
          <a className="btn" href="/dashboard">Open Dashboard</a>
        </div>
      </div>

      <div className="footer">
        Owner: {process.env.NEXT_PUBLIC_OWNER_EMAIL} · Wallet: {process.env.NEXT_PUBLIC_OWNER_WALLET}
      </div>
    </div>
  );
}
