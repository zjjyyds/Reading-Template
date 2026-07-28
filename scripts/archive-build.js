import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const readingsDir = path.join(rootDir, 'readings');

// 1. Run Vite build
console.log('📦 Building single file HTML app...');
execSync('npx vite build', { cwd: rootDir, stdio: 'inherit' });

const distHtmlPath = path.join(rootDir, 'dist', 'index.html');
if (!fs.existsSync(distHtmlPath)) {
  console.error('❌ Error: dist/index.html was not generated!');
  process.exit(1);
}

// 2. Ensure readings directory exists
if (!fs.existsSync(readingsDir)) {
  fs.mkdirSync(readingsDir, { recursive: true });
}

// Helper to sanitize title for filename
function sanitizeFileName(str) {
  return str
    .replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '');
}

// 3. Parse articles from src/data/articles.ts
const articlesTsPath = path.join(rootDir, 'src', 'data', 'articles.ts');
const articlesTsContent = fs.readFileSync(articlesTsPath, 'utf8');

// Match individual article blocks exported as export const article... = { ... };
const articleBlocks = articlesTsContent.split(/export const article/g).slice(1);

console.log('\n📄 Archiving single HTML files into readings/ folder:');

articleBlocks.forEach((block) => {
  const dateMatch = block.match(/date:\s*["']([^"']+)["']/);
  const titleMatch = block.match(/title:\s*["']([^"']+)["']/);

  if (dateMatch && titleMatch) {
    const dateStr = dateMatch[1];
    const titleStr = titleMatch[1];
    const safeTitle = sanitizeFileName(titleStr);
    const fileName = `${dateStr}_${safeTitle}.html`;
    const destPath = path.join(readingsDir, fileName);

    fs.copyFileSync(distHtmlPath, destPath);
    console.log(`   └─ readings/${fileName}`);
  }
});

// Save root ReadingAssistant.html
fs.copyFileSync(distHtmlPath, path.join(rootDir, 'ReadingAssistant.html'));

console.log('\n✅ Build complete! All HTML files saved in readings/ folder.');
