import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const templatePath = path.join(root, 'template.html');
const indexPath = path.join(root, 'index.html');

if (fs.existsSync(templatePath)) {
  fs.copyFileSync(templatePath, indexPath);
  console.log('[prepare-dev] Copied template.html -> index.html for Vite development/build');
} else {
  console.warn('[prepare-dev] template.html not found, keeping existing index.html');
}
