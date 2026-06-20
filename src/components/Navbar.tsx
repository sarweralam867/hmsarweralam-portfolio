"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation, portfolio } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-shell">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Back to top">
          <span>{portfolio.shortName}</span>
          <strong>{portfolio.name}</strong>
        </a>
        <div className="desktop-nav">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
          <a className="nav-cta" href={portfolio.links.resume} target="_blank">Resume</a>
        </div>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
        {open ? (
          <div className="mobile-nav">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
            ))}
            <a href={portfolio.links.resume} target="_blank">Download resume</a>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
