// Bubble Sort
// a sorting algorithm where the largest values bubble up to the top!

// BubbleSort Pseudocode

// start looping from the end of the array towards the beginning.
// start an inner loop with a variable called j from the beginning until i - 1.
// if arr[j] is greater than arr[j + 1], swap the values.
// return the sorted array.

function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      // console.log(arr, arr[j], arr[i])
      if (arr[i] <= arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    // console.log('PASS COMPLETE!)
  }
  return arr;
}
