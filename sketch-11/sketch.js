function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent(document.querySelector(".canvas-container"));
  noStroke();
}

function draw() {
  background(200, 220, 235);

  for (let i = 0; i < 6; i++) {

    let x = map(i, 0, 5, -50, width + 50);
    let offset = sin(frameCount * 0.003 + i) * 30;

    // Calcul de la proximité avec la souris
    let speedMultiplier = 1;
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      let dx = mouseX - (x + 40); // centre de la bande
      let distance = abs(dx);
      
      // Zone d'influence: 150 pixels
      if (distance < 150) {
        speedMultiplier = map(distance, 0, 150, 3, 1);
      }
    }

    fill(255, 255, 255, 35);

    beginShape();
    for (let y = 0; y <= height; y += 20) {
      let wave = sin(y * 0.01 + frameCount * 0.002 * speedMultiplier + i) * 10;

      vertex(x + wave + offset, y);
    }

    for (let y = height; y >= 0; y -= 20) {
      let wave = sin(y * 0.01 + frameCount * 0.002 * speedMultiplier + i) * 10;

      vertex(x + 80 + wave + offset, y);
    }

    endShape(CLOSE);
  }
}