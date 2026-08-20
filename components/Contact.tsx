import {
  Link2,
  Mail,
  MessageSquare,
} from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaPinterest,
  FaSpotify,
  FaXTwitter,
} from "react-icons/fa6";

import { profile } from "@/data/profile";

const socialLinks = [
  {
    label: "GitHub",
    href: profile.links.github,
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    icon: FaLinkedin,
  },
  {
    label: "X",
    href: profile.links.x,
    icon: FaXTwitter,
  },
  {
    label: "Medium",
    href: profile.links.medium,
    icon: FaMedium,
  },
  {
    label: "Instagram",
    href: profile.links.instagram,
    icon: FaInstagram,
  },
  {
    label: "Pinterest",
    href: profile.links.pinterest,
    icon: FaPinterest,
  },
  {
    label: "Spotify",
    href: profile.links.spotify,
    icon: FaSpotify,
  },
  {
    label: "Beacons",
    href: profile.links.beacons,
    icon: Link2,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-shell scroll-mt-32 px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.9fr]">
        {/* Contact intro */}
        <div className="surface-panel rounded-2xl p-8 sm:p-10">
          <p className="section-kicker">04 / Contact</p>

          <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
            Let’s connect.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            Open to interesting conversations, collaborations, internships,
            and opportunities. If you have an idea or want to discuss
            something, feel free to reach out.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="neon-button-primary inline-flex w-full items-center justify-center gap-2 rounded-[1rem] px-6 py-3 text-sm sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Say hello
            </a>

            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="neon-button-secondary inline-flex w-full items-center justify-center gap-2 rounded-[1rem] px-6 py-3 text-sm sm:w-auto"
            >
              <MessageSquare className="h-4 w-4" />
              LinkedIn message
            </a>
          </div>
        </div>

        {/* Social links */}
        <aside className="surface-panel rounded-2xl p-8 sm:p-10">
          <p className="section-kicker">Social links</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="surface-panel surface-hover group flex min-h-[58px] items-center justify-between rounded-xl px-4 py-3 transition-all"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-[var(--accent)] transition-transform group-hover:scale-110" />
                    <span className="text-sm font-semibold text-[var(--foreground)]">
                      {item.label}
                    </span>
                  </span>

                  <span className="text-sm text-[var(--muted)] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              );
            })}
          </div>
        </aside>
      </div>
    </section>
  );
}