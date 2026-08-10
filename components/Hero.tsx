import Image from "next/image";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="home" className="section-shell scroll-mt-32 px-6 pt-36 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-3xl">
          <div className="surface-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[var(--muted)]">
            <Sparkles className="h-4 w-4 text-[var(--accent)]" />
            {profile.title}
          </div>

          <p className="section-kicker mt-8">
            Hey, I’m {profile.shortName}
          </p>

          <h1 className="glow-title mt-4 text-5xl font-black tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            Building <span className="text-[var(--accent)]">clean</span> products,
            <span className="block text-[var(--muted)]">learning AI deeply.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            {profile.tagline} I focus on software engineering, AI, data science,
            and creating a polished online presence for my career and content.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {profile.highlights.map((item) => (
              <span
                key={item}
                className="neon-chip px-4 py-2 text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="neon-button-primary rounded-[1rem] px-6 py-3 text-sm"
            >
              View projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="neon-button-secondary rounded-[1rem] px-6 py-3 text-sm"
            >
              <Mail className="h-4 w-4" />
              Contact me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] hover:[text-shadow:0_0_14px_rgba(57,255,20,0.18)]"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] hover:[text-shadow:0_0_14px_rgba(57,255,20,0.18)]"
            >
              <FaLinkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <span className="neon-chip px-4 py-2 font-medium text-[var(--foreground)]">
              {profile.availability}
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.16),transparent_58%)] blur-3xl" />
          <div className="surface-panel rounded-[2rem] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.4)]">
            <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(11,15,11,0.95),rgba(8,11,8,0.95))] p-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] border border-[var(--border)] bg-[var(--surface)]">
                <Image
                  src={profile.photo}
                  alt={`${profile.shortName} portrait`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="surface-panel mt-4 rounded-[1.2rem] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
                  Current focus
                </p>
                <div className="mt-3 grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2">
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3">
                    Open source contributions
                  </div>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3">
                    Full-stack development
                  </div>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3">
                    AI and machine learning
                  </div>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3">
                    Content creation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}