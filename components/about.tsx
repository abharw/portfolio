import { Github, Inbox, Linkedin, Phone, PhoneCall } from "lucide-react"
import { FadeIn } from "./fade-in"

export function About() {
  return (
    <section id="about" className="mb-24 scroll-mt-20 md:mb-32">
      <FadeIn>
        <h2 className="mb-8 text-sm uppercase tracking-wider text-muted-foreground">About</h2>
      </FadeIn>
      <div className="grid gap-8 md:grid-cols-3">
        <FadeIn delay={0.1} className="space-y-6 text-lg leading-relaxed md:col-span-2">
          <p>
            I'm a developer passionate about building intelligent systems that solve real-world problems. I'm
            currently studying Statistics & Machine Learning at Carnegie Mellon University, focusing on creating
            scalable AI-powered applications that make technology more accessible and intuitive.
          </p>
          <p>
            Right now, I'm building{" "}
            <span className="font-medium text-foreground">Basics</span>
            , a startup leveraging AI to bring seamless learning experiences across platforms. Previously,
            I've architected enterprise AI solutions at KariniAI, built intelligent recruiting tools at Sparo,
            and conducted medical AI research at Dartmouth-Hitchcock Medical Center.
          </p>
          <p>
            I specialize in full-stack development with Next.js, React, and Python, alongside deep experience
            in AI/ML frameworks like LangChain, PyTorch, and LLM integrations. Whether it's building conversational
            AI systems, computer vision applications, or scalable backend infrastructure, I love creating solutions
            at the intersection of AI and practical software engineering.
          </p>
        </FadeIn>
        <FadeIn delay={0.2} direction="left">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider">Connect</h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://github.com/abharw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-5 w-5" strokeWidth={1.5} />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/arav-bhardwaj1209/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" strokeWidth={1.5} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="mailto:aravb09@gmail.com"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Inbox className="h-5 w-5" strokeWidth={1.5} />
                <span className="text-sm">Email</span>
              </a>
              <a
                href="tel:+16468297060"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <PhoneCall className="h-5 w-5" strokeWidth={1.5} />
                <span className="text-sm">Phone</span>
              </a>
              
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
