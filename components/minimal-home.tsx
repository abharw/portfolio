import { Sigil } from "@/components/sigil";
import { CopyAsMarkdown } from "@/components/copy-as-markdown";

const experiences = [
  {
    name: "Basics",
    description:
      "CTO at a TQ Ventures–backed startup. Building screen-aware macOS agents for human enablement",
    url: "https://www.basicsoftware.ai/",
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
    name: "Dartmouth-Hitchcock",
    description:
      "ML research in computational pathology. Designed and trained my own Wasserstein GAN architecture to generate synthetic colorectal tissue images, scaling training to terabyte-scale whole-slide data on Slurm HPC clusters.",
    url: "https://jlevy44.github.io/levylab/",
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
          <header className="mh__header">
            <Sigil />
            <h1 className="mh__name">Arav Bhardwaj</h1>
            <p className="mh__bio">
              CTO, prev. ML research at Dartmouth, ex-CMU.
            </p>
          </header>

          <section className="mh__section" aria-labelledby="now-heading">
            <h2 id="now-heading" className="mh__label">
              Now
            </h2>
            <p className="mh__paragraph">
              Based out of SF
            </p>
            <p className="mh__paragraph">
              Leading technical development at{" "}
              <a href="https://www.basicsoftware.ai/" target="_blank" rel="noopener noreferrer">
                Basics
              </a>
            </p>
            <p className="mh__paragraph">
              Exploring post-training for small models that learn how you work
            </p>
            <p className="mh__paragraph">
              Learning cardistry
            </p>
          </section>

          <section className="mh__section" aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="mh__label">
              Experience
            </h2>
            <ul className="mh__projects" aria-label="Experience">
              {experiences.map((item) => (
                <li key={item.name}>
                  <a
                    className="mh__project"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{item.name}</span>
                    <span className="mh__project-desc">{item.description}</span>
                  </a>
                </li>
              ))}
            </ul>
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
