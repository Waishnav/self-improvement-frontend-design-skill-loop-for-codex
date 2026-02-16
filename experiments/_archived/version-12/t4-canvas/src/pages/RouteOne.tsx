import { Link } from "react-router-dom";

const models = [
  {
    name: "Nano Banana Pro",
    detail: "Gemini-grade visual reasoning for surgical edits."
  },
  { name: "Flux 2", detail: "High-fidelity scenes with crisp prompt control." },
  {
    name: "gpt-image-1.5",
    detail: "Style-rich generations tuned for ideation loops."
  },
  { name: "Seedream", detail: "Fast variations and atmospheric concept art." }
];

const operations = [
  "Prompt branching with side-by-side shots.",
  "Reference image remixing across model families.",
  "Batch passes for rapid art-direction sprints.",
  "Version memories that keep your best frames pinned."
];

export default function RouteOne() {
  return (
    <main className="route-shell route-one">
      <div className="route-frame">
        <nav className="route-nav">
          <p className="route-brand one-brand">T4 Canvas</p>
          <Link className="back-pill" to="/">
            Concept Hub
          </Link>
        </nav>

        <section className="one-hero">
          <div>
            <p className="route-kicker">Neural Ops Theater</p>
            <h1 className="hero-title one-title">Command the visual frontier</h1>
            <p className="hero-copy">
              Run every major image model from one cockpit. Build prompts,
              mutate outcomes, and finish polished visuals without tool-hopping.
            </p>
            <div className="hero-actions">
              <button className="primary-cta">Launch Membership</button>
              <button className="ghost-cta">Watch Demo Orbit</button>
            </div>
            <p className="kinetic-word">PROMPT. MUTATE. RENDER.</p>
          </div>
          <aside className="one-side-panel">
            <p className="panel-label">Live Model Grid</p>
            <div className="one-model-grid">
              {models.map((model) => (
                <article key={model.name} className="one-model-card">
                  <h2>{model.name}</h2>
                  <p>{model.detail}</p>
                </article>
              ))}
            </div>
          </aside>
        </section>

        <section className="one-ops-grid" aria-label="Studio operations">
          {operations.map((item, index) => (
            <article key={item} className="one-op-card">
              <p>0{index + 1}</p>
              <h3>{item}</h3>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
