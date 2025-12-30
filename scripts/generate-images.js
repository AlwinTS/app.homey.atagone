const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const outputDir = path.join(__dirname, '..', 'drivers', 'atagone', 'assets', 'images');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// SVG template for ATAG One thermostat
const createSvg = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
  <!-- White background -->
  <rect width="100" height="100" fill="white"/>

  <!-- Thermostat body - rounded rectangle -->
  <rect x="15" y="10" width="70" height="80" rx="8" ry="8" fill="#f5f5f5" stroke="#cccccc" stroke-width="1.5"/>

  <!-- Display screen area -->
  <rect x="22" y="18" width="56" height="35" rx="4" ry="4" fill="#1a1a2e"/>

  <!-- Temperature display -->
  <text x="50" y="43" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#00d4aa" text-anchor="middle">21.5°</text>

  <!-- Brand text -->
  <text x="50" y="28" font-family="Arial, sans-serif" font-size="5" fill="#888888" text-anchor="middle">ATAG ONE</text>

  <!-- Control dial area -->
  <circle cx="50" cy="70" r="12" fill="#e8e8e8" stroke="#cccccc" stroke-width="1"/>
  <circle cx="50" cy="70" r="7" fill="#ff6b35"/>

  <!-- Small indicator dots -->
  <circle cx="30" cy="70" r="2" fill="#cccccc"/>
  <circle cx="70" cy="70" r="2" fill="#cccccc"/>
</svg>`;

const sizes = [
  { name: 'small', size: 75 },
  { name: 'large', size: 500 },
  { name: 'xlarge', size: 1000 }
];

async function generateImages() {
  for (const { name, size } of sizes) {
    const svg = Buffer.from(createSvg(size));
    const outputPath = path.join(outputDir, `${name}.png`);

    await sharp(svg)
      .resize(size, size)
      .png()
      .toFile(outputPath);

    console.log(`Generated: ${outputPath}`);
  }
  console.log('All images generated successfully!');
}

generateImages().catch(console.error);
