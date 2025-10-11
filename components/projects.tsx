import { ExternalLink, Github } from "lucide-react"
import { FadeIn } from "./fade-in"

const projects = [
  {
    title: "Sentinel",
    description:
      "FastAPI backend enforcing AI governance policies, cost controls, and compliance monitoring for LangChain applications with <10ms latency overhead. Features policy-as-code with YAML-based declarative rules and RBAC-based multi-tenant isolation.",
    technologies: ["FastAPI", "Python", "LangChain", "MongoDB", "YAML", "RBAC"],
    github: "https://github.com/abharw/sentinel",
    demo: "#",
    featured: true,
  },
  {
    title: "Ecosort",
    description:
      "Autonomous waste sorting system achieving 82% classification accuracy using YOLOv5 model trained on 25K+ TrashNet images. Features multi-threaded architecture optimized for 30 FPS on Raspberry Pi 5 with precision servo-controlled mechanical separation.",
    technologies: ["Python", "YOLOv5", "OpenCV", "Raspberry Pi", "Computer Vision"],
    github: "https://github.com/abharw/ecosort",
    demo: "#",
    featured: false,
  },
  {
    title: "PyTorch Transfer Learning",
    description:
      "Implementation of transfer learning techniques using PyTorch for efficient model training on custom datasets. Explores fine-tuning pre-trained models for various computer vision tasks.",
    technologies: ["PyTorch", "Python", "Transfer Learning", "Deep Learning"],
    github: "https://github.com/abharw/pytorch-transfer-learning",
    demo: "#",
    featured: false,
  },
  {
    title: "H2O GBM",
    description:
      "Gradient Boosting Machine implementation using H2O.ai framework for scalable machine learning tasks. Demonstrates automated machine learning capabilities and model optimization techniques.",
    technologies: ["H2O.ai", "Python", "Machine Learning", "GBM"],
    github: "https://github.com/abharw/h2o-gbm",
    demo: "#",
    featured: false,
  },
]

export function Projects() {
  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="mb-24 scroll-mt-20 md:mb-32">
      <FadeIn>
        <h2 className="mb-8 text-sm uppercase tracking-wider text-muted-foreground">Projects</h2>
      </FadeIn>

      {featuredProject && (
        <FadeIn delay={0.1}>
          <div className="group relative mb-8 overflow-hidden rounded-lg border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-xl">
            <div className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              Featured
            </div>
            <h3 className="mb-3 text-2xl font-medium">{featuredProject.title}</h3>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">{featuredProject.description}</p>
            <div className="mb-6 flex flex-wrap gap-2">
              {featuredProject.technologies.map((tech) => (
                <span key={tech} className="rounded-md border border-border px-3 py-1 text-sm text-foreground">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                <Github className="h-4 w-4" strokeWidth={1.5} />
                View Code
              </a>
            </div>
          </div>
        </FadeIn>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {otherProjects.map((project, index) => (
          <FadeIn key={index} delay={0.2 + index * 0.1}>
            <div className="group relative rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg">
              <h3 className="mb-2 text-xl font-medium">{project.title}</h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-md border border-border px-3 py-1 text-xs text-foreground">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" strokeWidth={1.5} />
                  Code
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
