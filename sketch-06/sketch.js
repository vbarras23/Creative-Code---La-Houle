function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent(document.querySelector(".canvas-container"));
  noLoop();
}

function draw() {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);

    let c = lerpColor(
      color(30, 100, 200),
      color(255, 255, 255),
      inter
    );

    stroke(c);
    line(0, y, width, y);
  }
  
}