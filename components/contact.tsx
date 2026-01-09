"use client"

import { useForm, ValidationError } from '@formspree/react'
import { FadeIn } from "./fade-in"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { CheckCircle2, Loader2 } from "lucide-react"

export function Contact() {
  const [state, handleSubmit] = useForm("mkoowjvz")

  if (state.succeeded) {
    return (
      <section id="contact" className="mb-12 scroll-mt-20 md:mb-16">
        <FadeIn>
          <h2 className="mb-8 text-sm uppercase tracking-wider text-muted-foreground">
            Contact
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 text-center">
            <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-accent" strokeWidth={1.5} />
            <h3 className="mb-2 text-2xl font-medium">Thanks for reaching out!</h3>
            <p className="text-muted-foreground">
              I'll get back to you as soon as possible.
            </p>
          </div>
        </FadeIn>
      </section>
    )
  }

  return (
    <section id="contact" className="mb-12 scroll-mt-20 md:mb-16">
      <FadeIn>
        <h2 className="mb-8 text-sm uppercase tracking-wider text-muted-foreground">
          Contact
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 md:p-8 transition-all hover:border-accent/50 hover:shadow-lg">
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Get in touch</h3>
            <p className="text-sm text-muted-foreground">
              Have a project in mind or just want to chat? Send me a message below.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
                disabled={state.submitting}
                className="w-full"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-sm text-destructive"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or just say hello..."
                rows={6}
                required
                disabled={state.submitting}
                className="w-full resize-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-sm text-destructive"
              />
            </div>

            <Button
              type="submit"
              disabled={state.submitting}
              className="w-full md:w-auto"
            >
              {state.submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </div>
      </FadeIn>
    </section>
  )
}

