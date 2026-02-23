import { useEffect, useMemo, useRef, useState } from 'react';
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
  const frameRef = useRef<HTMLIFrameElement | null>(null);
  const playableRoutes = useMemo(() => routes.filter((route) => route.path), [routes]);
  const initialRoute = playableRoutes.find((route) => route.id === initialRouteId) || playableRoutes[0] || null;
  const [activeId, setActiveId] = useState(initialRoute?.id || '');
  const [frameLoaded, setFrameLoaded] = useState(false);
  const activeRoute = playableRoutes.find((route) => route.id === activeId) || initialRoute;
  const initialFrameUrl = useMemo(() => {
    if (!appHomeUrl || !initialRoute?.path) return '';
    return `${appHomeUrl}?route=${encodeURIComponent(initialRoute.path)}`;
  }, [appHomeUrl, initialRoute?.path]);

  useEffect(() => {
    if (!frameLoaded || !activeRoute?.path || !frameRef.current?.contentWindow) {
      return;
    }

    frameRef.current.contentWindow.postMessage(
      {
        type: 'codex-route-change',
        route: activeRoute.path
      },
      window.location.origin
    );
  }, [activeRoute?.path, frameLoaded]);

  if (!appHomeUrl || !activeRoute?.path) {
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
          ref={frameRef}
          src={initialFrameUrl}
          title={`${version} ${activeRoute.path} live preview`}
          loading="lazy"
          allow="clipboard-read; clipboard-write"
          onLoad={() => setFrameLoaded(true)}
        />
      </div>
    </section>
  );
}
