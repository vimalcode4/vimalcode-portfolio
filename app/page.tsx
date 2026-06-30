import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(192,127,58,0.14),transparent_55%)]" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="border-t border-[var(--border)] px-6 py-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-center text-sm text-[var(--muted)]">
          <p>© 2026 VimalCode. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}