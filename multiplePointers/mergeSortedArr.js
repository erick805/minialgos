// Write a function merge sorted array that takes two sorted arrays and returns one sorted array.

// Ex) mergeSortedArr([0,2,3,4], [3,4,5,6]) => [0,2,3,3,4,4,5,6]
//     mergeSortedArr([],[]) => []
//     mergedSortedArr([1,3], [2]) => [1,2,3]

// O(arr1.length + arr2.length) time | O(arr1.length + arr2.length) space
const mergeSortedArr = (arr1, arr2) => {
  if (!arr1.length) return arr2;
  if (!arr2.length) return arr1;

  let pt1 = 0;
  let pt2 = 0;

  const mergedArr = [];

  while (arr1[pt1] || arr2[pt2]) {
    if (!arr2[pt2] || arr1[pt1] < arr2[pt2]) {
      mergedArr.push(arr1[pt1]);
      pt1++;
    } else {
      mergedArr.push(arr2[pt2]);
      pt2++;
    }
  }
  return mergedArr;
};
