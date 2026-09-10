import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const features = JSON.parse(readFileSync('.build/bdd.json', 'utf8'));
const scenarios = features.flatMap(feature => feature.elements ?? []);
assert.ok(scenarios.length > 0, 'Aucun scénario BDD exécuté');
for (const scenario of scenarios) {
  assert.ok(scenario.steps.length > 0, 'Scénario sans étape : ' + scenario.name);
  for (const step of scenario.steps) {
    assert.equal(step.result?.status, 'passed', scenario.name + ' : ' + step.name);
  }
}
console.log(scenarios.length + ' scénarios réellement exécutés et réussis.');
