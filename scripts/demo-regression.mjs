import { cpSync, mkdtempSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import assert from 'node:assert/strict';

const folder = mkdtempSync(join(tmpdir(), 'reservation-regression-'));
try {
  cpSync('demo', join(folder, 'demo'), { recursive: true });
  const file = join(folder, 'demo/src/reservations.mjs');
  const original = readFileSync(file, 'utf8');
  assert.ok(original.includes('occupees >= capacite'), 'Condition à modifier introuvable');
  writeFileSync(file, original.replace('occupees >= capacite', 'occupees > capacite'));
  const result = spawnSync(process.execPath, [
    '--test', join(folder, 'demo/tests/reservations.test.mjs')
  ], { encoding: 'utf8' });
  process.stdout.write(result.stdout);
  process.stderr.write(result.stderr);
  assert.equal(result.status, 1, 'La régression devait faire échouer les tests');
  assert.match(result.stdout, /Missing expected exception/);
  console.log('\nRégression détectée dans une copie temporaire. Le code du cours est intact.');
} finally {
  rmSync(folder, { recursive: true, force: true });
}
