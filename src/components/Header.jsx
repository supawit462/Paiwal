import { useState } from 'react';

const LINKS = [
  { href: '#', label: 'หน้าแรก' },
  { href: '#style', label: 'รู้จักไพวัลย์' },
  { href: '#portfolio', label: 'ผลงานของเรา' },
  { href: '#stories', label: 'เรื่องราว' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header>
      <div className="wrap bar">
        <a href="#" className="brand" aria-label="PAIWAL Construction (1991) หน้าแรก">
          <img src="images/logo.jpg" alt="" />
          <span><b>PAIWAL</b><small>CONSTRUCTION (1991)</small></span>
        </a>
        <nav className={`menu${open ? ' open' : ''}`} id="menu" aria-label="เมนูหลัก">
          {LINKS.map(l => <a key={l.label} href={l.href} onClick={close}>{l.label}</a>)}
          <a href="#contact" className="pill pill-dark" onClick={close}>ติดต่อเรา</a>
        </nav>
        <button className="burger" aria-label="เมนู" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(o => !o)}>☰</button>
      </div>
    </header>
  );
}
