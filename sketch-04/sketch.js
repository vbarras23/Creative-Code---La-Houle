let ripples = [];

function setup() {
  createCanvas(500, 500);
  noFill();
}

function draw() {
  background(230, 225, 220);


  for (let i = ripples.length - 1; i >= 0; i--) {
    let r = ripples[i];


    for (let j = 0; j < 8; j++) {
      let size = r.radius - j * 12;

      if (size > 0) {
        stroke(40, 50, 130, 90 - j * 10);
        strokeWeight(2);
        ellipse(r.x, r.y, size, size);
      }
    }

    r.radius += 2;


    if (r.radius > 140) {
      ripples.splice(i, 1);
    }
  }

  addGrain();
}

function mousePressed() {
  ripples.push({
    x: mouseX,
    y: mouseY,
    radius: 20
  });
}

function addGrain() {
  loadPixels();

  for (let i = 0; i < 15000; i++) {
    let x = floor(random(width));
    let y = floor(random(height));
    let index = (x + y * width) * 4;

    let noise = random(-15, 15);

    pixels[index] = constrain(pixels[index] + noise, 0, 255);
    pixels[index + 1] = constrain(pixels[index + 1] + noise, 0, 255);
    pixels[index + 2] = constrain(pixels[index + 2] + noise, 0, 255);
  }

  updatePixels();
}

function keyPressed() {
  if (key === "s" || key === "S") {
    saveCanvas("ripple-click", "png");
  }
}