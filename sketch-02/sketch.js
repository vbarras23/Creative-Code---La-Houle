let grains = [];
let vent = false;
let ventForce = 0;

function setup() {
  createCanvas(500, 500);
  noStroke();

  for (let i = 0; i < 200; i++) {
    grains.push({
      x: random(width),
      y: random(height * 0.7, height), // surtout en bas
      size: random(1, 3),
      speedX: random(1, 3),
      speedY: random(-1, 1),
      alpha: random(80, 180)
    });
  }
}

function draw() {
  background(245, 242, 235);


  if (frameCount > 25) {
    vent = true;

  if (vent && ventForce < 3) {
    ventForce += 0.01;
  }

  for (let i = 0; i < grains.length; i++) {
    let g = grains[i];


    fill(190, 160, 120, g.alpha);
    ellipse(g.x, g.y, g.size);

    if (vent) {
      g.x += g.speedX * ventForce;
      g.y += g.speedY * ventForce + sin(frameCount * 0.05 + i) * 0.3;
    }

    if (g.x > width + 10) {
      g.x = random(-20, 0);
      g.y = random(height * 0.7, height);
    }
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('sable-vent', 'png');
  }
}