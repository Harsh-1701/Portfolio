"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "bg-bg/80 backdrop-blur border-b border-line" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="font-mono text-sm tracking-tight">
          <span className="text-accent">▮</span> harsh.singh
        </a>
        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-text transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:harsh.s1701@gmail.com"
          className="hidden md:inline-block font-mono text-xs uppercase tracking-widest border border-line px-4 py-2 hover:border-accent hover:text-accent transition"
        >
          Say Hello
        </a>
      </nav>
    </header>
  );
}