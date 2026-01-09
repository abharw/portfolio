import { Link} from "lucide-react"
import { FadeIn } from "./fade-in"

const experiences = [
  {
    period: "2024 — Present",
    title: "Chief Technology Officer",
    company: "Basics",
    url: "https://www.basicsu.com/",
    description: [
      "Developed real-time monitoring infrastructure that tracks MLOps execution across development environments, leading to a $5K pilot customer acquisition in under 2 months",
      "Architected automated content generation system using LangGraph that transforms unstructured company data into validated workflows, cutting content creation time from 40+ hours to under 2 hours",
      "Drove early-stage growth through rapid product iteration and customer discovery, reaching YC final-round interviews and securing 1st place at Pittsburgh pitch competition",
    ],
    technologies: ["LangGraph", "Next.js", "TypeScript", "Python", "MCP", "MLOps"],
  },
  {
    period: "May 2025 — July 2025",
    title: "Fullstack Software Engineer",
    company: "Karini AI",
    url: "https://www.karini.ai/",
    description: [
      "Created MCP Registry™ platform managing governance for 30+ production servers across 10+ enterprise clients, streamlining security deployments from days to minutes",
      "Architected Microsoft Teams AI integration for enterprise client processing 1,000+ documents with sub-2 second response times and 95%+ accurate citations",
      "Enhanced multi-agent system reliability through A2A protocol integration and Ragas evaluation framework implementation in LangGraph architecture",
    ],
    technologies: ["Next.js", "React", "MongoDB", "Azure", "Bot Framework SDK", "LangGraph", "Ragas"],
  },
  {
    period: "June 2024 — July 2024",
    title: "Backend Software Intern",
    company: "Sparo",
    url: "https://sparo-frontend.vercel.app/",
    description: [
      "Designed and implemented automated LinkedIn data extraction system processing 1,000+ profiles at 120 profiles/hour with 98% accuracy, eliminating 85% of manual research overhead",
      "Developed intelligent matching algorithms leveraging connection mapping to identify networking opportunities, boosting candidate placement success rate by 30%",
    ],
    technologies: ["Node.js", "Puppeteer", "JavaScript", "Data Processing"],
  },
  {
    period: "June 2023 — July 2023",
    title: "Machine Learning Intern",
    company: "Dartmouth-Hitchcock Medical Center",
    url: "https://jlevy44.github.io/levylab/",
    description: [
      "Designed Wasserstein GAN architecture with gradient penalty for generating synthetic colorectal tissue images from omics data, using spectral normalization to improve training stability",
      "Optimized HPC workflows on Slurm clusters for whole slide image processing, achieving 40% performance improvement through distributed parallel processing of terabyte-scale datasets",
    ],
    technologies: ["PyTorch", "Python", "GANs", "HPC", "Slurm", "Computer Vision"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="mb-24 scroll-mt-20 md:mb-32">
      <FadeIn>
        <h2 className="mb-8 text-sm uppercase tracking-wider text-muted-foreground">Experience</h2>
      </FadeIn>
      <div className="relative space-y-6">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
        
        {experiences.map((exp, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="relative">
              {/* Timeline dot - centered on line */}
              <div className="absolute left-8.25 top-5 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-accent hidden md:block z-10"></div>
              
              <div className="group relative ml-0 md:ml-16 rounded-xl border border-border bg-card/50 backdrop-blur-sm p-5 md:p-6 transition-all hover:border-accent/50 hover:bg-card hover:shadow-lg">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-lg md:text-xl font-medium">{exp.title}</h3>
                        <span className="text-muted-foreground">·</span>
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm md:text-base text-muted-foreground transition-colors hover:text-accent font-medium"
                        >
                          {exp.company}
                          <Link className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </a>
                      </div>
                    </div>
                    <div className="text-xs md:text-sm font-medium text-accent md:text-right whitespace-nowrap">{exp.period}</div>
                  </div>
                  <ul className="ml-6 space-y-1.5 text-sm md:text-base leading-relaxed text-muted-foreground list-disc list-outside">
                    {exp.description.map((point, idx) => (
                      <li key={idx} className="pl-2">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="inline-flex items-center rounded-md border border-accent px-3 py-1 text-xs font-medium text-accent bg-transparent">
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
