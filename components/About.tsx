import { GraduationCap, Target } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.36em] text-[var(--accent)]">
            About me
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[var(--foreground)] sm:text-5xl">
            Calm design, serious direction, and a clear growth path.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            I’m building VimalCode as a professional portfolio that shows my
            work in software, AI, data science, and content creation. My focus
            is to keep things minimal, modern, and genuinely useful for
            recruiters, collaborators, and future opportunities with global
            technology teams.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-[var(--border)] bg-white p-5 shadow-sm">
              <Target className="h-5 w-5 text-[var(--accent)]" />
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                Passion
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                Creating software & sharing knowledge
              </p>
            </div>
            <div className="rounded-3xl border border-[var(--border)] bg-white p-5 shadow-sm">
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
          <div className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_18px_50px_rgba(21,32,51,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Professional snapshot
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-[var(--background-soft)] p-4">
                <p className="text-sm text-[var(--muted)]">Role focus</p>
                <p className="mt-2 text-base font-semibold text-[var(--foreground)]">
                  Software Engineer
                </p>
              </div>
              <div className="rounded-3xl bg-[var(--background-soft)] p-4">
                <p className="text-sm text-[var(--muted)]">Secondary path</p>
                <p className="mt-2 text-base font-semibold text-[var(--foreground)]">
                  AI & Data Science
                </p>
              </div>
              <div className="rounded-3xl bg-[var(--background-soft)] p-4">
                <p className="text-sm text-[var(--muted)]">Creative side</p>
                <p className="mt-2 text-base font-semibold text-[var(--foreground)]">
                  YouTube & content
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,#ffffff,#f8f2e8)] p-6 shadow-sm">
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
            <div className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,#ffffff,#f8f2e8)] p-6 shadow-sm">
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