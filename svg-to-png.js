// This script converts the SVG favicon to PNG format for better browser compatibility
// To run: node svg-to-png.js

import fs from 'fs';
import { createCanvas, loadImage } from 'canvas';

async function convertSvgToPng(svgPath, pngPath, width, height) {
  try {
    // Create a canvas with the desired dimensions
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    
    // Load the SVG image
    const img = await loadImage(svgPath);
    
    // Draw the image on the canvas
    ctx.drawImage(img, 0, 0, width, height);
    
    // Convert the canvas to a PNG buffer
    const buffer = canvas.toBuffer('image/png');
    
    // Write the PNG file
    fs.writeFileSync(pngPath, buffer);
    
    console.log(`Converted ${svgPath} to ${pngPath}`);
  } catch (error) {
    console.error('Error converting SVG to PNG:', error);
  }
}

// Convert favicon
convertSvgToPng('./public/favicon.svg', './public/favicon.png', 64, 64);

// Convert apple-touch-icon
convertSvgToPng('./public/apple-touch-icon.svg', './public/apple-touch-icon.png', 192, 192);