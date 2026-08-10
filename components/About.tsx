import { GraduationCap, Target } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";

export default function About() {
  return (
    <section id="about" className="section-shell scroll-mt-32 px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="section-kicker">01 / About</p>
          <h2 className="section-title sm:max-w-none">
            Calm design, serious direction, and a clear growth path.
          </h2>
          <p className="section-description">
            I’m building VimalCode as a professional portfolio that shows my
            work in software, AI, data science, and content creation. My focus
            is to keep things minimal, modern, and genuinely useful for
            recruiters, collaborators, and future opportunities with global
            technology teams.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="surface-panel surface-hover rounded-[1.75rem] p-5">
              <Target className="h-5 w-5 text-[var(--accent)]" />
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                Passion
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                Creating software & sharing knowledge
              </p>
            </div>
            <div className="surface-panel surface-hover rounded-[1.75rem] p-5">
              <GraduationCap className="h-5 w-5 text-[var(--accent)]" />
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                Goal
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                Software Engineer specializing in AI
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="surface-panel rounded-[2rem] p-6">
            <p className="section-kicker">Snapshot</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4">
                <p className="text-sm text-[var(--muted)]">Role focus</p>
                <p className="mt-2 text-base font-semibold text-[var(--foreground)]">
                  Software Engineer
                </p>
              </div>
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4">
                <p className="text-sm text-[var(--muted)]">Secondary path</p>
                <p className="mt-2 text-base font-semibold text-[var(--foreground)]">
                  AI & Data Science
                </p>
              </div>
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4">
                <p className="text-sm text-[var(--muted)]">Creative side</p>
                <p className="mt-2 text-base font-semibold text-[var(--foreground)]">
                  YouTube & content
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="surface-panel surface-hover rounded-[2rem] p-6">
              <Target className="h-5 w-5 text-[var(--accent)]" />
              <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)]">
                Current mission
              </h3>
              <p className="mt-3 text-[var(--muted)]">
                Building production-ready web applications, improving AI and
                data science skills, and creating projects that reflect real
                software engineering practices.
              </p>
            </div>
            <div className="surface-panel surface-hover rounded-[2rem] p-6">
              <FaYoutube className="h-5 w-5 text-[var(--accent)]" />
              <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)]">
                Content direction<br></br>
              </h3>
              <p className="mt-3 text-[var(--muted)]">
                • Tech & Coding 💻<br></br>
                • Web Development 🌐<br></br>
                • AI & Projects 🤖<br></br>
                • Lifestyle ✨<br></br>
                • Travel & Vlogs 🌍<br></br>
                • Creative Ideas 🎬<br></br>
                • Daily Life 📸
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}