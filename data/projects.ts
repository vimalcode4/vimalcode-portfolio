export type PortfolioProject = {
  title: string;
  description: string;
  technologies: string[];
  github: string | null;
  demo: string | null;
};

export const projects: PortfolioProject[] = [
  {
    title: "Blockchain Audit Control & GRC",

    description:
      "A governance and audit concept centered on tamper-resistant records, compliance visibility, and accountable control workflows.",
    technologies: ["Blockchain", "Security", "GRC"],
    github: "https://github.com/vimalcode4/Secure-Academic-Records-using-Blockchain",
    demo: null,
  },
  {
    title: "Civic Tracking and Reporting System",

    description:
      "A web-based civic complaint platform where citizens can report local issues and track resolution progress through a structured workflow.",
    technologies: ["React 19.1.1", "TailwindCSS ", "JavaScript", "Node.js", "Express"],
    github: "https://github.com/vimalcode4/Clean-street-InfosysProject",
    demo: "https://clean-street.vercel.app/",
  },

  {
    title: "VimalCode-V2 Portfolio",
    
    description:
      "A governance and audit concept centered on tamper-resistant records, compliance visibility, and accountable control workflows.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/vimalcode4/vimalcode-portfolio",
    demo: "https://www.vimalcode.me/",
  }
];