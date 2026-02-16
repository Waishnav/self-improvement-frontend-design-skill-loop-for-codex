import { Link } from "react-router-dom";

const cards = [
  {
    title: "Mood Sculptor",
    body: "Blend references and prompt poetry to form nuanced visual tone."
  },
  {
    title: "Flow Variations",
    body: "Generate waves of alternatives while preserving your design intent."
  },
  {
    title: "Living Layers",
    body: "Adjust lighting, texture, and framing with tactile controls."
  }
];

export default function RouteFour() {
  return (
    <main className="route-shell route-four">
      <div className="four-blob four-blob-a" />
      <div className="four-blob four-blob-b" />
      <div className="four-blob four-blob-c" />
      <div className="route-frame">
        <nav className="route-nav">
          <p className="route-brand four-brand">T4 Canvas</p>
          <Link className="back-pill earth-pill" to="/">
            Concept Hub
          </Link>
        </nav>

        <section className="four-hero">
          <div>
            <p className="route-kicker earth-kicker">Organic Futurism</p>
            <h1 className="hero-title four-title">
              Shape living worlds from simple prompts
            </h1>
            <p className="hero-copy four-copy">
              A soft, atmospheric studio for creators who think in stories,
              texture, and emotion. Model switching feels fluid and intentional.
            </p>
            <div className="hero-actions">
              <button className="primary-cta earth-cta">Join the Studio</button>
              <button className="ghost-cta earth-ghost">See Workflow</button>
            </div>
          </div>
          <aside className="four-quote-plane">
            <p>
              "I used to lose momentum hopping between tools. Now the whole
              visual journey stays in one canvas."
            </p>
            <span>Creative Director, T4 beta</span>
          </aside>
        </section>

        <section className="four-grid">
          {cards.map((card) => (
            <article key={card.title} className="four-card">
              <h2>{card.title}</h2>
              <p>{card.body}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
