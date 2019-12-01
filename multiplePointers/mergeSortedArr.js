// Write a function merge sorted array that takes two sorted arrays and returns one sorted array.

// Ex) mergeSortedArr([0,2,3,4], [3,4,5,6]) => [0,2,3,3,4,4,5,6]
//     mergeSortedArr([],[]) => []
//     mergedSortedArr([1,3], [2]) => [1,2,3]

// TIME COMPLEXITY
// O(n + m)
// SPACE COMPLEXITY
// O(n + m)

function mergeSortedArr(arr1, arr2) {
  if (!arr1.length) return arr2;
  if (!arr2.length) return arr1;

  let left = 0;
  let right = 0;

  let mergedArr = [];

  while (arr1[left] || arr2[right]) {
    if (!arr2[right] || arr1[left] < arr2[right]) {
      mergedArr.push(arr1[left]);
      left++;
    } else {
      mergedArr.push(arr2[right]);
      right++;
    }
  }

  return mergedArr;
}
