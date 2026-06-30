import { Beaker, Mail, MessageSquare, Quote, Sparkles } from "lucide-react";

import { profile } from "@/data/profile";

const socialLinks = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "Medium", href: profile.links.medium },
  { label: "Instagram", href: profile.links.instagram },
  { label: "Pinterest", href: profile.links.pinterest },
  { label: "Spotify", href: profile.links.spotify },
  { label: "Beacons", href: profile.links.beacons },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2.25rem] border border-[var(--border)] bg-[linear-gradient(180deg,#ffffff,#f7efe0)] p-8 shadow-[0_24px_60px_rgba(21,32,51,0.08)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.36em] text-[var(--accent)]">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[var(--foreground)]">
            Let’s build something polished and useful.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            If you want to discuss internships, collaborations, content ideas,
            or professional opportunities, reach me directly through email or
            any of the links below.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(21,32,51,0.16)] transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <MessageSquare className="h-4 w-4" />
              LinkedIn message
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-white p-4 shadow-sm">
              <Sparkles className="h-5 w-5 text-[var(--accent)]" />
              <p className="mt-3 text-sm text-[var(--muted)]">Style</p>
              <p className="mt-1 font-semibold text-[var(--foreground)]">
                Minimal and clean
              </p>
            </div>
            <div className="rounded-3xl bg-white p-4 shadow-sm">
              <Beaker className="h-5 w-5 text-[var(--accent)]" />
              <p className="mt-3 text-sm text-[var(--muted)]">Focus</p>
              <p className="mt-1 font-semibold text-[var(--foreground)]">
                Software + AI
              </p>
            </div>
            <div className="rounded-3xl bg-white p-4 shadow-sm">
              <Quote className="h-5 w-5 text-[var(--accent)]" />
              <p className="mt-3 text-sm text-[var(--muted)]">Brand</p>
              <p className="mt-1 font-semibold text-[var(--foreground)]">
                VimalCode
              </p>
            </div>
          </div>
        </div>

        <aside className="rounded-[2.25rem] border border-[var(--border)] bg-white p-8 shadow-[0_20px_60px_rgba(21,32,51,0.08)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.36em] text-[var(--accent)]">
            Social links
          </p>
          <div className="mt-6 grid gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--background-soft)] px-4 py-4 text-sm font-semibold text-[var(--foreground)] transition-transform hover:-translate-y-0.5"
              >
                <span>{item.label}</span>
                <span className="text-[var(--muted)]">Open</span>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-[var(--border)] bg-[linear-gradient(180deg,#ffffff,#faf5ed)] p-5">
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