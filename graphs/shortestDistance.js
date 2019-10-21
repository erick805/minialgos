/*
You want to build a house on an empty land which reaches all buildings in the shortest amount of distance. You can only move up, down, left and right. You are given a 2D grid of values 0, 1 or 2, where:

Each 0 marks an empty land which you can pass by freely.
Each 1 marks a building which you cannot pass through.
Each 2 marks an obstacle which you cannot pass through.
Example:

Input: [[1,0,2,0,1],[0,0,0,0,0],[0,0,1,0,0]]

1 - 0 - 2 - 0 - 1
|   |   |   |   |
0 - 0 - 0 - 0 - 0
|   |   |   |   |
0 - 0 - 1 - 0 - 0

Output: 7

Explanation: Given three buildings at (0,0), (0,4), (2,2), and an obstacle at (0,2),
             the point (1,2) is an ideal empty land to build a house, as the total
             travel distance of 3+3+1=7 is minimal. So return 7.
Note:
There will be at least one building. If it is not possible to build such house according to the above rules, return -1.
*/

// Do a BFS from each building
// hit = how many times an empty land has reached
// distance sum = the sum of all buildings to that empty land

// return -1 if buildings are not connected

// solution: pick an empty land reachable from all buildings with the minimum distance sum.

function shortestDistance(grid) {
  const emptyLands = findElements(grid, 0);
  const houses = findElements(grid, 1);

  const numberOfHouses = houses.length;
  const numberOfHousesWithPathToEachEmptyLand = makeDeepDuplicateOfGrid(
    grid,
    0
  );
  const aggregateDistances = makeDeepDuplicateOfGrid(grid, 0);

  for (let house of houses) {
    if (
      !bfs(
        grid,
        numberOfHousesWithPathToEachEmptyLand,
        aggregateDistances,
        numberOfHouses,
        house
      )
    ) {
      return -1;
    }
  }
  let shortestDistance = Infinity;

  for (let emptyLand of emptyLands) {
    const row = emptyLand[0];
    const col = emptyLand[1];

    // Only evaluate empty lands that have paths to EVERY house
    // This is neccesary because even though BFS checks to make sure each house can get to every other house.
    // it does not account for the case that every land is accessible to every house.
    if (numberOfHousesWithPathToEachEmptyLand[row][col] === numberOfHouses) {
      const aggregateDistance = aggregateDistances[row][col];
      shortestDistance = Math.min(aggregateDistance, shortestDistance);
    }
  }
  return shortestDistance === Infinity ? -1 : shortestDistance;
}

function bfs(
  grid,
  numberOfHousesWithPathToEachEmptyLand,
  aggregateDistances,
  numberOfHouses,
  house
) {
  const visited = makeDeepDuplicateOfGrid(grid, false);
  const queue = [{ position: house, distance: 0, startingHouse: true }];
  let houseVisited = 1;

  while (queue.length) {
    const { position, distance, startingHouse } = queue.shift();
    const row = position[0];
    const col = position[1];

    if (visited[row][col] === false) {
      visited[row][col] = true;
      const positionValue = grid[row][col];

      if (positionValue === 1 && !startingHouse) {
        houseVisited++;
      } else if (positionValue === 0 || startingHouse) {
        aggregateDistances[row][col] += distance;
        numberOfHousesWithPathToEachEmptyLand[row][col]++;

        const neighbors = [
          [row - 1, col],
          [row + 1, col],
          [row, col - 1],
          [row, col + 1]
        ];

        for (let neighbor of neighbors) {
          if (isNeighborInBounds(visited, grid, neighbor)) {
            queue.push({
              position: neighbor,
              distance: distance + 1,
              startingHouse: false
            });
          }
        }
      }
    }
  }
  return houseVisited === numberOfHouses;
}

function findElements(grid, value) {
  const positions = [];
  grid.forEach((row, rowIdx) => {
    row.forEach((element, coldIdx) => {
      if (element === value) {
        positions.push([rowIdx, coldIdx]);
      }
    });
  });
  return positions;
}

function makeDeepDuplicateOfGrid(grid, value) {
  const duplicate = JSON.parse(JSON.stringify(grid));

  duplicate.forEach((row, rowIdx) => {
    row.forEach((element, coldIdx) => {
      duplicate[rowIdx][coldIdx] = value;
    });
  });

  return duplicate;
}

function isNeighborInBounds(visited, grid, position) {
  const row = position[0];
  const col = position[1];

  return row >= 0 && col >= 0 && row < grid.length && col < grid[0].length;
}
