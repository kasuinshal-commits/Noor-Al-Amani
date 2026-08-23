const { Jimp } = require('jimp');

async function getColor() {
  try {
    const imagePath = "C:/Users/kasui/.gemini/antigravity/brain/522ffa96-79fd-4a77-8724-a42be92cd89e/.user_uploaded/media_1787387877496.png";
    const image = await Jimp.read(imagePath);
    const hex = image.getPixelColor(10, 10);
    
    const r = (hex >>> 24) & 255;
    const g = (hex >>> 16) & 255;
    const b = (hex >>> 8) & 255;
    
    console.log(`RGB: ${r}, ${g}, ${b}`);
    console.log(`Hex: #${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`);
  } catch (err) {
    console.error("Error:", err);
  }
}

getColor();
