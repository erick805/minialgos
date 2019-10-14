// Bubble Sort
// a sorting algorithm where the largest values bubble up to the top!

// BubbleSort Pseudocode

// start looping from the end of the array towards the beginning.
// start an inner loop with a variable called j from the beginning until i - 1.
// if arr[j] is greater than arr[j + 1], swap the values.
// return the sorted array.

// TIME COMPLEXITY
// O(n)^2

function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] <= arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// Optimized with no swaps

const bubbleSort = arr => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};
