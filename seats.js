export default function Seats() {
  return (
    <div className="container">
      <h1 className="h1">Seats</h1>
      <div className="card">
        <h2 className="h2">Premium (Regular)</h2>
        <p>$50,000 (Plus: $100,000)</p>
      </div>
      <div className="card">
        <h2 className="h2">Gold</h2>
        <p>$100,000 (Plus: $200,000)</p>
      </div>
      <div className="card">
        <h2 className="h2">Diamond</h2>
        <p>$250,000 (Plus: $450,000) — 1 available (auction/bump)</p>
      </div>
      <div className="card">
        <h2 className="h2">Shared</h2>
        <p>Fractional tokens; price scales.</p>
      </div>
    </div>
  );
}
