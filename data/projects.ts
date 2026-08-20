export type PortfolioProject = {
  title: string;
  description: string;
  technologies: string[];
  github: string | null;
  demo: string | null;
  image: string;
};

export const projects: PortfolioProject[] = [
  {
    title: "Blockchain Audit Control & GRC",
    
    description:
      "A blockchain-based academic audit system designed to provide secure, transparent, and tamper-resistant record management.",
    technologies: ["Blockchain", "Security", "GRC"],
    github:
      "https://github.com/vimalcode4/Secure-Academic-Records-using-Blockchain",
    demo: null,
    image: "/projects/blockchain-audit.png",
  },

  {
    title: "Civic Tracking and Reporting System",

    description:
      "A web-based civic complaint platform where citizens can report local issues and track resolution progress through a structured workflow.",
    technologies: [
      "React 19.1.1",
      "TailwindCSS",
      "JavaScript",
      "Node.js",
      "Express",
    ],
    github:
      "https://github.com/vimalcode4/Clean-street-InfosysProject",
    demo: "https://clean-street.vercel.app/",
    image: "/projects/civic-tracking.png",
  },

  {
    title: "VimalCode-V2 Portfolio",

    description:
      "A personal developer portfolio designed to showcase software projects, technical skills, and development work.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    github:
      "https://github.com/vimalcode4/vimalcode-portfolio",
    demo: "https://www.vimalcode.me/",
    image: "/projects/vimalcode-portfolio.png",
  },
];