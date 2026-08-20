import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-shell scroll-mt-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 border-y border-[var(--border)] py-8 sm:flex-row sm:items-center sm:justify-between">
          
          <div className="shrink-0">
            <p className="section-kicker">02 / Stack</p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-3 sm:justify-end">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}