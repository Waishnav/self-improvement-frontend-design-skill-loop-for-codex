import { mkdir, writeFile } from 'node:fs/promises';

const defaultManifest = {
  generatedAt: new Date().toISOString(),
  experiments: []
};

await mkdir(new URL('../src/data', import.meta.url), { recursive: true });
await writeFile(
  new URL('../src/data/experiments.generated.json', import.meta.url),
  JSON.stringify(defaultManifest, null, 2)
);

console.log('Generated empty manifest (placeholder).');
