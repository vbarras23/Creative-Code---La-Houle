let particles = [];

function setup() {
  createCanvas(500, 500);
  stroke(180, 210, 255, 120);
  strokeWeight(1.5);

  for (let i = 0; i < 300; i++) {
    particles.push({
      x: random(width),
      y: random(height)
    });
  }
}

function draw() {
  background(20, 35, 70, 40);

  for (let p of particles) {
    let angle = noise(p.x * 0.005, p.y * 0.005, frameCount * 0.003) * TWO_PI;

    let vx = cos(angle);
    let vy = sin(angle);

    line(p.x, p.y, p.x + vx * 5, p.y + vy * 5);

    p.x += vx;
    p.y += vy;

    if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}