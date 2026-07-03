import { Sigil } from "@/components/sigil";
import { CopyAsMarkdown } from "@/components/copy-as-markdown";

const experiences = [
  {
    name: "Basics",
    description:
      "CTO at a TQ Ventures–backed startup. Building AI-powered workforce training for trades workers.",
    url: "https://www.basicsu.com/",
  },
  {
    name: "Carnegie Mellon",
    description:
      "Double major in AI and Statistics & Machine Learning. Left to build things the classroom couldn't keep pace with.",
    url: "https://www.cmu.edu/",
  },
  {
    name: "Karini AI",
    description:
      "Built MCP Registry™ and Microsoft Teams AI integrations for enterprise clients. Worked on multi-agent LangGraph systems with Ragas evaluation.",
    url: "https://www.karini.ai/",
  },
  {
    name: "Sparo",
    description:
      "Built automated LinkedIn extraction at 120 profiles per hour. Developed matching algorithms that improved candidate placement by 30%.",
    url: "https://sparo-frontend.vercel.app/",
  },
  {
    name: "Dartmouth-Hitchcock",
    description:
      "Designed Wasserstein GANs for synthetic colorectal tissue imaging. Optimized HPC workflows on Slurm for terabyte-scale whole slide processing.",
    url: "https://jlevy44.github.io/levylab/",
  },
];

const skills = [
  { name: "LLM & AI Governance", meta: "95" },
  { name: "Full-stack & Web3", meta: "90" },
  { name: "Computer Vision", meta: "88" },
  { name: "Agent-Based Modeling", meta: "85" },
  { name: "Developer Tools", meta: "84" },
];

const projects = [
  {
    name: "Sentinel",
    description:
      "Go-based AI governance gateway preventing cost overruns across LLM providers and MCP servers. Reduced policy deployment from hours to under 5 minutes via Python SDK.",
    url: "https://github.com/abharw/sentinel",
  },
  {
    name: "Verity",
    description:
      "Content authenticity platform with AI detection, IPFS storage, and Polygon smart contracts. Full-stack app with FastAPI backend and Next.js frontend for verification.",
    url: "https://github.com/abharw/verity",
  },
  {
    name: "Ecosort",
    description:
      "Autonomous waste sorting with 82% accuracy using YOLOv5 on 25K+ images. Multi-threaded architecture optimized for 30 FPS on Raspberry Pi 5.",
    url: "https://github.com/abharw/ecosort",
  },
  {
    name: "Liemap",
    description:
      "NetLogo simulation visualizing the spread of lies in different cultural contexts. Analyzes deception patterns based on severity, benefit, and social proximity.",
    url: "https://github.com/abharw/liemap",
  },
];

const elsewhere = [
  { label: "GitHub", url: "https://github.com/abharw" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/arav-bhardwaj1209" },
  { label: "Email", url: "mailto:aravb09@gmail.com" },
];

export function MinimalHome() {
  return (
    <div className="mh">
      <div className="mh__layout">
        <main className="mh__content">
          <Sigil />

          <h1 className="mh__name">Arav Bhardwaj</h1>

          <p className="mh__bio">
            CTO &amp; full-stack engineer, ex-CMU. Building intelligent systems at the intersection
            of AI and software engineering.
          </p>

          <section className="mh__section" aria-labelledby="now-heading">
            <h2 id="now-heading" className="mh__label">
              Now
            </h2>
            <p className="mh__paragraph">
              Leading technical development at{" "}
              <a href="https://www.basicsu.com/" target="_blank" rel="noopener noreferrer">
                Basics
              </a>
              . Building AI-powered workforce training for trades workers.
            </p>
          </section>

          <section className="mh__section" aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="mh__label">
              Experience
            </h2>
            <ul className="mh__projects" aria-label="Experience">
              {experiences.map((item) => (
                <li key={item.name} className="mh__project">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                  <span className="mh__project-desc">{item.description}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mh__section" aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="mh__label">
              Skills
            </h2>
            <ul className="mh__list mh__list--cols">
              {skills.map((item) => (
                <li key={item.name} className="mh__row">
                  <span className="mh__row-name">{item.name}</span>
                  <span className="mh__row-meta">{item.meta}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mh__section" aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="mh__label">
              Projects
            </h2>
            <ul className="mh__projects" aria-label="Projects">
              {projects.map((project) => (
                <li key={project.name} className="mh__project">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.name}
                  </a>
                  <span className="mh__project-desc">{project.description}</span>
                </li>
              ))}
            </ul>
            <p className="mh__more">
              <a href="https://github.com/abharw" target="_blank" rel="noopener noreferrer">
                More on GitHub →
              </a>
            </p>
          </section>

          <section className="mh__section" aria-labelledby="elsewhere-heading">
            <h2 id="elsewhere-heading" className="mh__label">
              Elsewhere
            </h2>
            <div className="mh__elsewhere">
              {elsewhere.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>

          <footer className="mh__footer">
            © {new Date().getFullYear()} Arav Bhardwaj
          </footer>
        </main>
      </div>
      <CopyAsMarkdown />
    </div>
  );
}
