"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, portfolio } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.href.slice(1));

    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = `#${id}`;
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="nav-shell">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Back to top">
          <span>{portfolio.shortName}</span>
          <strong>{portfolio.name}</strong>
        </a>
        <div className="desktop-nav">
          {navigation.map((item) => (
            <a
              className={activeSection === item.href ? "active" : undefined}
              key={item.href}
              href={item.href}
              aria-current={activeSection === item.href ? "location" : undefined}
            >
              {item.label}
            </a>
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
              <a
                className={activeSection === item.href ? "active" : undefined}
                key={item.href}
                href={item.href}
                aria-current={activeSection === item.href ? "location" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href={portfolio.links.resume} target="_blank">Download resume</a>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
