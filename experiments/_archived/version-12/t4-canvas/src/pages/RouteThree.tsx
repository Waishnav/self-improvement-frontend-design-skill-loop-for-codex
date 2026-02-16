import { Link } from "react-router-dom";

const commandDeck = [
  "batch.generate --model=flux2 --count=12",
  "style.transfer --source=seedream --target=gpt-image-1.5",
  "expand.frame --ratio=16:9 --mode=cinematic",
  "score.variations --by=art_direction_confidence"
];

const tableRows = [
  { model: "Nano Banana Pro", mode: "Reasoned edits", output: "Precise" },
  { model: "Flux 2", mode: "Photoreal scenes", output: "Premium" },
  { model: "gpt-image-1.5", mode: "Expressive concepts", output: "Fast" },
  { model: "Seedream", mode: "Atmospheric worlds", output: "Fluid" }
];

export default function RouteThree() {
  return (
    <main className="route-shell route-three">
      <div className="route-frame">
        <nav className="route-nav">
          <p className="route-brand three-brand">T4 CANVAS OPS</p>
          <Link className="back-pill terminal-pill" to="/">
            Concept Hub
          </Link>
        </nav>

        <section className="three-hero">
          <p className="three-status">SYSTEM ONLINE // IMAGE PIPELINE READY</p>
          <h1 className="hero-title three-title">MAKE MORE IMAGES FASTER</h1>
          <p className="hero-copy three-copy">
            Built for power users who want every model under one terminal-like
            roof with clear controls and no visual noise.
          </p>
        </section>

        <div className="three-marquee">
          <span>
            NANO BANANA PRO • FLUX 2 • GPT-IMAGE-1.5 • SEEDREAM • ONE MEMBERSHIP
            • RAPID ITERATION •
          </span>
        </div>

        <section className="three-grid">
          <div className="three-panel">
            <p className="panel-label">Command Recipes</p>
            <div className="three-command-list">
              {commandDeck.map((command) => (
                <article key={command} className="three-command-card">
                  <p>{command}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="three-panel">
            <p className="panel-label">Model Matrix</p>
            <div className="three-table">
              {tableRows.map((row) => (
                <div key={row.model} className="three-row">
                  <h2>{row.model}</h2>
                  <p>{row.mode}</p>
                  <p>{row.output}</p>
                </div>
              ))}
            </div>
            <button className="primary-cta terminal-cta">Execute Free Trial</button>
          </div>
        </section>
      </div>
    </main>
  );
}
