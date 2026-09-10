import { mkdirSync } from 'node:fs';
mkdirSync('.build', { recursive: true });

export default {
  paths: ['demo/features/*.feature'],
  import: ['demo/features/steps/*.mjs'],
  format: ['progress', 'summary', 'html:.build/bdd.html', 'json:.build/bdd.json']
};
