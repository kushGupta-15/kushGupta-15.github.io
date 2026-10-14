import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const distHtml = path.join(root, 'dist', 'index.html');
const distAssets = path.join(root, 'dist', 'assets');
const rootHtml = path.join(root, 'index.html');
const rootAssets = path.join(root, 'assets');

if (fs.existsSync(distHtml)) {
  fs.copyFileSync(distHtml, rootHtml);
  console.log('[prepare-prod] Synchronized production dist/index.html -> root index.html');
}

if (fs.existsSync(distAssets)) {
  if (fs.existsSync(rootAssets)) {
    fs.rmSync(rootAssets, { recursive: true, force: true });
  }
  fs.cpSync(distAssets, rootAssets, { recursive: true });
  console.log('[prepare-prod] Synchronized production dist/assets -> root assets/');
}
