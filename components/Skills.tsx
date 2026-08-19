import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-shell scroll-mt-32 px-6 lg:px-8">
      <div className="surface-panel mx-auto max-w-7xl rounded-2xl p-8 sm:p-10">
        <div className="max-w-2xl">
          <p className="section-kicker">02 / Skills</p>
          <h2 className="section-title sm:max-w-none">
            Tools I use and skills I keep sharpening.
          </h2>
          <p className="section-description">
            The stack stays focused on practical web development, Python, and
            the foundations needed for AI and data science.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="neon-chip px-4 py-2 text-sm font-semibold">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}