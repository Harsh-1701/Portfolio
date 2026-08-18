"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="font-mono text-sm tracking-tight"
        >
          <span className="text-accent">▮</span> harsh.singh
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-text transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Say Hello */}
        <a
          href="mailto:harsh.s1701@gmail.com"
          className="hidden md:inline-block font-mono text-xs uppercase tracking-widest border border-line px-4 py-2 hover:border-accent hover:text-accent transition"
        >
          Say Hello
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-line hover:border-accent transition"
        >
          <span
            className={`block h-px w-5 bg-text transition-transform duration-300 ${
              menuOpen ? "translate-y-[4px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-text transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-5 bg-text transition-transform duration-300 ${
              menuOpen ? "-translate-y-[4px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden border-t border-line bg-bg/95 backdrop-blur-md transition-all duration-300 ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="font-mono text-sm uppercase tracking-widest text-muted hover:text-accent transition"
              >
                {link.label}
              </a>
            ))}

            <a
              href="mailto:harsh.s1701@gmail.com"
              onClick={closeMenu}
              className="mt-2 border border-line px-4 py-3 text-center font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}