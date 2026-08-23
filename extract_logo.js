const { Jimp } = require('jimp');

async function extractLogo() {
  try {
    const imagePath = "C:/Users/kasui/.gemini/antigravity/brain/522ffa96-79fd-4a77-8724-a42be92cd89e/.user_uploaded/media_1787386907863.png";
    const image = await Jimp.read(imagePath);
    
    // The image is roughly a 2x2 grid. We'll crop from the bottom-right quadrant.
    // Width and height of the full image:
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    
    // Bottom right quadrant coordinates roughly:
    // x from w/2 to w, y from h/2 to h
    // Inside this, the logo is centered horizontally in the quadrant, near the top of the quadrant.
    const cropX = Math.floor(w / 2 + (w / 2) * 0.15); // Adjust as needed
    const cropY = Math.floor(h / 2 + (h / 2) * 0.1);
    const cropW = Math.floor((w / 2) * 0.7);
    const cropH = Math.floor((h / 2) * 0.5);

    image.crop({ x: cropX, y: cropY, w: cropW, h: cropH });
    
    // Make near-white pixels transparent
    // Tolerance for white
    const tolerance = 20; 
    for (let y = 0; y < image.bitmap.height; y++) {
      for (let x = 0; x < image.bitmap.width; x++) {
        const hex = image.getPixelColor(x, y);
        const rgba = Jimp.intToRGBA(hex);
        if (rgba.r > 255 - tolerance && rgba.g > 255 - tolerance && rgba.b > 255 - tolerance) {
           image.setPixelColor(Jimp.rgbaToInt(rgba.r, rgba.g, rgba.b, 0), x, y);
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
