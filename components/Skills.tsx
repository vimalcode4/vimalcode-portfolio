import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-[var(--border)] bg-white/85 p-8 shadow-[0_24px_60px_rgba(21,32,51,0.08)] backdrop-blur sm:p-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.36em] text-[var(--accent)]">
            Skills
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[var(--foreground)]">
            Tools I use and skills I keep sharpening.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
            The stack stays focused on practical web development, Python, and
            the foundations needed for AI and data science.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[var(--border)] bg-[var(--background-soft)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-transform hover:-translate-y-0.5"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}