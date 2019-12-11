/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5

Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4

Note:
You may assume k is always valid, 1 <= k <= array's length.
*/

const findKthLargest = (nums, k) => {
  return quickSelect(nums, 0, nums.length - 1, k);
};

const quickSelect = (arr, lo, hi, k) => {
  let i = lo;
  let j = lo;

  while (j < hi) {
    if (arr[j] <= arr[hi]) swap(arr, i++, j);
    j++;
  }

  swap(nums, i, j);
  // # of items greater than pivot point
  const m = hi - i + 1;
  // if we have same amount of items, we can return the value of pivot point
  if (m === k) return arr[i];
  // quick select right of pivot point
  if (m > k) return quickSelect(arr, i + 1, hi, k);
  // quick select left of pivot point
  return quickSelect(nums, lo, i - 1, k - m);
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
