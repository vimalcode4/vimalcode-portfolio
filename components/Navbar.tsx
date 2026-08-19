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
    <nav className="fixed top-0 z-50 w-full px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8">
      <div className="nav-shell mx-auto max-w-7xl rounded-xl">
        <div className="flex items-center justify-between gap-3 px-3 py-3 sm:gap-4 sm:px-5 sm:py-4 lg:px-6">
          <a href="#home" className="flex items-center gap-3" aria-label="VimalCode home">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-strong)] bg-[rgba(100,255,218,0.08)] text-xs font-black tracking-[0.28em] text-[var(--accent)] shadow-[0_0_24px_rgba(100,255,218,0.12)] sm:h-11 sm:w-11 sm:text-sm">
              VC
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--foreground)] sm:text-sm sm:tracking-[0.28em]">
                VimalCode
              </p>
              <p className="hidden text-xs text-[var(--muted)] sm:block">Professional portfolio</p>
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[rgba(17,34,64,0.9)] text-[var(--foreground)] transition hover:border-[var(--border-strong)] hover:text-[var(--accent)] md:hidden sm:h-11 sm:w-11"
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
            className="border-t border-[rgba(100,255,218,0.12)] px-4 pb-4 pt-3 md:hidden"
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