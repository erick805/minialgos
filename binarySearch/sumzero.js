// Write a function that takes in a sorted array and returns the first pair that sums up to zero in an array.
// If not return undefined.

// O(log(arr.length)) time | O(1) space
const sumZero = arr => {
  let pt1 = 0;
  let pt2 = arr.length - 1;

  while (pt1 < pt2) {
    const sum = arr[pt1] + arr[pt2];
    if (sum === 0) return [arr[pt1], arr[pt2]];
    else if (sum > 0) pt2--;
    else pt1++;
  }
  return undefined;
};
