Context is clear: the app scaffold is already present, `/1` is implemented, and `/2`–`/5` are missing, so the current build is incomplete.  
I’m proceeding with this implementation plan:

1. Keep the existing Vite + Tailwind + React + TS + Bun setup and verify `vite.config.ts` stays on port `4000`.
2. Build five distinct route pages that follow different structural systems and interaction styles:
   - `/1` Gallery-first (card choreography) polish pass
   - `/2` Swiss data masthead + interactive comparison surfaces
   - `/3` Operator cockpit with live-feel status panels
   - `/4` Story-scroll narrative with sticky scene transitions
   - `/5` Poster-web with kinetic typography hero
3. Ensure each route has:
   - One interactive control in first fold
   - At least one stateful mid-page switch changing nearby content
   - Multiple hover/focus/active affordances and reduced-motion-safe behavior
4. Refine `/` as a strong card-grid route selector without displaying literal route strings in top nav/header.
5. Run `bun run build` to validate typecheck and bundling, then report what was built and any follow-ups.