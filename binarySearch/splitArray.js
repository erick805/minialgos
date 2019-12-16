/*
Given an array which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays.
Write an algorithm to minimize the largest sum among these m subarrays.

Example:

Input: [7,2,5,10,8]
m = 2

Output:
18

Explanation:
There are four ways to split nums into two subarrays. The best way is to split it into [7,2,5] and [10,8],
where the largest sum among the two subarrays is only 18.
*/

const splitArray = (nums, m) => {
  const max = Math.max(...nums);
  const sum = nums.reduce((a, b) => a + b, 0);

  let lo = max; // max value in nums - 5 subarray
  let hi = sum; // sum of all values in nums - 1 subarray

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);

    const pieces = getPieces(nums, mid);

    if (pieces > m) {
      lo = mid + 1; // we want to reduce amount of pieces - move towards hi
    } else {
      hi = mid; // we want to move towards lo - to get more pieces
    }
  }

  return lo; // return lo, when lo = hi - that is our minimum value for splitting into m pieces
};

const getPieces = (nums, targetSum) => {
  let pieces = 1;
  let tempSum = 0;

  for (const num of nums) {
    if (num + tempSum > targetSum) {
      tempSum = num;
      pieces++;
    } else {
      tempSum += num;
    }
  }

  return pieces;
};
