let grid = [];
let cellSize = 25;

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent(document.querySelector(".canvas-container"));
  noStroke();

  for (let x = 0; x < width / cellSize; x++) {
    grid[x] = [];
    for (let y = 0; y < height / cellSize; y++) {
      grid[x][y] = {
        value: random(0.5, 1.2),
        offset: random(1000)
      };
    }
  }
}

function draw() {
  background(20, 35, 70);

  for (let x = 0; x < width / cellSize; x++) {
    for (let y = 0; y < height / cellSize; y++) {

      let cell = grid[x][y];

      let n = noise(x * 0.1, y * 0.1, frameCount * 0.01 + cell.offset);

      cell.value = lerp(cell.value, n, 0.05);

      let size = cellSize * cell.value;

      // couleur reflet
      fill(180, 210, 255, 80);

      rect(
        x * cellSize + (cellSize - size) / 2,
        y * cellSize + (cellSize - size) / 2,
        size,
        size
      );
    }
  }
}