export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[rgba(251,248,242,0.8)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border)] bg-white text-sm font-black tracking-[0.3em] text-[var(--foreground)] shadow-[0_16px_40px_rgba(21,32,51,0.08)]">
            VC
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
              VimalCode
            </p>
            <p className="text-xs text-[var(--muted)]">Professional portfolio</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-[var(--muted)] md:flex">
          <a href="#about" className="transition-colors hover:text-[var(--foreground)]">
            About
          </a>
          <a href="#skills" className="transition-colors hover:text-[var(--foreground)]">
            Skills
          </a>
          <a href="#projects" className="transition-colors hover:text-[var(--foreground)]">
            Projects
          </a>
          <a href="#contact" className="transition-colors hover:text-[var(--foreground)]">
            Contact
          </a>
        </div>

        <a
          href="mailto:vimalcodeyt@gmail.com"
          className="rounded-full border border-[var(--border)] bg-[var(--foreground)] px-5 py-2 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(21,32,51,0.14)] transition-transform hover:-translate-y-0.5"
        >
          Hire me
        </a>
      </div>
    </nav>
  );
}