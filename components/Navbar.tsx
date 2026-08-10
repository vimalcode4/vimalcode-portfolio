"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sectionElements = ["home", ...navItems.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!sectionElements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target instanceof HTMLElement) {
          setActiveSection(visibleEntry.target.id || "home");
        }
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0.15, 0.3, 0.45],
      },
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8">
      <div className="nav-shell mx-auto max-w-7xl rounded-[1.5rem]">
        <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-5 lg:px-6">
          <a href="#home" className="flex items-center gap-3" aria-label="VimalCode home">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border-strong)] bg-[rgba(57,255,20,0.08)] text-sm font-black tracking-[0.32em] text-[var(--accent)] shadow-[0_0_24px_rgba(57,255,20,0.12)]">
              VC
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--foreground)]">
                VimalCode
              </p>
              <p className="text-xs text-[var(--muted)]">Professional portfolio</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={activeSection === item.id ? "page" : undefined}
                className="nav-link"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="mailto:vimalcodeyt@gmail.com"
              className="neon-button-primary rounded-[1rem] px-5 py-2.5 text-sm"
            >
              Hire me
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[rgba(11,15,11,0.9)] text-[var(--foreground)] transition hover:border-[var(--border-strong)] hover:text-[var(--accent)] md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((current) => !current)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div
            id="mobile-navigation"
            className="border-t border-[rgba(57,255,20,0.12)] px-4 pb-4 pt-3 md:hidden"
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  className="nav-link rounded-2xl px-4 py-3 text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="mailto:vimalcodeyt@gmail.com"
                className="neon-button-primary mt-2 rounded-2xl px-4 py-3 text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Hire me
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}