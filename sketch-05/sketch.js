let grid = [];
let cellSize = 25;

function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent(document.querySelector(".canvas-container"));
  frameRate(10);
  noStroke();
  initializeGrid();
}


function initializeGrid() {
  for (let x = 0; x < width / cellSize; x++) {
    grid[x] = [];
    for (let y = 0; y < height / cellSize; y++) {
      grid[x][y] = {
        size: random(cellSize * 0.4, cellSize * 1.4)
      };
    }
  }
}

function draw() {
  background(225, 235, 245);

  for (let x = 0; x < width / cellSize; x++) {
    for (let y = 0; y < height / cellSize; y++) {

      let targetSize = random(cellSize * 0.4, cellSize * 1.4);
      grid[x][y].size = lerp(grid[x][y].size, targetSize, 0.05);

      let blue = map(grid[x][y].size, cellSize * 0.4, cellSize * 1.4, 180, 80);
      fill(80, 120, blue, 160);

      ellipse(
        x * cellSize + cellSize / 2,
        y * cellSize + cellSize / 2,
        grid[x][y].size,
        grid[x][y].size
      );
    }
  }
}
