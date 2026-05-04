function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent(document.querySelector('.canvas-container'));
  noStroke();
}

function draw() {
  background(245, 245, 240);

  for (let i = 0; i < 6; i++) {
    let y = 70 + i * 70;
    let x = width / 2 + sin(frameCount * 0.01 + i) * 25;

    let w = 180 + sin(frameCount * 0.015 + i) * 20;
    let h = 55 + cos(frameCount * 0.012 + i) * 10;

    fill(40, 90, 220, 35);
    ellipse(x, y, w, h);

    fill(40, 90, 220, 20);
    ellipse(x + 15, y + 8, w * 0.9, h * 0.9);

    fill(40, 90, 220, 15);
    ellipse(x - 12, y - 6, w * 1.1, h * 1.1);
  }

  addGrain();
}

function addGrain() {
  loadPixels();

  for (let i = 0; i < 12000; i++) {
    let x = floor(random(width));
    let y = floor(random(height));
    let index = (x + y * width) * 4;

    let noise = random(-20, 20);

    pixels[index] = constrain(pixels[index] + noise, 0, 255);
    pixels[index + 1] = constrain(pixels[index + 1] + noise, 0, 255);
    pixels[index + 2] = constrain(pixels[index + 2] + noise, 0, 255);
  }

  updatePixels();
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('houle-douce', 'png');
  }
}