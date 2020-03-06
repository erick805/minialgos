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

const spiralCopy = matrix => {
  const spiralCopy = [];
  let topRow = 0;
  let bottomRow = matrix.length - 1;
  let leftCol = 0;
  let rightCol = matrix[0].length - 1;

  while (topRow <= bottomRow && leftCol <= rightCol) {
    // add uppermost row - left to right
    for (let i = leftCol; i <= rightCol; i++) {
      spiralCopy.push(matrix[topRow][i]);
    }
    topRow++;
    // add rightmost col - top to bottom
    for (let i = topRow; i <= bottomRow; i++) {
      spiralCopy.push(matrix[i][rightCol]);
    }
    rightCol--;

    // if still in bounds - add bottom row - right to left
    if (topRow <= bottomRow) {
      for (let i = rightCol; i >= leftCol; i--) {
        spiralCopy.push(matrix[bottomRow][i]);
      }
      bottomRow--;
    }
    // add leftmost col - bottom to top
    if (leftCol <= rightCol) {
      for (let i = bottomRow; i >= topRow; i--) {
        spiralCopy.push(matrix[i][leftCol]);
      }
      leftCol++;
    }
  }
  return spiralCopy;
};
