import { FadeIn } from "./fade-in"

export function Hero() {
  return (
    <section className="mb-24 md:mb-32">
      <FadeIn delay={0.1}>
        <h1 className="mb-4 text-5xl font-medium leading-tight text-balance md:text-6xl lg:text-7xl">Arav Bhardwaj</h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="mb-6 text-xl text-muted-foreground md:text-2xl">Full-stack Developer & Founder</p>
      </FadeIn>
      <FadeIn delay={0.3}>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Building intelligent systems at the intersection of AI and software engineering. CMU student working on making AI-powered learning accessible to everyone.
        </p>
      </FadeIn>
    </section>
  )
}
