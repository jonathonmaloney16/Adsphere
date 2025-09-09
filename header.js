import Image from 'next/image';
import Link from 'next/link';
export default function Header() {
  return (
    <header className="header">
      <div className="container" style={{display:'flex',alignItems:'center',gap:12}}>
        <Image src="/logo.png" alt="logo" width={160} height={44} />
        <nav style={{marginLeft:'auto',display:'flex',gap:12}}>
          <Link href="/">Home</Link>
          <Link href="/seats">Seats</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      </div>
    </header>
  );
}
