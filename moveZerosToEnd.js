/*
Given a static-sized array of integers arr, move all zeroes in the array to the end of the array. You should preserve the relative order of items in the array.

We should implement a solution that is more efficient than a naive brute force.

Examples:

input:  arr = [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0]
output: [1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0]
*/

/*
Edge Case:
([]) => []
([1]) => [1]
([1,0]) => [1,0]
([0,1]) => [1,0]
([1,0,1) => [1,1,0]
([0,1,1]) => [1,1,0]
([1,0,0]) => [1,0,0]
([0,0,1]) => [1,0,0]
([0,1,0]) => [1,0,0]
*/

function moveZerosToEnd(arr) {
  if (!arr.length) return [];
  if (arr.length === 1) return arr;
  let write = 0;

  // traverse the array and access the value to check if value is a zero
  for (let read = 0; read < arr.length; read++) {
    // if the value is not zero
    if (arr[read] !== 0) {
      // set the current value of arr[read] to arr[write]
      arr[write] = arr[read];
      // increment write to keep count of written values
      write += 1;
    }
  }
  // start from our last index of written and change each element after to zero's to fit array.
  for (let i = write; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}
