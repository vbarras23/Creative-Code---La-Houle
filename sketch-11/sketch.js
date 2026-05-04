function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(200, 220, 235);

  for (let i = 0; i < 6; i++) {

    let x = map(i, 0, 5, -50, width + 50);
    let offset = sin(frameCount * 0.003 + i) * 30;

    fill(255, 255, 255, 35);

    beginShape();
    for (let y = 0; y <= height; y += 20) {
      let wave = sin(y * 0.01 + frameCount * 0.002 + i) * 10;

      vertex(x + wave + offset, y);
    }

    for (let y = height; y >= 0; y -= 20) {
      let wave = sin(y * 0.01 + frameCount * 0.002 + i) * 10;

      vertex(x + 80 + wave + offset, y);
    }

    endShape(CLOSE);
  }
}