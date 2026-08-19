import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-shell scroll-mt-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="section-kicker">03 / Projects</p>
          <h2 className="section-title sm:max-w-none">
            Selected work with a clear professional presentation.
          </h2>
          <p className="section-description">
            Two core projects that reflect my internship experience and my
            college major project direction.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="surface-panel surface-hover group rounded-2xl p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                    {project.type}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-[var(--foreground)]">
                    {project.title}
                  </h3>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition hover:border-[var(--border-strong)] hover:text-[var(--accent)] hover:shadow-[0_0_18px_rgba(100,255,218,0.12)]"
                  aria-label={`Open ${project.title} GitHub profile`}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>

              <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                {project.description}
              </p>

              <p className="surface-panel mt-4 rounded-2xl px-4 py-3 text-sm leading-7 text-[var(--muted)]">
                {project.emphasis}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="neon-chip px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-5 text-sm font-semibold text-[var(--foreground)]">
                <span>Portfolio-ready summary</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--accent)] hover:translate-x-0.5 hover:text-[var(--accent-muted)]"
                >
                  Open link
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}