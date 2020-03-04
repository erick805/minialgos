/*
Write a function that takes in an array of positive integers and returns an integer representing the maximum sum of non-adjacent elements in the array. If a sum cannot be generated, the function should return 0.

Input: [75,105,120,75,90,135]
Output: 330 (75 + 120 + 135)
*/

const maxSubsetSumNoAdjacent = array => {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];

  let first = Math.max(array[0], array[1]);
  let second = array[0];

  for (let i = 2; i < array.length; i++) {
    let current = Math.max(first, second + array[i]);
    second = first;
    first = current;
  }
  return first;
};
