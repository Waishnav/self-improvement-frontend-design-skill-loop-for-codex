import { Link } from "react-router-dom";

const modelDeck = [
  "Nano Banana Pro",
  "Flux 2",
  "gpt-image-1.5",
  "Seedream"
];

export default function RouteFive() {
  return (
    <main className="route-shell route-five">
      <div className="deco-frame" />
      <div className="route-frame">
        <nav className="route-nav">
          <p className="route-brand five-brand">T4 Canvas Guild</p>
          <Link className="back-pill deco-pill" to="/">
            Concept Hub
          </Link>
        </nav>

        <section className="five-hero">
          <p className="five-kicker">Members Atelier</p>
          <h1 className="hero-title five-title">A grand studio for model alchemy</h1>
          <p className="hero-copy five-copy">
            Fuse multiple image engines into one premium workspace. Compose,
            generate, and refine with cinematic polish under a single flat rate.
          </p>
        </section>

        <section className="five-columns">
          {modelDeck.map((model) => (
            <article key={model} className="five-model-card">
              <h2>{model}</h2>
              <p>Included in your monthly membership tier.</p>
            </article>
          ))}
        </section>

        <section className="five-membership">
          <p className="membership-label">Unified Access</p>
          <p className="membership-price">$39 / month</p>
          <p className="membership-copy">
            Unlimited generation sessions, pro editing controls, and portfolio
            export in one polished environment.
          </p>
          <button className="primary-cta deco-cta">Request Invitation</button>
        </section>
      </div>
    </main>
  );
}
