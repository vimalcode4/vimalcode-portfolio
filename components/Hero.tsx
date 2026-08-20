import Image from "next/image";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
  id="home"
  className="section-shell scroll-mt-32 px-6 pt-8 pb-0 sm:pt-10 lg:px-8 lg:pt-8 lg:pb-0"
>
 <div className="mx-auto grid min-h-[calc(100vh-07rem)] max-w-6xl items-center gap-12 sm:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Text */}
        <div className="max-w-2xl lg:order-2">
          <div className="surface-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[var(--muted)]">
            <Sparkles className="h-4 w-4 text-[var(--accent)]" />
            {profile.title}
          </div>

          <p className="section-kicker mt-7">
            Hey, I’m {profile.shortName}
          </p>

          <h1 className="mt-4 text-5xl font-normal leading-[1.08] tracking-[-0.045em] text-[var(--foreground)] sm:text-6xl lg:text-[3.75rem]">
            hi,{" "}
            <span className="font-bold text-[var(--accent)]">
              {profile.shortName.toLowerCase()}
            </span>{" "}
            here.
            <span
              className="ml-2 inline-block h-[0.9em] w-[3px] translate-y-[0.08em] bg-[var(--accent)]"
              style={{
                animation: "cursor-blink 1s steps(1) infinite",
              }}
            />
          </h1>

          <p className="mt-6 max-w-2xl text-[17px] leading-[1.9] text-[var(--muted)] sm:text-lg">
            I primarily work on backend development, data science, machine
            learning, and building scalable applications that solve real-world
            problems. I enjoy transforming ideas into practical software
            solutions through clean code, structured problem-solving, and
            continuous learning.
          </p>

          <div className="mt-8">
            <a
              href={`mailto:${profile.email}`}
              className="neon-button-secondary inline-flex rounded-[0.75rem] px-5 py-2.5 text-sm"
            >
              <Mail className="h-4 w-4" />
              Say hello
            </a>
          </div>


        </div>

        {/* Photo */}
        <div className="relative flex w-full items-center justify-center lg:order-1 lg:justify-center">
          <div className="relative aspect-[4/5] w-full max-w-[290px] overflow-hidden">
            <Image
              src={profile.photo}
              alt={`${profile.shortName} portrait`}
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 30vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}