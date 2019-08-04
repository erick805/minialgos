// write a function called search index that takes in a sorted array of integers and a value.
// return the index of the value in the array
// return -1 otherwise

// Ex 1) ([1,2,3,4,5,6], 4) => 3
//       ([1,2,3,4,5,6], 6) => 5
//       ([1,2,3,4,5,6], 7) => -1

// TIME COMPLEXITY
// O(logn) time

// SPACE COMPLEXITY
// O(1) space

function searchIndex(arr, val) {
  if (val > arr[arr.length - 1]) return -1;
  if (val < arr[0]) return -1;

  let left = 0;
  let right = arr.length - 1;

  while (right >= left) {
    let midPoint = Math.floor((right + left) / 2);
    let currentElement = arr[midPoint];

    if (currentElement > val) {
      right = midPoint - 1;
    } else if (currentElement < val) {
      left = midPoint + 1;
    } else {
      return midPoint;
    }
  }
  return -1;
}
