import { FadeIn } from "./fade-in"

export function About() {
  return (
    <section id="about" className="mb-24 scroll-mt-20 md:mb-32">
      <FadeIn>
        <h2 className="mb-8 text-sm uppercase tracking-wider text-muted-foreground">About</h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="space-y-6 text-lg leading-relaxed max-w-3xl">
          <p>
            I'm a developer and entrepreneur passionate about building intelligent systems that solve real-world problems. 
            Currently pursuing a BS in AI and Statistics & Machine Learning at Carnegie Mellon University (Expected May 2028, GPA: 3.5), 
            where I'm focusing on creating scalable AI-powered applications that make technology more accessible and intuitive.
          </p>
          <p>
            As Chief Technology Officer at{" "}
            <span className="font-medium text-foreground">Basics</span>
            , I'm leading the development of an AI-powered learning platform that validates MLOps work completion 
            and automates training content creation. Previously, I've built enterprise AI solutions at Karini AI, 
            developed intelligent recruiting tools at Sparo, and conducted medical AI research at Dartmouth-Hitchcock Medical Center.
          </p>
          <p>
            I specialize in full-stack development with Next.js, React, and Python, alongside deep experience in AI/ML 
            frameworks like LangChain, LangGraph, PyTorch, and LLM integrations. My technical expertise spans from building 
            conversational AI systems and computer vision applications to scalable backend infrastructure with Go, Node.js, 
            and cloud platforms like AWS and Azure.
          </p>
        </div>
      </FadeIn>
    </section>
  )
}
