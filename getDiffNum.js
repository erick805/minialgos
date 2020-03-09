/*
Given an array of unique non-negative integers, implement a function getDiffNum that finds the smallest non-negative integer that is NOT in the array.

input: arr = [1, 2, 3, 4]
output: 5

input: arr = [1, 2, 4]
output: 3

input: arr = [0, 1, 2, 700]
output: 3

input: arr = [700, 1, 3, 2]
output: 4

input: arr = [700, 699, 83, 85]
output: 84
*/

// Time Complexity
// O(nlogn) time

//Space Complexity
//O(1) space

const getDiffNum = arr => {
  arr.sort((a, b) => a - b);
  let curVal = arr[0];

  if (arr.length === 1) return currVal + 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 === arr[i + 1]) curVal = arr[i + 1];
    else break;
  }

  return curVal + 1;
};
