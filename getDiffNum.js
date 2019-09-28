/*
Given an array arr of unique nonnegative integers, implement a function getDifferentNumber that finds the smallest nonnegative integer that is NOT in the array.

conditional edge case if first element >= 1 return 0
[1,2,3] => 0
[10,50,51] => 0


let diff = arr[]
input:  arr = [1, 2, 3, 4]

output: 0

input:  arr = [1, 2, 4]

output: 0

input:  arr = [0, 1, 2, 700]

output: 3

*/

// Time Complexity
// O(nlogn) time

//Space Complexity
//O(1) space

function getDifferentNumber(arr) {
  //sort the array first
  arr = arr.sort();
  if (arr[0] >= 1) return 0;

  let currVal = arr[0];

  if (arr.length === 1) return arr[0] + 1;

  // Check if each element is inrementing by 1, if so stop as soon as element stops incrementing
  // return element + 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 === arr[i + 1]) currVal = arr[i + 1];
    else break;
  }
  return currVal + 1;
}
