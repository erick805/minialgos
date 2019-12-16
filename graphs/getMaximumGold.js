/*
In a gold mine grid of size m * n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

Return the maximum amount of gold you can collect under the conditions:

  - Every time you are located in a cell you will collect all the gold in that cell.
  - From your position you can walk one step to the left, right, up or down.
  - You can't visit the same cell more than once.
  - Never visit a cell with 0 gold.
  - You can start and stop collecting gold from any position in the grid that has some gold.
*/

const getMaximumGold = grid => {
  let max = -Infinity;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let gold = getMaxDirection(grid, i, j);
      if (gold > max) max = gold;
    }
  }

  return max;
};

const getMaxDirection = (grid, x, y) => {
  if (
    x < 0 ||
    x >= grid.length ||
    y < 0 ||
    y >= grid[0].length ||
    grid[x][y] === 0
  )
    return 0;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const temp = grid[x][y];
  let curMax = -Infinity;

  grid[x][y] = 0; // visited

  directions.forEach(direction => {
    let maxGoldOfDirection = getMaxDirection(
      grid,
      x + direction[0],
      y + direction[1]
    );
    if (curMax < maxGoldOfDirection) curMax = maxGoldOfDirection;
  });

  grid[x][y] = temp;

  return curMax + grid[x][y];
};
