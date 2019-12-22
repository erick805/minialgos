/*
You have one chocolate bar that consists of some chunks. Each chunk has its own sweetness given by the array sweetness.

You want to share the chocolate with your K friends so you start cutting the chocolate bar into K + 1 pieces using K cuts, each piece consists of some consecutive chunks.

Being generous, you will eat the piece with the minimum total sweetness and give the other pieces to your friends.

Find the maximum total sweetness of the piece you can get by cutting the chocolate bar optimally.

Example 1:
  Input: sweetness = [1,2,3,4,5,6,7,8,9], K = 5
  Output: 6
  Explanation: You can divide the chocolate to [1,2,3], [4,5], [6], [7], [8], [9]

Example 2:
  Input: sweetness = [5,6,7,8,9,1,2,3,4], K = 8
  Output: 1
  Explanation: There is only one way to cut the bar into 9 pieces.

Example 3:
  Input: sweetness = [1,2,2,1,2,2,1,2,2], K = 2
  Output: 5
  Explanation: You can divide the chocolate to [1,2,2], [1,2,2], [1,2,2]

Constraints:
  1. 0 <= K <= sweetness.length <= 10^4
  2. 1 <= sweetness[i] <= 10^5
*/

const maximizeSweetness = (sweetness, K) => {
  let min = Math.min(...sweetness); // n chocolate bars
  let max = sweetness.reduce((acc, e) => acc + e, 0); // 1 chocolate bar

  if (K + 1 === 1) return max;
  if (K + 1 === sweetness.length) return min;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);

    const pieces = getPieces(sweetness, mid);
    // include yourself
    if (pieces > K + 1) {
      min = mid + 1; // move closer to max - reduce pieces
    } else {
      max = mid - 1; // move closer to min - increase pieces
    }
  }
  return min;
};

const getPieces = (arr, t) => {
  let pieces = 1;
  let total = 0;

  for (const n of arr) {
    total += n;
    if (total > t) {
      pieces++;
      total = 0;
    }
  }
  return pieces;
};
