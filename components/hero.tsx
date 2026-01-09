import { FadeIn } from "./fade-in"
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react"

export function Hero() {
  return (
    <section className="mb-24 md:mb-32">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <FadeIn delay={0.1}>
            <h1 className="mb-4 text-5xl font-medium leading-tight text-balance md:text-6xl lg:text-7xl">Arav Bhardwaj</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mb-6 text-xl text-muted-foreground md:text-2xl">Chief Technology Officer & Full-stack Engineer</p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Building intelligent systems at the intersection of AI and software engineering. Currently studying AI and Statistics & Machine Learning at Carnegie Mellon University, and leading technical development at Basics.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <a
                href="mailto:aravb09@gmail.com"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                <span>aravb09@gmail.com</span>
              </a>
              <a
                href="tel:+16468297060"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} />
                <span>646-829-7060</span>
              </a>
              <a
                href="https://www.linkedin.com/in/aravb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/abharw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" strokeWidth={1.5} />
                <span>GitHub</span>
              </a>
              <a
                href="/arav_bhardwaj_resume.pdf"
                download
                className="flex items-center gap-2 transition-colors hover:text-foreground font-medium"
              >
                <Download className="h-4 w-4" strokeWidth={1.5} />
                <span>Resume</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
