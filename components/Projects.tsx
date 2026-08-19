import { ExternalLink, FolderKanban } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-shell scroll-mt-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="section-kicker">03 / Projects</p>
          <h2 className="section-title sm:max-w-none">Software</h2>
          <p className="section-description">
            A clean showcase of real projects I have built and shipped.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="surface-panel surface-hover group flex h-full flex-col rounded-2xl p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)]">
                    <FolderKanban className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 text-xl font-bold leading-tight text-[var(--foreground)] sm:text-2xl">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition hover:border-[var(--border-strong)] hover:text-[var(--accent)] hover:shadow-[0_0_18px_rgba(100,255,218,0.12)]"
                      aria-label={`View ${project.title} on GitHub`}
                      title="GitHub"
                    >
                      <FaGithub className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : null}

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition hover:border-[var(--border-strong)] hover:text-[var(--accent)] hover:shadow-[0_0_18px_rgba(100,255,218,0.12)]"
                      aria-label={`View ${project.title} live demo`}
                      title="Live Demo"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </div>

              <p className="mt-5 text-base leading-7 text-[var(--muted)]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--border)] pt-5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="neon-chip px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}