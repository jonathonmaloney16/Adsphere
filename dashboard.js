export default function Dashboard() {
  const min = process.env.NEXT_PUBLIC_MIN_PREPAY_ETH || "1";
  return (
    <div className="container">
      <h1 className="h1">Dashboard</h1>
      <div className="card">
        <h2 className="h2">Launch Guard</h2>
        <p>All ads must prepay before launch. Threshold: {min} ETH (configurable)</p>
        <a className="btn" href="/seats">Simulate Prepay →</a>
      </div>
      <div className="card">
        <h2 className="h2">Treasury Overview</h2>
        <p>Owner wallet: {process.env.NEXT_PUBLIC_OWNER_WALLET}</p>
        <p className="muted">Real balances & escrow connect later (contracts/API).</p>
      </div>
    </div>
  );
}
