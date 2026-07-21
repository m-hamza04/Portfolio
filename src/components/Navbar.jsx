import { label } from "framer-motion/client";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  {href:"#certfication", label:"Certificates"},
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-bg/85 backdrop-blur border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="font-mono tracking-wide text-sm text-accent"
          >
            Hamza
          </a>

          <ul className="md:flex gap-8 hidden items-center font-mono text-[11px] tracking-wide text-muted">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-text transition-colors">
                  {l.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-block font-mono text-[11px] border  border-line rounded px-4 py-2  text-text hover:border-accent hover:text-accent transition-colors"
          >
            Let's talk
          </a>
        </nav>
      </header>
    </div>
  );
};
