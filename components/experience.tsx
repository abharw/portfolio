import { Link} from "lucide-react"
import { FadeIn } from "./fade-in"

const experiences = [
  {
    period: "2024 — Present",
    title: "Co-Founder",
    company: "Basics",
    url: "https://www.basicsu.com/",
    description:
      "Building an AI-powered platform to enable seamless learning experiences across multiple AI platforms. Architecting full-stack infrastructure and developing intelligent learning workflows that adapt to individual user needs.",
    technologies: ["Next.js", "TypeScript", "AI/ML", "MongoDB"],
  },
  {
    period: "May 2025 — July 2025",
    title: "Fullstack Software Intern",
    company: "Karini AI",
    url: "https://www.karini.ai/",
    description:
      "Developed MCP Registry™ enabling centralized governance and security controls for 50+ production MCP servers, serving 10+ enterprise clients. Architected enterprise conversational AI solution with Microsoft Teams integration, delivering real-time streaming responses and intelligent document processing. Enhanced multi-agent communication architecture by integrating A2A protocol and Ragas evaluation framework.",
    technologies: ["Next.js", "Tailwind", "MongoDB", "Azure", "Bot Framework SDK", "LangChain"],
  },
  {
    period: "June 2024 — July 2024",
    title: "Backend Software Intern",
    company: "Sparo",
    url: "https://sparo-frontend.vercel.app/",
    description:
      "Architected automated LinkedIn data extraction pipeline using Puppeteer and Node.js to process 1,000+ professional profiles, reducing manual research time by 85%. Interfaced with connection-mapping algorithms to identify warm networking pathways, improving placement efficiency for AI recruiting platform.",
    technologies: ["Node.js", "Puppeteer", "JavaScript", "Data Processing"],
  },
  {
    period: "June 2023 — July 2023",
    title: "Research Lab Intern",
    company: "Levy Lab (Dartmouth-Hitchcock)",
    url: "https://jlevy44.github.io/levylab/",
    description:
      "Devised novel GAN architecture in PyTorch to generate high-fidelity synthetic tissue images from colorectal transcriptomics data, reducing dependence on invasive biopsy procedures. Optimized computational workflows using Slurm HPC clusters to process terabyte-scale whole slide imaging datasets, achieving 40% faster processing times.",
    technologies: ["PyTorch", "Python", "GANs", "HPC", "Slurm", "Computer Vision"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="mb-24 scroll-mt-20 md:mb-32">
      <FadeIn>
        <h2 className="mb-8 text-sm uppercase tracking-wider text-muted-foreground">Experience</h2>
      </FadeIn>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="group relative rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="mb-2 text-sm font-medium text-accent">{exp.period}</div>
                  <h3 className="mb-1 text-xl font-medium">{exp.title}</h3>
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-3 inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-accent"
                  >
                    {exp.company}
                    <Link className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                  <p className="mb-4 leading-relaxed text-muted-foreground">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="rounded-md border border-border px-3 py-1 text-sm text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
