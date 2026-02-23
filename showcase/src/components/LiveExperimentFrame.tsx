import { useMemo, useState } from 'react';
import type { ExperimentRoute } from '../lib/experiments';

interface LiveExperimentFrameProps {
  version: string;
  appHomeUrl: string | null;
  routes: ExperimentRoute[];
  initialRouteId?: string;
}

export default function LiveExperimentFrame({
  version,
  appHomeUrl,
  routes,
  initialRouteId = '1'
}: LiveExperimentFrameProps) {
  const playableRoutes = useMemo(() => routes.filter((route) => route.liveUrl), [routes]);
  const initialRoute = playableRoutes.find((route) => route.id === initialRouteId) || playableRoutes[0] || null;
  const [activeId, setActiveId] = useState(initialRoute?.id || '');
  const activeRoute = playableRoutes.find((route) => route.id === activeId) || initialRoute;

  if (!appHomeUrl || !activeRoute?.liveUrl) {
    return (
      <section className="live-panel">
        <p className="eyebrow">Interactive Preview</p>
        <h2>Live iframe unavailable</h2>
        <p>The built app bundle was not found for this version.</p>
      </section>
    );
  }

  return (
    <section className="live-panel" aria-label="Interactive iframe preview">
      <div className="live-panel-head">
        <div>
          <p className="eyebrow">Interactive Preview</p>
          <h2>{version} in iframe</h2>
          <p>Use route tabs to switch the loaded app route. Open standalone for full-screen exploration.</p>
        </div>
        <a className="btn btn-ghost" href={appHomeUrl} target="_blank" rel="noreferrer">
          Open Standalone App
        </a>
      </div>

      <div className="live-route-tabs" role="tablist" aria-label="Route selector">
        {playableRoutes.map((route) => (
          <button
            key={route.id}
            type="button"
            role="tab"
            className={route.id === activeRoute.id ? 'live-route-tab active' : 'live-route-tab'}
            aria-selected={route.id === activeRoute.id}
            onClick={() => setActiveId(route.id)}
          >
            Route {route.path}
          </button>
        ))}
      </div>

      <div className="live-frame-wrap">
        <iframe
          key={`${version}-${activeRoute.id}`}
          src={activeRoute.liveUrl}
          title={`${version} ${activeRoute.path} live preview`}
          loading="lazy"
          allow="clipboard-read; clipboard-write"
        />
      </div>
    </section>
  );
}
