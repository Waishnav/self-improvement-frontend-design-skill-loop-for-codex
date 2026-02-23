import manifest from '../data/experiments.generated.json';

export interface ExperimentRoute {
  id: string;
  slug: string;
  path: string;
  screenshot: string | null;
}

export interface Experiment {
  version: string;
  versionNumber: number;
  title: string;
  readmePath: string;
  critiquesPath: string | null;
  hypothesis: string;
  mutationAxis: string;
  keepDrop: string;
  scoreOutOf20: number | null;
  routes: ExperimentRoute[];
}

export interface ExperimentManifest {
  experimentCount: number;
  experiments: Experiment[];
}

const typedManifest = manifest as ExperimentManifest;

export function getAllExperiments(): Experiment[] {
  return [...typedManifest.experiments].sort((a, b) => b.versionNumber - a.versionNumber);
}

export function getExperiment(version: string): Experiment | undefined {
  return typedManifest.experiments.find((experiment) => experiment.version === version);
}

export function getManifestMeta() {
  return {
    experimentCount: typedManifest.experimentCount
  };
}
