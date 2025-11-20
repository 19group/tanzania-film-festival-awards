// scripts/optimize-images.js
// Simple sharp-based optimizer to produce multiple sizes & AVIF/WebP
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');


const SRC = path.join(process.cwd(), 'src', 'assets');
const OUT = path.join(process.cwd(), 'public', 'images');
const sizes = [320, 640, 900, 1200, 1600];


async function processFile(filePath) {
const rel = path.relative(SRC, filePath);
const outDir = path.join(OUT, path.dirname(rel));
fs.mkdirSync(outDir, { recursive: true });
const name = path.basename(filePath, path.extname(filePath));


for (const size of sizes) {
const outWebp = path.join(outDir, `${name}-${size}.webp`);
const outAvif = path.join(outDir, `${name}-${size}.avif`);
await sharp(filePath).resize({ width: size }).webp({ quality: 80 }).toFile(outWebp);
await sharp(filePath).resize({ width: size }).avif({ quality: 60 }).toFile(outAvif);
}
}


function walk(dir) {
const files = fs.readdirSync(dir);
for (const f of files) {
const full = path.join(dir, f);
const stat = fs.statSync(full);
if (stat.isDirectory()) walk(full);
else if (/\.(jpe?g|png)$/i.test(f)) processFile(full).catch(console.error);
}
}


if (!fs.existsSync(SRC)) {
console.error('No src/assets folder found. Place original images in src/assets and run this script.');
process.exit(1);
}
walk(SRC);