/*
Given an array of n integers, return a set of elemenets a, b, c such that a + b + c = 0.
Find all unique triplets in the array which gives the sum of zero. (permutations not neccessary)

Note:
The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4]

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

const threeSum = nums => {
  nums.sort((a, b) => a - b);

  const solutions = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) right--;
      else if (sum < 0) left++;
      else {
        solutions.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }

  return solutions;
};
