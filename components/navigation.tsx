"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-medium text-foreground hover:text-accent transition-colors">
            AB
          </Link>
          <div className="flex gap-8">
            {["about", "experience", "projects"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm capitalize transition-colors ${
                  activeSection === section
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
