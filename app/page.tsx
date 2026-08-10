import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(57,255,20,0.12),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_center,rgba(124,255,91,0.04),transparent_60%)]" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="footer-shell px-6 py-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-center text-sm text-[var(--muted)]">
          <p>
            <span className="font-semibold tracking-[0.2em] text-[var(--accent)]">
              VimalCode
            </span>{" "}
            © 2026. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}