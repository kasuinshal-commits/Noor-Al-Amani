const { Jimp } = require('jimp');

async function extractLogo() {
  try {
    const imagePath = "C:/Users/kasui/.gemini/antigravity/brain/522ffa96-79fd-4a77-8724-a42be92cd89e/.user_uploaded/media_1787386907863.png";
    const image = await Jimp.read(imagePath);
    
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    
    const cropX = Math.floor(w * 0.77);
    const cropY = Math.floor(h * 0.15);
    const cropW = Math.floor(w * 0.18);
    const cropH = Math.floor(h * 0.22);

    image.crop({ x: cropX, y: cropY, w: cropW, h: cropH });
    
    // In Jimp, colors are integers: 0xRRGGBBAA
    const tolerance = 20; 
    for (let y = 0; y < image.bitmap.height; y++) {
      for (let x = 0; x < image.bitmap.width; x++) {
        const hex = image.getPixelColor(x, y);
        const r = (hex >>> 24) & 255;
        const g = (hex >>> 16) & 255;
        const b = (hex >>> 8) & 255;
        
        if (r > 255 - tolerance && g > 255 - tolerance && b > 255 - tolerance) {
           // Set transparent (alpha = 0)
           image.setPixelColor(0x00000000, x, y);
        }
      }
    }
    
    await image.write("public/logo.png");
    console.log("Logo extracted and saved to public/logo.png");
  } catch (err) {
    console.error("Error:", err);
  }
}

extractLogo();
