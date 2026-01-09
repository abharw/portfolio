import { Github } from "lucide-react";
import { FadeIn } from "./fade-in";

const projects = [
  {
    title: "Sentinel",
    description: [
      "Go-based AI governance gateway preventing cost overruns across LLM providers and MCP servers",
      "Reduced policy deployment from hours to under 5 minutes via Python SDK",
      "Policy engine with model-specific, provider-wide, and global enforcement",
    ],
    technologies: ["Go", "Python", "SQLite", "LangChain", "MCP"],
    github: "https://github.com/abharw/sentinel",
    demo: "#",
    featured: true,
  },
  {
    title: "Verity",
    description: [
      "Content authenticity platform with AI detection, IPFS storage, and Polygon smart contracts",
      "Full-stack app with FastAPI backend and Next.js frontend for verification",
      "Immutable verification system for digital content tampering and deepfakes",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "MongoDB",
      "IPFS",
      "Polygon",
    ],
    github: "https://github.com/abharw/verity",
    demo: "#",
    featured: false,
  },
  {
    title: "Ecosort",
    description: [
      "Autonomous waste sorting with 82% accuracy using YOLOv5 on 25K+ images",
      "Multi-threaded architecture optimized for 30 FPS on Raspberry Pi 5",
      "Precision servo-controlled mechanical separation system",
    ],
    technologies: [
      "Python",
      "YOLOv5",
      "OpenCV",
      "Raspberry Pi",
      "Computer Vision",
    ],
    github: "https://github.com/abharw/ecosort",
    demo: "#",
    featured: false,
  },
  {
    title: "Liemap",
    description: [
      "NetLogo simulation visualizing the spread of lies in different cultural contexts",
      "Analyzes deception patterns based on severity, benefit, and social proximity",
    ],
    technologies: [
      "NetLogo",
      "Agent-Based Modeling",
    ],
    github: "https://github.com/abharw/liemap",
    demo: "#",
    featured: false,
  },
  {
    title: "PyScan Pro",
    description: [
      "Learning tool with integrated code editor and step-by-step tracing",
      "Comprehensive Python programming education platform",
    ],
    technologies: ["Python", "OpenCV", "PIL", "Tesseract"],
    github: "https://github.com/abharw/pytutor",
    demo: "#",
    featured: false,
  },
];

export function Projects() {
  // Sort projects so featured appears first
  const sortedProjects = [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  return (
    <section id="projects" className="mb-24 scroll-mt-20 md:mb-32">
      <FadeIn>
        <h2 className="mb-8 text-sm uppercase tracking-wider text-muted-foreground">
          Projects
        </h2>
      </FadeIn>

      <div className="space-y-8">
        {sortedProjects.map((project, index) => (
          <FadeIn key={index} delay={0.1 + index * 0.1}>
            <div className="group relative rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 md:p-8 transition-all hover:border-accent/50 hover:bg-card hover:shadow-lg">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      {project.featured && (
                        <div className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                          Featured
                        </div>
                      )}
                      <h3 className="text-xl md:text-2xl font-medium">{project.title}</h3>
                    </div>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent font-medium flex-shrink-0"
                  >
                    <Github className="h-5 w-5" strokeWidth={1.5} />
                    <span>View Code</span>
                  </a>
                </div>
                <ul className="ml-6 space-y-2 text-base leading-relaxed text-muted-foreground list-disc list-outside">
                  {project.description.map((point, idx) => (
                    <li key={idx} className="pl-2">
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="inline-flex items-center rounded-md border border-accent px-3 py-1 text-xs font-medium text-accent bg-transparent">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
