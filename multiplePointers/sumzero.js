// Write a function that takes in a sorted array and returns the first pair that sums up to zero in an array.
// If not return undefined.

// TIME COMPLEXITY
// O(logn) time complexity

// SPACE COMPLEXITY
// O(1) space complexity

function sumZero(arr) {
  let pt1 = 0;
  let pt2 = arr.length - 1;
  let sum = arr[pt1] + arr[pt2];

  while (pt2 > pt1) {
    sum = arr[pt1] + arr[pt2];

    if (sum === 0) return [arr[pt1], arr[pt2]];
    else if (sum > 0) {
      pt2--;
    } else pt1++;
  }

  // return undefined;
}
