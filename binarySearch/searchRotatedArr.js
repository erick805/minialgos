/*
Suppose you have a sorted array in ascending order that is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
You are given a target value to search. If found in the array return it's index, otherwise return -1.
You may assume no duplicates exist in the array.
The algorithm's runtime complexity must be O(logn) or less.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

const searchRotatedArr = (rotatedArr, target) => {
  const peak = findPeak(rotatedArr);

  return rotatedArr[0] > target
    ? binarySearch(rotatedArr, target, peak + 1)
    : binarySearch(rotatedArr, target, 0, peak + 1);
};

const findPeak = (arr, left = 0, right = arr.length) => {
  let peak = Math.floor((right + left) / 2);

  while (arr[peak - 1] > arr[peak] || arr[peak + 1] > arr[peak]) {
    arr[0] > arr[peak] ? (right = peak) : (left = peak);
    peak = Math.floor((right + left) / 2);
  }

  return peak;
};

const binarySearch = (arr, target, left = 0, right = arr.length) => {
  let mid = Math.floor((right + left) / 2);

  while (arr[mid] !== target && Math.abs(right - left) > 1) {
    arr[mid] > target ? (right = mid) : (left = mid);
    mid = Math.floor((right + left) / 2);
  }

  return arr[mid] === target ? mid : -1;
};
