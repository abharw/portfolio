"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "MCP Registry™",
      description:
        "an enterprise MCP portal integrated with KariniAI",
      points: [
        "• Developed a centralized registry for MCP servers with security guardrails and governance controls",
        "• Integrated with KariniAI's GenAI platform for enterprise authorization and authentication, enabling usecases in agentic workflows in conjunction with native agent tools",
        "• Utilized Next.js, Tailwind CSS, and MongoDB for the backend",
      ],
      link: {
        text: "Karini",
        icon: "image" as const,
        imageSrc: "/karini.png",
        imageAlt: "karini",
        href: "https://www.karini.ai/announcements/MCP_Registry#blogpost",
      },
    },
    {
      title: "ANDI Chatbot",
      description: "a powerful AI assistant for Microsoft Teams",
      points: [
        "• Built real-time conversational AI bot with streaming responses, file processing with S3 integration, interactive feedback systems, and references display",
        "• Developed conversation state management, thread handling, and command-based interactions",
        "• Utilized Bot Framework SDK, Azure Bot Service, Node.js, and Karini.ai API",
      ],
      link: {
        href: "https://www.karini.ai/",
        text: "Karini",
        icon: "image" as const,
        imageSrc: "/karini.png",
        imageAlt: "karini",
      },
    },
    {
      title: "Ecosort",
      description: "a Raspberry Pi powered Trash/Recycling sorter",
      points: [
        "• Leveraged YOLOv5 trained on TrashNet to classify and sort trash & recycling via custom-built garbage cover powered by a Raspberry Pi 5, servo motors, and an ArduCam",
        "• Utilized multi-threading to streamline OpenCV frame captures with AI inference and used Firebase to display live updates",
        "• Able to separate water bottles, soft drinks, and other recyclables from everyday trash",
      ],
      link: {
        href: "https://github.com/abharw/ecosort/blob/main/main.py",
        text: "Code",
        icon: "github" as const,
      },
    },
    {
      title: "PyTutor",
      description: "a learning and debugging tool for students",
      points: [
        "• Developed a learning tool that integrates a code editor, an interactive file explorer, and a recursive Python interpreter to enable line-by-line code-tracing",
        "• Supports complex functions, loops, and conditional statements",
        "• Implements OCR via PyTesseract to scan both typed and handwritten code from images",
      ],
      link: {
        href: "https://github.com/abharw/pyscanpro.git",
        text: "Code",
        icon: "github" as const,
      },
    },
    {
      title: "LieMap",
      description: "a Netlogo model to simulate the spread of lies",
      points: [
        "• Visualizes lie spread in different cultural contexts based lie severity, personal benefit, and social proximity",
        "• Utilizes NetLogo for visualization and parameterization of the model, which was based on literature review of lying dynamics",
      ],
      link: {
        href: "https://github.com/abharw/lying.git",
        text: "Code",
        icon: "github" as const,
      },
    },
    {
      title: "PokerAI",
      description: "an advanced probabilistic poker bot",
      points: [
        "• Developed a system that tracks opponent betting patterns and adapts strategy based on observed behaviors, including dynamically adjusted decisions based on range",
        "• Created betting strategies that balance risk-reward based on hand strength evaluation and opponent tendency analysis",
      ],
      link: {
        href: "https://github.com/abharw/pokahbot.git",
        text: "Code",
        icon: "github" as const,
      },
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              points={project.points}
              link={project.link}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
