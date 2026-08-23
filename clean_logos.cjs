const { Jimp } = require('jimp');

async function cleanImage(inputPath, outputPath) {
  try {
    const image = await Jimp.read(inputPath);
    
    // Convert to transparent background
    for (let y = 0; y < image.bitmap.height; y++) {
      for (let x = 0; x < image.bitmap.width; x++) {
        const hex = image.getPixelColor(x, y);
        const r = (hex >>> 24) & 255;
        const g = (hex >>> 16) & 255;
        const b = (hex >>> 8) & 255;
        
        // If pixel is light gray or white (checkerboard usually > 200)
        if (r > 180 && g > 180 && b > 180) {
           image.setPixelColor(0x00000000, x, y);
        }
      }
    }
    
    await image.write(outputPath);
    console.log(`Cleaned ${inputPath} -> ${outputPath}`);
  } catch (err) {
    console.error(`Error cleaning ${inputPath}:`, err);
  }
}

async function main() {
  await cleanImage("public/logo-mark.jpg", "public/logo-mark-clean.png");
  await cleanImage("public/logo-text.png", "public/logo-text-clean.png");
}

main();
