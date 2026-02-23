import { copyFile, cp, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const versionPattern = /^version-(\d+)$/;
const routeIds = ['1', '2', '3', '4', '5'];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function stripMarkdown(value) {
  return value
    .replace(/[*_`>#]/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^- /gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function firstNonEmptyLine(value) {
  for (const line of value.split('\n')) {
    const cleaned = stripMarkdown(line);
    if (cleaned.length > 0) {
      return cleaned;
    }
  }
  return '';
}

function extractSection(markdown, heading) {
  const pattern = new RegExp(
    `^##\\s+${escapeRegExp(heading)}\\s*\\n([\\s\\S]*?)(?=\\n##\\s+|\\n#\\s+|$)`,
    'm'
  );
  const match = markdown.match(pattern);
  return match ? match[1].trim() : '';
}

async function fileExists(filePath) {
  try {
    const details = await stat(filePath);
    return details.isFile();
  } catch {
    return false;
  }
}

async function directoryExists(directoryPath) {
  try {
    const details = await stat(directoryPath);
    return details.isDirectory();
  } catch {
    return false;
  }
}

function rewriteAppAssetPaths(html, version) {
  return html
    .replace(/(["'])\/assets\//g, `$1/experiment-apps/${version}/assets/`)
    .replace(/(["'])\/vite\.svg/g, `$1/experiment-apps/${version}/vite.svg`);
}

function injectRouteBridge(html) {
  const bridgeScript = `<script>
(() => {
  const normalizeRoute = (value) => {
    if (typeof value !== 'string') return null;
    const trimmed = value.trim();
    if (!trimmed) return null;
    return trimmed.startsWith('/') ? trimmed : '/' + trimmed;
  };
  const applyRoute = (route, mode) => {
    const normalized = normalizeRoute(route);
    if (!normalized || location.pathname === normalized) return;
    if (mode === 'push') history.pushState({}, '', normalized);
    else history.replaceState({}, '', normalized);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  const params = new URLSearchParams(location.search);
  applyRoute(params.get('route'), 'replace');
  window.addEventListener('message', (event) => {
    const payload = event.data;
    if (!payload || payload.type !== 'codex-route-change') return;
    applyRoute(payload.route, 'push');
  });
})();
</script>`;
  if (html.includes('<script type="module"')) {
    return html.replace('<script type="module"', `${bridgeScript}\n    <script type="module"`);
  }
  return html.replace('</body>', `  ${bridgeScript}\n  </body>`);
}

function compareByVersion(a, b) {
  return a.versionNumber - b.versionNumber;
}

const showcaseRoot = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const repoRoot = path.resolve(showcaseRoot, '..');
const experimentsRoot = path.join(repoRoot, 'experiments');
const publicAssetsRoot = path.join(showcaseRoot, 'public', 'experiment-assets');
const publicDocsRoot = path.join(showcaseRoot, 'public', 'experiment-docs');
const publicAppsRoot = path.join(showcaseRoot, 'public', 'experiment-apps');
const manifestPath = path.join(showcaseRoot, 'src', 'data', 'experiments.generated.json');

await rm(publicAssetsRoot, { recursive: true, force: true });
await mkdir(publicAssetsRoot, { recursive: true });
await rm(publicDocsRoot, { recursive: true, force: true });
await mkdir(publicDocsRoot, { recursive: true });
await rm(publicAppsRoot, { recursive: true, force: true });
await mkdir(publicAppsRoot, { recursive: true });

const entries = await readdir(experimentsRoot, { withFileTypes: true });
const versions = entries
  .filter((entry) => entry.isDirectory() && versionPattern.test(entry.name))
  .map((entry) => {
    const versionMatch = entry.name.match(versionPattern);
    return {
      version: entry.name,
      versionNumber: Number(versionMatch[1])
    };
  })
  .sort(compareByVersion);

const experiments = [];

for (const current of versions) {
  const versionDir = path.join(experimentsRoot, current.version);
  const readmePath = path.join(versionDir, 'README.md');
  const critiquesPath = path.join(versionDir, 'CRITQUES.md');
  const screenshotsDir = path.join(versionDir, 'screenshots');
  const readmeContent = await readFile(readmePath, 'utf8');

  const titleMatch = readmeContent.match(/^#\s+(.+)$/m);
  const scoreMatch = readmeContent.match(/Rubric score:\s*\*\*([0-9.]+)\s*\/\s*20\*\*/i);
  const hypothesis = firstNonEmptyLine(extractSection(readmeContent, 'Hypothesis'));
  const mutationAxis = firstNonEmptyLine(extractSection(readmeContent, 'Mutation Axis'));
  const keepDrop = firstNonEmptyLine(extractSection(readmeContent, 'Keep / Drop'));
  const appDistDir = path.join(versionDir, 't4-canvas', 'dist');
  const appTargetDir = path.join(publicAppsRoot, current.version);
  const hasAppDist = await directoryExists(appDistDir);
  let appHomeUrl = null;

  if (hasAppDist) {
    await cp(appDistDir, appTargetDir, { recursive: true, force: true });
    const appIndexPath = path.join(appTargetDir, 'index.html');
    if (await fileExists(appIndexPath)) {
      const indexContent = await readFile(appIndexPath, 'utf8');
      const rewrittenIndex = injectRouteBridge(rewriteAppAssetPaths(indexContent, current.version));
      await writeFile(appIndexPath, rewrittenIndex);

      appHomeUrl = `/experiment-apps/${current.version}/index.html`;
    }
  }

  const routeEntries = [];

  for (const routeId of routeIds) {
    const routeCandidates = [
      path.join(screenshotsDir, `${current.version}-route-${routeId}.png`),
      path.join(screenshotsDir, routeId, 'laptop.png'),
      path.join(screenshotsDir, `${routeId}.png`)
    ];

    let selectedSource = null;
    for (const candidate of routeCandidates) {
      if (await fileExists(candidate)) {
        selectedSource = candidate;
        break;
      }
    }

    let screenshot = null;
    if (selectedSource) {
      const extension = path.extname(selectedSource) || '.png';
      const destinationDir = path.join(publicAssetsRoot, current.version);
      const destinationFile = path.join(destinationDir, `route-${routeId}${extension}`);
      await mkdir(destinationDir, { recursive: true });
      await copyFile(selectedSource, destinationFile);
      screenshot = `/experiment-assets/${current.version}/route-${routeId}${extension}`;
    }

    routeEntries.push({
      id: routeId,
      slug: routeId,
      path: `/${routeId}`,
      screenshot,
      liveUrl: appHomeUrl
    });
  }

  const docsTargetDir = path.join(publicDocsRoot, current.version);
  await mkdir(docsTargetDir, { recursive: true });
  const publicReadmePath = `/experiment-docs/${current.version}/README.md`;
  await copyFile(readmePath, path.join(docsTargetDir, 'README.md'));

  const hasCritiques = await fileExists(critiquesPath);
  let publicCritiquesPath = null;
  if (hasCritiques) {
    publicCritiquesPath = `/experiment-docs/${current.version}/CRITQUES.md`;
    await copyFile(critiquesPath, path.join(docsTargetDir, 'CRITQUES.md'));
  }

  experiments.push({
    version: current.version,
    versionNumber: current.versionNumber,
    title: titleMatch ? stripMarkdown(titleMatch[1]) : `Version ${current.versionNumber}`,
    readmePath: publicReadmePath,
    critiquesPath: publicCritiquesPath,
    hypothesis: hypothesis || 'Hypothesis not stated in README.',
    mutationAxis: mutationAxis || 'Mutation axis not stated.',
    keepDrop: keepDrop || 'No explicit keep/drop summary.',
    scoreOutOf20: scoreMatch ? Number(scoreMatch[1]) : null,
    appHomeUrl,
    routes: routeEntries
  });
}

await mkdir(path.dirname(manifestPath), { recursive: true });
await writeFile(
  manifestPath,
  `${JSON.stringify(
    {
      experimentCount: experiments.length,
      experiments
    },
    null,
    2
  )}\n`
);

console.log(`Generated manifest for ${experiments.length} experiments.`);
