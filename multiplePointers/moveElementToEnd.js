/*
You are given an array of integers and an integer. Write a function that moves all instances of that integer in the
array to the end of the array. The function should perform this in place and does not need to maintain the order of
the other integers.

Input: array = [2,1,2,2,2,3,4,2], toMove = 2
Output: [1,3,4,2,2,2,2,2] (the numbers 1,3 and 4 could be ordered differently)
*/

// O(arr.length) time | O(1) space
const moveElementToEnd = (arr, toMove) => {
  let beg = 0;
  let end = arr.length - 1;

  while (beg < end) {
    while (beg < end && arr[end] === toMove) end--;
    if (arr[beg] === toMove) {
      const current = arr[beg];
      arr[beg] = arr[end];
      arr[end] = current;
    }
    beg++;
  }
  return arr;
};
