import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.36em] text-[var(--accent)]">
            Projects
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[var(--foreground)]">
            Selected work with a clear professional presentation.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
            Two core projects that reflect my internship experience and my
            college major project direction.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_20px_60px_rgba(21,32,51,0.08)] transition-transform duration-300 hover:-translate-y-1"
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
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background-soft)] text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)] hover:text-white"
                  aria-label={`Open ${project.title} GitHub profile`}
                >
                  <FaGithub className="h-5 w-5" />
                </a>
              </div>

              <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                {project.description}
              </p>

              <p className="mt-4 rounded-2xl bg-[var(--background-soft)] px-4 py-3 text-sm leading-7 text-[var(--muted)]">
                {project.emphasis}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--border)] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]"
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
                  className="inline-flex items-center gap-2 text-[var(--accent)] transition-transform hover:translate-x-0.5"
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