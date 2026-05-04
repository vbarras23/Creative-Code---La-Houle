function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent(document.querySelector(".canvas-container"));
  noLoop();
  noStroke();
}

function draw() {
  background(215, 190, 150);
  
  for (let i = 0; i < 18000; i++) {
    let x = random(width);
    let y = random(height);
    let s = random(0.5, 2.2);

    let shade = random(170, 235);

    fill(shade, shade * 0.85, shade * 0.6, random(60, 140));
    ellipse(x, y, s, s);
  }


  for (let i = 0; i < 2500; i++) {
    fill(120, 95, 65, random(30, 80));
    ellipse(random(width), random(height), random(0.8, 2.5));
  }

  for (let i = 0; i < 2500; i++) {
    fill(245, 230, 190, random(30, 90));
    ellipse(random(width), random(height), random(0.8, 2));
  }


  for (let i = 0; i < 80; i++) {
    fill(130, 110, 85, 80);
    ellipse(random(width), random(height), random(2, 5), random(1.5, 4));
  }
}

function keyPressed() {
  if (key === "s" || key === "S") {
    saveCanvas("texture-sable", "png");
  }
}