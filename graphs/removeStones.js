/*
On a 2D plane, we place stones at some integer coordinate points. Each coordinate point may have at most one stone.

Now, a move consists of removing a stone that shares a column or row with another stone on the grid.

What is the largest possible number of moves we can make?

Example 1:

Input: stones = [[0,0],[0,1],[1,0],[1,2][2,1][2,2]]
Output: 5

Example 2:

Input: stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]
Output: 3

Example 3:

Intput: stones = [[0,0]]
Output: 0

Note:

  1. 1 <= stones.length <= 1000
  2. 0 <= stones[i][j] <= 10000
*/

// Union Find

const removeStones = stones => {
  // create subset
  let subSetCount = stones.length;

  const parentMap = [];
  // fill parent map with initial index
  for (let i = 0; i < stones.length; i++) {
    parentMap[i] = i;
  }

  for (let thisStoneIdx = 1; thisStoneIdx < stones.length; thisStoneIdx++) {
    const thisStone = stones[thisStoneIdx];

    for (let thatStoneIdx = 0; thatStoneIdx < thisStoneIdx; thatStoneIdx++) {
      const thatStone = stones[thatStoneIdx];
      // if both row and column don't match go onto next stone
      if (thisStone[0] !== thatStone[0] && thisStone[1] !== thatStone[1])
        continue;

      // if we don't have stone in parent map - set it
      if (parentMap[thisStoneIdx] === thisStoneIdx) {
        parentMap[thisStoneIdx] = thatStoneIdx;
        subSetCount--;
      } else {
        // find root of this stone
        let currentThisStone = parentMap[thisStoneIdx];
        // find our parent for this stone
        while (parentMap[currentThisStone] !== currentThisStone) {
          currentThisStone = parentMap[currentThisStone];
        }

        // find root of that stone
        let currentThatStone = parentMap[thatStoneIdx];

        while (parentMap[currentThatStone] !== currentThatStone) {
          currentThatStone = parentMap[currentThatStone];
        }
        // merge if they are not equal
        if (currentThatStone !== currentThisStone) {
          parentMap[currentThisStone] = currentThatStone;
          subSetCount--;
        }
      }
    }
  }

  return stones.length - subSetCount;
};
