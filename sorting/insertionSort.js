// Insertion Sort

// Builds up the sort by gradually creating a larger left half which is always sorted.

// Insertion Sort Pseudocode

// Start by picking the second element in the array.
// Now compare the second element to the one before it and swap if neccesary.
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. left side).
// to place the element in the correct place.
// Repeat until the array is sorted.
// Return array

// Time Complexity
// O(n)^2 time

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
