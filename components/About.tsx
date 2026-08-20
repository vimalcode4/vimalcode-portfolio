import { Code2, Cpu, Gamepad2 } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";

export default function About() {
  return (
    <section
      id="about"
      className="section-shell -mt-25 scroll-mt-32 px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            ABOUT
        ===================================================== */}
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">

          {/* LEFT — BIG EDITORIAL STATEMENT */}
          <div>

            <p className="section-kicker">
              01 / About
            </p>

           <h2 className="mt-5 max-w-2xl text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-[var(--foreground-bright)] sm:text-6xl lg:text-6xl">
              <span className="block">Just a nerd in progress.</span>
              <span className="block">Building with purpose.</span>
              <span className="block">Growing every day.</span>
            </h2>

        <div className="mt-8 max-w-3xl">
          <p className="section-description text-[18px] leading-[1.8] sm:text-[25px]">
            I’m Vimal, the person behind VimalCode. I build software, explore AI
            and data science, and turn ideas into practical projects. I also enjoy
            creating content, experimenting with technology, and sharing what I
            learn along the way.
          </p>
        </div>

          </div>


          {/* RIGHT — CURRENTLY */}
          <div className="lg:pt-16">

            <div className="surface-panel rounded-2xl p-6 sm:p-7">

              <p className="section-kicker">
                Currently
              </p>

              <div className="mt-6 space-y-5">

                {/* SOFTWARE */}
                <div className="border-b border-[var(--border)] pb-5">
                  <div className="flex items-start gap-4">

                    <Code2
                      className="mt-1 h-5 w-5 shrink-0 text-[var(--accent)]"
                    />

                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                        01
                      </p>

                      <p className="mt-1 text-lg font-semibold text-[var(--foreground-bright)]">
                        Software Development
                      </p>
                    </div>

                  </div>
                </div>


                {/* AI */}
                <div className="border-b border-[var(--border)] pb-5">
                  <div className="flex items-start gap-4">

                    <Cpu
                      className="mt-1 h-5 w-5 shrink-0 text-[var(--accent)]"
                    />

                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                        02
                      </p>

                      <p className="mt-1 text-lg font-semibold text-[var(--foreground-bright)]">
                        AI & Data Science
                      </p>
                    </div>

                  </div>
                </div>


                {/* CONTENT */}
                <div className="border-b border-[var(--border)] pb-5">
                  <div className="flex items-start gap-4">

                    <FaYoutube
                      className="mt-1 h-5 w-5 shrink-0 text-[var(--accent)]"
                    />

                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                        03
                      </p>

                      <p className="mt-1 text-lg font-semibold text-[var(--foreground-bright)]">
                        Content & Creativity
                      </p>
                    </div>

                  </div>
                </div>


                {/* GAMES */}
                <div>
                  <div className="flex items-start gap-4">

                    <Gamepad2
                      className="mt-1 h-5 w-5 shrink-0 text-[var(--accent)]"
                    />

                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                        04
                      </p>

                      <p className="mt-1 text-lg font-semibold text-[var(--foreground-bright)]">
                        Technology & Games
                      </p>
                    </div>

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