// Quick Sort

// Like merge sort, exploits the fact that arrays of 0 or 1 elements are always sorted.
// Works by selecting one element (called the 'pivot') and finding the index where the pivot should end up.

// Quick Sort Pivot Helper

// In order to implement merge sort, it's useful to first implement function responsible for arranging elements in an array on either side of pivot.
// Given an array, this helper function should designate an element as the pivot.
// It should then rearrange elements in the array so that all values less than one pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of pivot.
// The order of elements on either side of the pivot doesn't matter!
// The helper should do this in place, that is, it should not create a new array.
// When complete, the helper should return the index of the pivot.

// **Picking a Pivot**
// The runtime of quick sort depends in part on how one selects the pivot.
// Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting.
// For simplicity , we'll always choose the pivot to be the first element (we'll talk about consequences later)

// Pivot Pseudocode

// It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
// Grab the pivot from the start of the array
// Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// Loop through the array from the start until the end.
// if pivot is greater than current element, increment the pivot index variable and then swap current element with element at pivot index.
// Swap the starting element (i.e. the pivot) with the pivot index
// return pivot index

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;

  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}
