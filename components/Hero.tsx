import Image from "next/image";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="home" className="px-6 pt-32 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/80 px-4 py-2 text-sm font-medium text-[var(--muted)] shadow-sm">
            <Sparkles className="h-4 w-4 text-[var(--accent)]" />
            Professional  portfolio
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.36em] text-[var(--accent)]">
            Hey, I’m {profile.shortName}
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            Building clean products,
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
                className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--foreground)] shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(21,32,51,0.16)] transition-transform hover:-translate-y-0.5"
            >
              View projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-transform hover:-translate-y-0.5"
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
              className="inline-flex items-center gap-2 transition-colors hover:text-[var(--foreground)]"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-[var(--foreground)]"
            >
              <FaLinkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-2 font-medium text-[var(--foreground)]">
              {profile.availability}
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[linear-gradient(145deg,rgba(192,127,58,0.2),rgba(255,255,255,0.9))] blur-3xl" />
          <div className="rounded-[2rem] border border-[var(--border)] bg-white p-5 shadow-[0_30px_90px_rgba(21,32,51,0.12)]">
            <div className="overflow-hidden rounded-[1.5rem] bg-[linear-gradient(180deg,#fbf8f2,#f1e8dc)] p-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] border border-white/70 bg-white">
                <Image
                  src={profile.photo}
                  alt={`${profile.shortName} portrait`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="mt-4 rounded-[1.2rem] border border-[var(--border)] bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
                  Current focus
                </p>
                <div className="mt-3 grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2">
                  <div className="rounded-2xl bg-[var(--background-soft)] p-3">
                    Open source contributions
                  </div>
                  <div className="rounded-2xl bg-[var(--background-soft)] p-3">
                    Full-stack development
                  </div>
                  <div className="rounded-2xl bg-[var(--background-soft)] p-3">
                    AI and machine learning
                  </div>
                  <div className="rounded-2xl bg-[var(--background-soft)] p-3">
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