import { Link } from "react-router-dom";

const editorialColumns = [
  {
    title: "Creative Direction Layer",
    body: "Shape mood boards, references, and style constraints before you render."
  },
  {
    title: "Generation Layer",
    body: "Switch between Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream."
  },
  {
    title: "Refinement Layer",
    body: "Retouch, expand, and upscale with a consistent editorial workflow."
  }
];

export default function RouteTwo() {
  return (
    <main className="route-shell route-two">
      <div className="route-two-rail">Studio Edition</div>
      <div className="route-frame two-frame">
        <nav className="route-nav">
          <p className="route-brand two-brand">T4 Canvas</p>
          <Link className="back-pill light-pill" to="/">
            Concept Hub
          </Link>
        </nav>

        <section className="two-layout">
          <div>
            <p className="route-kicker light-kicker">Editorial Interface</p>
            <h1 className="hero-title two-title">Art direction for the image era</h1>
            <p className="hero-copy two-copy">
              A refined creative studio where model power feels like working
              with a full magazine art department. One fee. Endless iterations.
            </p>
            <div className="quote-plane">
              "Every render is a first draft. T4 Canvas is where it becomes
              final."
            </div>
          </div>
          <aside className="two-offer">
            <p className="two-offer-label">Single Monthly Plan</p>
            <p className="two-price">$29</p>
            <p className="two-offer-copy">
              Unlimited concept rounds and editing passes across all partner
              models.
            </p>
            <button className="primary-cta warm-cta">Start Studio Access</button>
          </aside>
        </section>

        <section className="two-columns" aria-label="Workflow layers">
          {editorialColumns.map((column) => (
            <article key={column.title} className="two-card">
              <h2>{column.title}</h2>
              <p>{column.body}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
