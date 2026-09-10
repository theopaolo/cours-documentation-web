import { readdirSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

const folder = 'cours-documentation/visuels';
const temporary = mkdtempSync(join(tmpdir(), 'cours-mermaid-'));
try {
  const puppeteer = join(temporary, 'puppeteer.json');
  const options = process.env.PUPPETEER_EXECUTABLE_PATH
    ? { executablePath: process.env.PUPPETEER_EXECUTABLE_PATH }
    : {};
  writeFileSync(puppeteer, JSON.stringify(options));
  for (const name of readdirSync(folder).filter(n => n.endsWith('.mmd')).sort()) {
    execFileSync('node_modules/.bin/mmdc', [
      '-i', join(folder, name), '-o', join(folder, name.replace('.mmd', '.svg')),
      '-c', 'scripts/mermaid.json', '-p', puppeteer,
      '-b', 'white', '-w', '1500'
    ], { stdio: 'inherit' });
  }
} finally {
  rmSync(temporary, { recursive: true, force: true });
}
