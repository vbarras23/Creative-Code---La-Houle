
let cols, rows;
let scl = 20;
let w = 1400;
let h = 1000;
let flying = 0;

function setup() {
  createCanvas(800, 600);
  cols = w / scl;
  rows = h / scl;
  noStroke();
}

function draw() {
  background(15, 50, 80);
  
  flying -= 0.01;
  
  let yoff = flying;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let noiseVal = noise(xoff, yoff);
      
      let px = x * scl - 300;
      let py = y * scl - 200;
      

      let baseBlue = map(noiseVal, 0, 1, 60, 180);
      let baseWhite = map(noiseVal, 0, 100, 100, 200);

      let caustic = noise(xoff * 3, yoff * 3, frameCount * 0.02);
      let brightness = 0;
      if (caustic > 0.6) {
        brightness = map(caustic, 0.6, 1, 0, 100);
      }

      let r = 30 + brightness;
      let g = baseWhite + brightness * 0.8;
      let b = baseBlue + brightness * 0.5;
      
      fill(r, g, b, 200);
      
      let size = map(noiseVal, 0, 1, scl * 0.8, scl * 1.2);
      ellipse(px, py, size, size);
      
      xoff += 0.1;
    }
    yoff += 0.1;
  }

  drawSparkles();
}

function drawSparkles() {
  for (let i = 0; i < 15; i++) {
    let sparkleNoise = noise(i * 100, frameCount * 0.01);
    let x = noise(i * 50, frameCount * 0.005) * width;
    let y = noise(i * 50 + 1000, frameCount * 0.005) * height;
    
    if (sparkleNoise > 0.5) {
      let alpha = map(sparkleNoise, 0.5, 1, 0, 255);
      let size = map(sparkleNoise, 0.5, 1, 2, 8);
      
      fill(255, 255, 255, alpha);
      ellipse(x, y, size, size);
      
      fill(200, 230, 255, alpha * 0.3);
      ellipse(x, y, size * 3, size * 3);
    }
  }
}
