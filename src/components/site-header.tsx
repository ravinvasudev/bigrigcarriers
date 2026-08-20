"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Fleet", href: "/#fleet" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="Big Rig Carriers home">
          <Image
            src="/assets/logo.png"
            alt=""
            width={48}
            height={48}
          />
          <span className="brand-wordmark">
            <span className="brand-top">BIG RIG</span>
            <small className="brand-sub">CARRIERS</small>
          </span>
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav-links"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <div
          className={`nav-links${menuOpen ? " is-open" : ""}`}
          id="site-nav-links"
        >
          {links.map((link) => (
            <Link href={link.href} key={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
        </div>
        <Link className="nav-quote button button-orange" href="/#contact" onClick={closeMenu}>
          Request a Quote <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </header>
  );
}
