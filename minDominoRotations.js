/*
In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the i-th domino. (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the i-th domino, so that A[i] and B[i] swap values.

Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.

If it cannot be done, return -1.

Example 1:

Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
Output: 2

Explanation:
The first figure represents the dominoes as given by A and B: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.

Example 2:

Input: A = [3,5,1,2,3], B = [3,6,3,3,4]
Output: -1

Explanation:
In this case, it is not possible to rotate the dominoes to make one row of values equal.

Note:

1 <= A[i], B[i] <= 6
2 <= A.length == B.length <= 20000
*/

// Time Complexity: O(n)
// Space Complexity: O(1)

const minDominoRotations = (A, B) => {
  let flips;

  const checkNotNum = num => {
    let countA = 0;
    let countB = 0;

    // since they are equal length we can do this
    for (let i = 0; i < A.length; i++) {
      // if both our current dominoes don't include the number then it does not match for both sets.
      if (A[i] !== num && B[i] !== num) return -1;
      // tally how much each domino set does not contain the current num
      if (A[i] !== num) countA++;
      if (B[i] !== num) countB++;
    }
    // return the lowest amount of possible flips
    return Math.min(countA, countB);
  };

  flips = checkNotNum(A[0]);
  // if it did not return -1, this means the matching value is in A
  if (flips !== -1) return flips;
  // if it did - check the matching value in B
  return checkNotNum(B[0]);
};
