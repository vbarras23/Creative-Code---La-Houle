let particules = [];

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent(document.querySelector(".canvas-container"));
  noStroke();

  for (let i = 0; i < 220; i++) {
    particules.push({
      x: random(width),
      y: random(height),
      size: random(1, 3),
      speed: random(0.5, 1.5)
    });
  }
}

function draw() {
  background(235, 230, 220, 35);

  for (let i = 0; i < particules.length; i++) {
    let p = particules[i];

    let angle = noise(p.x * 0.005, p.y * 0.005, frameCount * 0.003) * TWO_PI;

    let vx = cos(angle) * p.speed + 0.8;
    let vy = sin(angle) * p.speed * 0.5;

    fill(120, 130, 140, 80);
    ellipse(p.x, p.y, p.size, p.size);

    p.x += vx;
    p.y += vy;

    if (p.x > width + 10) {
      p.x = -10;
      p.y = random(height);
    }

    if (p.y < -10) {
      p.y = height + 10;
    }

    if (p.y > height + 10) {
      p.y = -10;
    }
  }
}

function keyPressed() {
  if (key === "s" || key === "S") {
    saveCanvas("vent-organique", "png");
  }
}