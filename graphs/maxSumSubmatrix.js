/*
Given a non-empty 2D matrix matrix and an integer k, find the max sum of a rectangle in the matrix such that its sum is no larger than k.

Example:

  Input: matrix = [          , k = 2
                   [1,0,1],
                   [0,-2,3]
                  ]
  Output: 2
  Explanation: Because the sum of rectangle [[0,1], [-2,3]] is 2,
  and 2 is the max number no larger than k (k = 2).
*/

// Kadane's Algorithm

const maxSumSubmatrix = (matrix, k) => {
  const rows = matrix.length,
    cols = matrix[0].length;
  let res = -Infinity;

  for (let left = 0; left < cols; left++) {
    const rowSums = new Array(rows).fill(0);

    for (let right = left; right < cols; right++) {
      let sum = 0;
      let max = -Infinity;

      for (let r = 0; r < rows; r++) {
        rowSums[r] += matrix[r][right];
        if (sum < 0) sum = 0;
        sum += rowSums[r];
        max = Math.max(max, sum);
      }
      if (max <= k) res = Math.max(res, max);
      else {
        max = -Infinity;
        for (let m = 0; m < rows; m++) {
          sum = 0;
          for (let n = m; n < rows; n++) {
            sum += rowSums[n];
            if (sum <= k) max = Math.max(max, sum);
          }
        }
        res = Math.max(res, max);
      }
      if (res === k) return k;
    }
  }

  return res;
};
