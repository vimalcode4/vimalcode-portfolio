import { Beaker, Mail, MessageSquare, Quote, Sparkles } from "lucide-react";

import { profile } from "@/data/profile";

const socialLinks = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "X", href: profile.links.x },
  { label: "Medium", href: profile.links.medium },
  { label: "Instagram", href: profile.links.instagram },
  { label: "Pinterest", href: profile.links.pinterest },
  { label: "Spotify", href: profile.links.spotify },
  { label: "Beacons", href: profile.links.beacons },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell scroll-mt-32 px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="surface-panel rounded-[2.25rem] p-8 sm:p-10">
          <p className="section-kicker">04 / Contact</p>
          <h2 className="section-title sm:max-w-none">
            Let’s build something polished and useful.
          </h2>
          <p className="section-description max-w-2xl">
            If you want to discuss internships, collaborations, content ideas,
            or professional opportunities, reach me directly through email or
            any of the links below.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="neon-button-primary rounded-[1rem] px-6 py-3 text-sm"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="neon-button-secondary rounded-[1rem] px-6 py-3 text-sm"
            >
              <MessageSquare className="h-4 w-4" />
              LinkedIn message
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="surface-panel surface-hover rounded-[1.5rem] p-4">
              <Sparkles className="h-5 w-5 text-[var(--accent)]" />
              <p className="mt-3 text-sm text-[var(--muted)]">Style</p>
              <p className="mt-1 font-semibold text-[var(--foreground)]">
                Minimal and clean
              </p>
            </div>
            <div className="surface-panel surface-hover rounded-[1.5rem] p-4">
              <Beaker className="h-5 w-5 text-[var(--accent)]" />
              <p className="mt-3 text-sm text-[var(--muted)]">Focus</p>
              <p className="mt-1 font-semibold text-[var(--foreground)]">
                Software + AI
              </p>
            </div>
            <div className="surface-panel surface-hover rounded-[1.5rem] p-4">
              <Quote className="h-5 w-5 text-[var(--accent)]" />
              <p className="mt-3 text-sm text-[var(--muted)]">Brand</p>
              <p className="mt-1 font-semibold text-[var(--foreground)]">
                VimalCode
              </p>
            </div>
          </div>
        </div>

        <aside className="surface-panel rounded-[2.25rem] p-8 sm:p-10">
          <p className="section-kicker">Social links</p>
          <div className="mt-6 grid gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="surface-panel surface-hover flex items-center justify-between rounded-[1.25rem] px-4 py-4 text-sm font-semibold text-[var(--foreground)]"
              >
                <span>{item.label}</span>
                <span className="text-[var(--muted)]">Open</span>
              </a>
            ))}
          </div>

          <div className="surface-panel mt-8 rounded-[1.5rem] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              Direct contact
            </p>
            <p className="mt-3 text-lg font-semibold text-[var(--foreground)]">
              vimalcodeyt@gmail.com
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
              Best for internship, collaboration, and portfolio enquiries.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}