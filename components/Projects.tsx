"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink, FolderKanban } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects } from "@/data/projects";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const project = projects[activeProject];

  const previousProject = () => {
    setActiveProject((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const nextProject = () => {
    setActiveProject((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      id="projects"
      className="section-shell scroll-mt-32 px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="flex items-end justify-between gap-6">
          <div className="flex items-center gap-6">
            <p className="section-kicker whitespace-nowrap">
              03 / Projects
            </p>

            <div className="hidden h-px w-32 bg-[var(--border)] sm:block" />
          </div>

          <a
            href="#projects"
            className="hidden items-center gap-2 text-sm font-semibold text-[var(--accent)] transition hover:opacity-80 sm:flex"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <h2 className="mt-2 text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
          Software
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
          A showcase of software projects I have designed, developed,
          and shipped.
        </p>

        {/* =========================
            FEATURED PROJECT
        ========================== */}
        <div className="relative mt-12">

          <article className="group overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_80px_rgba(0,0,0,0.25)]">

            {/* IMAGE */}
            <div className="relative aspect-[16/6.5] overflow-hidden">

              {project.image ? (
                <Image
                  key={project.image}
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={activeProject === 0}
                  className="object-cover transition duration-700 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[var(--surface)]">
                  <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
                      VimalCode
                    </p>

                    <p className="mt-3 text-3xl font-bold text-[var(--foreground)]">
                      Portfolio
                    </p>
                  </div>
                </div>
              )}

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* LEFT ARROW */}
              <button
                onClick={previousProject}
                aria-label="Previous project"
                className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={nextProject}
                aria-label="Next project"
                className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
              >
                <ArrowRight className="h-5 w-5" />
              </button>

              {/* FEATURED PROJECT INFO */}
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10 lg:p-12">

                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                  <div className="max-w-3xl">

                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                      Featured Project
                    </p>

                    <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* FEATURED LINKS */}
                  <div className="flex shrink-0 gap-2">

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
                      >
                        <FaGithub className="h-4 w-4" />
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}

                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* CAROUSEL DOTS */}
          <div className="mt-6 flex justify-center gap-3">
            {projects.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActiveProject(index)}
                aria-label={`Show ${item.title}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeProject === index
                    ? "w-8 bg-[var(--accent)]"
                    : "w-5 bg-[var(--border-strong)]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* =========================
            ALL PROJECTS
        ========================== */}

        <div className="mt-16">

          <div className="mb-8 flex items-center gap-4">
            <h3 className="text-2xl font-bold text-[var(--foreground)]">
              More Projects
            </h3>

            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project, index) => (
              <article
                key={project.title}
                onClick={() => setActiveProject(index)}
                className={`group flex min-h-[360px] cursor-pointer flex-col rounded-2xl border p-6 transition-all duration-300 ${
                  activeProject === index
                    ? "border-[var(--accent)] bg-[var(--surface)] shadow-[0_0_30px_rgba(100,255,218,0.08)]"
                    : "border-[var(--border)] bg-[var(--surface)] hover:-translate-y-1 hover:border-[var(--border-strong)]"
                }`}
              >

                {/* CARD TOP */}
                <div className="flex items-start justify-between gap-4">

                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--accent)]">
                    <FolderKanban
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </div>

                  {/* CARD LINKS */}
                  <div className="flex items-center gap-2">

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub className="h-4 w-4" />
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}

                  </div>
                </div>

                {/* TITLE */}
                <h3 className="mt-8 text-xl font-bold leading-tight text-[var(--foreground)] sm:text-2xl">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="mt-auto pt-8">

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="neon-chip px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </article>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}