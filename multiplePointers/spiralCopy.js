/*
2 d array as an input = [[]]
and you to return a spiral copy of that array 1d array

inputMatrix  = [ [1,    2,   3,  4,    5],
                  [6,    7,   8,  9,   10],
                  [11,  12,  13,  14,  15],
                  [16,  17,  18,  19,  20] ]

output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

top -> 0
bottom -> matrix.length
right -> matrix[0].length
left -> 0

while top < bottom and left < right:

output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6]
top = 1, bottom = 2, right = 3, left = 1


// The rows and columns could be different
// But all rows and columns are same
// values inside are not sorted


// Edge Cases
// ([[1]]) => [1]
// ([[0,1],[3,2]]) => [0,1,2,3]

        left                 right
[top -> [1,    2,   3,  4,    5],
        [6,    7,   8,  9,   10],
        [11,  12,  13,  14,  15],
bottom->[16,  17,  18,  19,  20]]

*/

function spiralCopy(inputMatrix) {
  let spiralCopy = [];
  let topRow = 0;
  let bottomRow = inputMatrix.length - 1;
  let leftCol = 0;
  let rightCol = inputMatrix[0].length - 1;

  while (topRow <= bottomRow && leftCol <= rightCol) {
    // I want to add the uppermost row (row at pointer top from left to right) -> top += 1
    for (let i = leftCol; i <= rightCol; i++) {
      spiralCopy.push(inputMatrix[topRow][i]);
    }
    topRow++;

    // I want to add rightmost column (row at right pointer and column from top to bottom) -> right -= 1
    for (let i = topRow; i <= bottomRow; i++) {
      spiralCopy.push(inputMatrix[i][rightCol]);
    }
    rightCol--;

    // I want to add bottom row (row at bottom pointer from right to left) -> bottom -= 1
    if (topRow <= bottomRow) {
      for (let i = rightCol; i >= leftCol; i--) {
        spiralCopy.push(inputMatrix[bottomRow][i]);
      }
      bottomRow--;
    }

    // I want to add left column (row is at left pointer and column from bottom to top) -> left += 1
    if (leftCol <= rightCol) {
      for (let i = bottomRow; i >= topRow; i--) {
        spiralCopy.push(inputMatrix[i][leftCol]);
      }
      leftCol++;
    }
  }

  return spiralCopy;
}
