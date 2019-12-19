/*
Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

  Input: [1,2,3,4]
  Output: [24,12,8,6]

Note: Please solve it without division and in O(n).

Follow up:

Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

// Time Complexity: O(n)

const productExceptSelf = nums => {
  const leftProd = [];
  const rightProd = [];
  const output = [];

  (leftProd[0] = 1), (rightProd[nums.length - 1] = 1);

  // get all products left of self
  for (let i = 1; i < nums.length; i++) {
    leftProd[i] = nums[i - 1] * leftProd[i - 1];
  }
  // get all products right of self
  for (let i = nums.length - 2; i >= 0; i--) {
    rightProd[i] = nums[i + 1] * rightProd[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    output[i] = leftProd[i] * rightProd[i];
  }

  return output;
};

// Optimization - O(1) space

const productExceptSelf = nums => {
  const output = [1];

  // get all products left of self
  for (let i = 1; i < nums.length; i++) {
    output[i] = output[i - 1] * nums[i - 1];
  }

  let R = 1; // initiate variable to keep track of products to right
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = output[i] * R;
    R = nums[i] * R; // accumulate variable
  }

  return output;
};
