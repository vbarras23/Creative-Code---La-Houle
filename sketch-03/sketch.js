let vagues = [];

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent(document.querySelector('.canvas-container'));
  noStroke();

  for (let i = 0; i < 10; i++) {
    vagues.push({
      y: map(i, 0, 9, -100, height),
      speed: map(i, 0, 9, 0.3, 1),
      alpha: map(i, 0, 9, 40, 120)
    });
  }
}

function draw() {
  background(220, 230, 240);

  for (let i = 0; i < vagues.length; i++) {
    let v = vagues[i];

    let blue = map(i, 0, vagues.length, 180, 80);

    fill(100, 140, blue, v.alpha);

    // forme étirée
    beginShape();
    for (let x = 0; x <= width; x += 20) {
      let yOffset = sin(x * 0.01 + frameCount * 0.01 + i) * 10;
      vertex(x, v.y + yOffset);
    }

    vertex(width, v.y + 80);
    vertex(0, v.y + 80);
    endShape(CLOSE);

    v.y += v.speed;


    if (v.y > height + 50) {
      v.y = -100;
    }
  }
}