"use client";

import { useEffect, useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";

import { profile } from "@/data/profile";

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
    <nav className="fixed top-0 z-50 w-full border-b border-[rgba(100,255,218,0.12)] bg-[#0a192f]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center">

          {/* VIMALCODE */}
          <a
            href="#home"
            aria-label="VimalCode home"
            className="shrink-0 text-[16px] font-bold tracking-[-0.02em] text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--accent)]"
          >
            VimalCode
          </a>

          {/* NAVIGATION */}
          <div className="ml-7 hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={
                  activeSection === item.id ? "page" : undefined
                }
                className="text-[14px] font-bold tracking-[-0.01em] text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--accent)]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* RIGHT SIDE ICONS */}
          <div className="ml-auto hidden items-center gap-5 md:flex">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--accent)]"
            >
              <FaGithub className="h-[18px] w-[18px]" />
            </a>

            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--accent)]"
            >
              <FaLinkedin className="h-[18px] w-[18px]" />
            </a>

            <a
              href={profile.links.medium}
              target="_blank"
              rel="noreferrer"
              aria-label="Medium"
              title="Medium"
              className="text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--accent)]"
            >
              <FaMedium className="h-[18px] w-[18px]" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Email VimalCode"
              title="Email"
              className="text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--accent)]"
            >
              <Mail className="h-[18px] w-[18px]" />
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="ml-auto inline-flex h-9 w-9 items-center justify-center text-[var(--foreground)] transition-colors hover:text-[var(--accent)] md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((current) => !current)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {mobileOpen ? (
          <div
            id="mobile-navigation"
            className="border-t border-[rgba(100,255,218,0.12)] py-4 md:hidden"
          >
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={
                    activeSection === item.id ? "page" : undefined
                  }
                  className="py-3 text-[14px] font-bold tracking-[-0.01em] text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <a
                href={`mailto:${profile.email}`}
                className="mt-2 py-3 text-sm font-semibold text-[var(--accent)]"
                onClick={() => setMobileOpen(false)}
              >
                Email me
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}