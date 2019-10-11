/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1

Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

/*
([]) => 0
([[1]]) => 0
([[0]]) => 0
([[1,0]]) => 0
*/

function numIslands(grid) {
  // if we have no grid, we just return zero islands
  if (!grid || grid.length === 0) return 0;

  let totalIslands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // we encountered an island
      if (grid[i][j] === "1") {
        // do a depth first search and check each of it's neighbors
        totalIslands += dfs(grid, i, j);
      }
    }
  }
  return numIslands;
}
