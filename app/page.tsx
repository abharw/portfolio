import type React from "react";
import { CopyAsMarkdown } from "@/components/copy-as-markdown";
import { WireframeForms } from "@/components/wireframe-forms";

const experiences = [
  {
    name: "Basics",
    description:
      "Building screen-aware macOS agents for human enablement",
    url: "https://www.basicsoftware.ai/",
  },
  {
    name: "Carnegie Mellon",
    description:
      "Double major in AI and Statistics & Machine Learning. Sigma Eta Pi, ScottyLabs, and CMU AI Club.",
    url: "https://www.cmu.edu/",
  },
  {
    name: "Karini AI",
    description:
      "Built MCP Registry™, Microsoft Teams AI bots for enterprise clients, multi-agent A2A LangGraph systems, and voice agents with Amazon Nova Sonic.",
    url: "https://www.karini.ai/",
  },
  {
    name: "Dartmouth-Hitchcock",
    description:
      "ML research in computational pathology. Trained Wasserstein GAN architecture to generate synthetic colorectal tissue images, scaling training to terabyte-scale whole-slide data on Slurm HPC clusters.",
    url: "https://jlevy44.github.io/levylab/",
  },
];

const elsewhere = [
  { label: "GitHub", url: "https://github.com/abharw" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/aravbhardwaj/" },
  { label: "Email", url: "mailto:aravb09@gmail.com" },
];

export default function Home() {
  return (
    <div className="mh">
      <main className="mh__content">
        <header className="mh__row mh__row--header">
          <div className="mh__aside mh__reveal" style={{ "--i": 0 } as React.CSSProperties}>
            <div className="mh__sigil" aria-hidden="true">
              <WireframeForms variant="sphere" speed={3} size={2.5} length={1} />
            </div>
          </div>
          <div className="mh__main">
            <h1 className="mh__name mh__reveal" style={{ "--i": 1 } as React.CSSProperties}>
              Arav Bhardwaj
            </h1>
            <p className="mh__bio mh__reveal" style={{ "--i": 2 } as React.CSSProperties}>
              CTO, AI and Statistics at Carnegie Mellon, ML research at Dartmouth.
            </p>
          </div>
        </header>

        <section className="mh__row" aria-labelledby="now-heading">
          <h2 id="now-heading" className="mh__label mh__reveal" style={{ "--i": 3 } as React.CSSProperties}>
            Now
          </h2>
          <div className="mh__main mh__stack">
            <p className="mh__reveal" style={{ "--i": 4 } as React.CSSProperties}>
              Based out of SF
            </p>
            <p className="mh__reveal" style={{ "--i": 5 } as React.CSSProperties}>
              Leading technical development at{" "}
              <a href="https://www.basicsoftware.ai/" target="_blank" rel="noopener noreferrer">
                Basics
              </a>
            </p>
            <p className="mh__reveal" style={{ "--i": 6 } as React.CSSProperties}>
              Exploring dynamic non-text interfaces for agents
            </p>
            <p className="mh__reveal" style={{ "--i": 7 } as React.CSSProperties}>
              Learning cardistry
            </p>
          </div>
        </section>

        <section className="mh__row" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="mh__label mh__reveal" style={{ "--i": 8 } as React.CSSProperties}>
            Experience
          </h2>
          <ul className="mh__main mh__projects" aria-label="Experience">
            {experiences.map((item, index) => (
              <li
                key={item.name}
                className="mh__reveal"
                style={{ "--i": 9 + index } as React.CSSProperties}
              >
                <a
                  className="mh__project"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mh__project-name">{item.name}</span>
                  <span className="mh__project-desc">{item.description}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mh__row" aria-labelledby="elsewhere-heading">
          <h2 id="elsewhere-heading" className="mh__label mh__reveal" style={{ "--i": 13 } as React.CSSProperties}>
            Elsewhere
          </h2>
          <div className="mh__main mh__elsewhere mh__reveal" style={{ "--i": 14 } as React.CSSProperties}>
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

        <footer className="mh__row mh__footer">
          <p className="mh__label mh__reveal" style={{ "--i": 15 } as React.CSSProperties}>
            © {new Date().getFullYear()} Arav Bhardwaj
          </p>
        </footer>
      </main>
      <CopyAsMarkdown />
    </div>
  );
}
