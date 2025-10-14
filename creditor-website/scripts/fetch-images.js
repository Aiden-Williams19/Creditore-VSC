// Utility script: download remote image and write JPG + WebP into src/assets
// Usage: node scripts/fetch-images.js
// Requires: `sharp` and `node-fetch@2` installed in the project

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const sharp = require('sharp');

const outDir = path.resolve(process.cwd(), 'src', 'assets');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const remoteJpg = 'https://www.creditore.co.za/images/creditore6.jpg';
const jpgPath = path.join(outDir, 'creditore6.jpg');
const webpPath = path.join(outDir, 'creditore6.webp');

async function download() {
  console.log('Downloading', remoteJpg);
  const res = await fetch(remoteJpg);
  if (!res.ok) throw new Error('Failed to fetch image: ' + res.status);
  const buffer = await res.arrayBuffer();
  const buf = Buffer.from(buffer);
  fs.writeFileSync(jpgPath, buf);
  console.log('Saved JPG to', jpgPath);

  console.log('Converting to WebP...');
  await sharp(buf).webp({ quality: 80 }).toFile(webpPath);
  console.log('Saved WebP to', webpPath);
}

download().catch(err => {
  console.error(err);
  process.exit(1);
});
