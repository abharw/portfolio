import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Mail, Linkedin, ChevronRight, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import InteractiveGrid from "@/components/animata/background/interactive-grid"

export default function Home() {
  return (
      <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full bg-opacity-0 backdrop-blur">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="#home" className="flex items-center space-x-2">
              <span className="inline-block font-bold pl-6  ">Portfolio</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#about"
                className="flex items-center text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="#coursework"
                className="flex items-center text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
              >
                Coursework
              </Link>
              <Link
                href="#projects"
                className="flex items-center text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
          {/* <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/abharw" target="_blank" rel="noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="www.linkedin.com/in/arav-bhardwaj1209" target="_blank" rel="noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:aravb@andrew.cmul@example.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </nav>
          </div> */}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home"> 
      <InteractiveGrid>
      <section className="w-full min-h-[80vh] flex items-center py-8">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold sm:text-5xl xl:text-7xl/none">
                Hi, I'm Arav 
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A passionate developer with expertise in web development, machine learning, and software engineering.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="#projects">
                  View My Work <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">

          </div>
        </div>
      </div>
      </section> 
      </InteractiveGrid>
      </section>

      {/* About Me Section */}
      <section id="about" className="w-full min-h-screen flex items-center justify-center py-8 md:py-24 lg:py-32 bg-gradient-to-b from-zinc-950 to-zinc-800">
      <div className="container px-4 md:px-6 my-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl align-middle items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter">My Story</h3>
              <p className="text-muted-foreground">
                I began my journey in technology when I was in middle school, where I participated in VEX robotics. During quarantine, I read  
                <span className="italic"> Neural Networks and Deep Learning</span> by Michael Nielsen; I fell down the 
                machine learning rabbit hole and started building projects with Python and JavaScript. I quickly realized my passion for coding and problem-solving,
                leading me to pursue a degree in Statistics and Machine Learning at Carnegie Mellon University.
              </p>
              <p className="text-muted-foreground mt-4">
                Throughout my academic career, I've worked on various projects ranging from web
                applications to machine learning models. I'm constantly learning and exploring new technologies to
                expand my skill set.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter">Skills</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>JavaScript</Badge>
              <Badge>TypeScript</Badge>
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>Node.js</Badge>
              <Badge>Python</Badge>
              <Badge>Machine Learning</Badge>
              <Badge>SQL</Badge>
              <Badge>Git</Badge>
              <Badge>RESTful APIs</Badge>
              <Badge>Azure</Badge>
              <Badge>AWS</Badge>
            </div>
            <h3 className="text-2xl font-bold tracking-tight mt-6">Interests</h3>
            <p className="text-muted-foreground">
              When I'm not building, you can find me going on nature walks, reading murder mysteries, playing video games,
              or exploring new food places. I'm also passionate about music and I enjoy traveling.
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* Coursework Section */}
      <section id="coursework" className="w-full min-h-screen flex items-center justify-center py-8 md:py-24 lg:py-32 bg-gradient-to-b from-zinc-800 to-zinc-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Coursework</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The relevant (and some cool) courses I've completed during my academic journey at Carnegie Mellon University
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 auto-rows-auto">
            <Card className="h-min">
              <CardHeader>
                <CardTitle>Fundamentals of Programming & CS</CardTitle>
              </CardHeader>
              <CardContent>
                  <p>Data Structures, Algorithms & Object-Oriented-Programming</p>
              </CardContent>
            </Card>
            <Card className="h-min">
              <CardHeader>
                <CardTitle>Differential and Integral Calculus</CardTitle>
              </CardHeader>
              <CardContent>
                  <p>Pretty self-explanatory</p>
              </CardContent>

            </Card>
            <Card className="h-min">
              <CardHeader>
                <CardTitle>Principles of Microeconomics</CardTitle>
              </CardHeader>
              <CardContent>
                  <p>Learned why oil prices are so high and why piracy is actually bad for consumers</p>
              </CardContent>
            </Card>
            <Card className="h-min">
              <CardHeader>
                <CardTitle>Principles of Iterative Computation</CardTitle>
              </CardHeader>
              <CardContent>
                  <p> Imperative programming in C & proving correctness of programs</p>
              </CardContent>

            </Card>
            <Card className="h-min">
              <CardHeader>
                <CardTitle>Integration & Approximation</CardTitle>
              </CardHeader>
              <CardContent>
                  <p>Learned to love trignometric substitution and hate series tests</p>
              </CardContent>

            </Card>
              <Card className="h-min">
              <CardHeader>
                <CardTitle>Introduction to Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                  <p>Jumped around history and subjects, concerned only with interesting questions and good answers</p>
              </CardContent>

            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full min-h-screen flex items-center justify-center py-8 md:py-24 lg:py-32 bg-gradient-to-b from-zinc-950 to-zinc-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A showcase of my recent work and personal projects.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden h-min">
              <CardHeader>
                <CardTitle>ANDI Chatbot</CardTitle>
                <CardDescription>A powerful AI assistant for Microsoft Teams </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground list-disc">
                  <li>
                  Built real-time conversational AI bot with streaming responses, file processing with S3 integration, 
                  interactive feedback systems, and references display  
                  </li>
                  <li>
                  Developed conversation state management, thread handling, and command-based interactions
                  </li>
                  <li>
                    Utilized Bot Framework SDK, Azure Bot Service, Node.js, and <a href="https://karini.ai" target="_blank" rel="noreferrer">Karini.ai</a> API
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://www.karini.ai/" target="_blank" rel="noreferrer">
                    <Image src="/karini.png" 
                     alt="karini" width={20} height={20} className="mr-2" />
                    Karini
                  </Link>
                </Button>
                <Button size="sm" asChild>
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden h-min">
              <CardHeader>
                <CardTitle>Ecosort</CardTitle>
                <CardDescription>A Raspberry Pi powered Trash/Recycling sorter</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground list-disc">
                  <li>
                    Leveraged YOLOv5 trained on TrashNet to classify and sort trash & recycling via custom-built garbage cover
                    powered by a Raspberry Pi 5, servo motors, and an ArduCam
                  </li>
                  <li>
                    Utilized multi-threading to streamline OpenCV frame captures with AI inference and used Firebase to display live updates
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/abharw/ecosort/blob/main/main.py" target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden h-min">
              <CardHeader>
                <CardTitle>PyTutor</CardTitle>
                <CardDescription>A learning and debugging tool for students</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground list-disc">
                  <li>
                    Developed a learning tool for students that integrates a code editor, an interactive file explorer, and a recursive
                    Python interpreter to enable line-by-line code-tracing 
                  </li>
                  <li>
                    Supports complex functions, loops, and conditional statements
                  </li>
                  <li>
                    Implements OCR via PyTesseract to scan both typed and handwritten code from images
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/abharw/pyscanpro.git" target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden h-min">
              <CardHeader>
                <CardTitle>LieMap</CardTitle>
                <CardDescription>A Netlogo-based model to simulate the spread of lies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground list-disc">
                  <li>
                      Visualizes lie spread in different cultural contexts based  lie severity, personal benefit, and social proximity.
                  </li>
                  <li>
                    Utilizes NetLogo for visualization and parameterization of the model, which was based on literature rewview of lying dynamics
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/abharw/lying.git" target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden h-min">
              <CardHeader>
                <CardTitle>PokerAI</CardTitle>
                <CardDescription>An advanced probabilistic poker bot</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground list-disc">
                  <li>
                    Developed a system that tracks opponent betting patterns and adapts strategy based on observed behaviors, 
                    including dynamically adjusted decisions based on range.
                  </li>
                  <li>
                    Created betting strategies that balance risk-reward based on hand strength evaluation and opponent tendency analysis.
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/abharw/pokahbot.git" target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden h-min">
              <CardHeader>
                <CardTitle>LinkedIn Webscraper</CardTitle>
                <CardDescription>A NodeJS-powered webscraper to aid with AI recruiting</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground list-disc">
                  <li>
                    Developed LinkedIn web scraper with Puppeteer to discover warm points of contact between clients and alums
                    at targeted firms to aid Sparo.ai, an AI-powered recruiting platform
                  </li>
                  <li>
                    Utilized NodeJS to integrate web scraping application with project backend 
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                <Link href="https://platform.sparo.app/" target="_blank" rel="noreferrer">
                    <Image src="/sparo.png" 
                     alt="sparo" width={20} height={20} className="mr-2" />
                    Sparo
                  </Link>
                </Button>
                <Button size="sm" asChild>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-800 to-zinc-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a project in mind or want to collaborate? Feel free to reach out!
              </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-2 lg:col-span-2 items-center text-center">
              <div className="mt-4 grid gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:aravb@andrew.cmu.edu" className="hover:underline">
                    aravb@andrew.cmu.edu
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5" />
                  <a
                    href="www.linkedin.com/in/arav-bhardwaj1209"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    linkedin.com/in/arav-bhardwaj1209
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  <a
                    href="https://github.com/abharw"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    github.com/abharw
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="h-5 w-5" />
                  <a
                    href="https://www.instagram.com/abh4rdwaj/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    https://www.instagram.com/abh4rdwaj/
                  </a>
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold">Location</h3>
                <p className="text-muted-foreground mt-2">Pittsburgh, Pennsylvania, USA</p>
              </div>
            </div>
            {/* <Card className="bg-transparent border-0">
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full bg-zinc-800  rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full bg-zinc-800 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] bg-zinc-800 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button type="submit">Send Message</Button>
                </form>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Arav Bhardwaj. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" rel="noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:your.email@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>

  )
}
