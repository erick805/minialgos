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
  // sort from least to greatest
  nums.sort((a, b) => a - b);

  const solutions = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // if our first pointer is positive we can break since it is sorted
    if (nums[i] > 0) break;
    // if we are past 1 we do not want to repeat duplicates for i
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    // initiate two pointers - left and right
    let left = i + 1;
    let right = nums.length - 1;
    // loop through other half of array
    while (left < right) {
      // capture current sum
      const sum = nums[i] + nums[left] + nums[right];
      // move left and right based on comparison to zero
      if (sum > 0) right--;
      else if (sum < 0) left++;
      else {
        // else we found it, push into solutions array
        solutions.push([nums[i], nums[left], nums[right]]);
        // check to make sure we are not repeating duplicates for left and right
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }

  return solutions;
};
