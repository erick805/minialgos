/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/


// O(nums.length) time | O(1) space
const plusOne = nums => {
  // loop from back to access last digit
  for (let i = nums.length - 1; i >= 0; i--) {
    // if our current digit is less than 9 add one
    if (nums[i] < 9) {
      nums[i] = nums[i] + 1;
      return nums;
      // otherwise it's a nine and we need to carry over
    } else {
      nums[i] = 0;
    }
  }
  // edge case if we only contain nine in our array
  nums.unshift(1);
  return nums;
};
