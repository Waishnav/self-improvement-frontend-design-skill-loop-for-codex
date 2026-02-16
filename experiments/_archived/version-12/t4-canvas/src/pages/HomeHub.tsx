import { Link } from "react-router-dom";

const concepts = [
  {
    path: "/1",
    title: "Neon Command Theater",
    subtitle: "Hyper-charged control deck for power prompts.",
    tag: "Kinetic cyber-lab",
    styleClass: "hub-neon"
  },
  {
    path: "/2",
    title: "Editorial Atelier",
    subtitle: "Magazine-grade composition with art-direction energy.",
    tag: "Luxury print modernism",
    styleClass: "hub-editorial"
  },
  {
    path: "/3",
    title: "Brutalist Terminal",
    subtitle: "Industrial ops interface tuned for raw speed.",
    tag: "Command-line maximalism",
    styleClass: "hub-terminal"
  },
  {
    path: "/4",
    title: "Organic Bloom Studio",
    subtitle: "Soft atmospheric canvas with tactile storytelling.",
    tag: "Sculpted natural futurism",
    styleClass: "hub-organic"
  },
  {
    path: "/5",
    title: "Deco Vault",
    subtitle: "High-lux, geometric grandeur for premium creators.",
    tag: "Art deco futurity",
    styleClass: "hub-deco"
  }
];

export default function HomeHub() {
  return (
    <main className="hub-shell">
      <div className="hub-inner">
        <header className="hub-head">
          <p className="hub-kicker">T4 Canvas</p>
          <h1 className="hub-title">Five Design Frontiers</h1>
          <p className="hub-copy">
            One flat monthly membership to generate and edit images across Nano
            Banana Pro, Flux 2, gpt-image-1.5, and Seedream.
          </p>
        </header>
        <section className="hub-grid" aria-label="Design variants">
          {concepts.map((concept) => (
            <article
              key={concept.path}
              className={`hub-card ${concept.styleClass}`}
            >
              <p className="hub-card-tag">{concept.tag}</p>
              <h2>{concept.title}</h2>
              <p>{concept.subtitle}</p>
              <Link to={concept.path} className="hub-link">
                Open concept
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
