/*
Given an unsorted array of integers arr and a target, write a function findArrayQuadruplet that finds four numbers (quadruplet) in arr
thats sums up to target. Your function should return an array of these numbers in an ascending order. If no quadruplet exists, return an empty
array.

Note: There might be more than one quadruplet in arr whose sum is target. You have to return the first one you encounter (considering results sorted)

Input: unsorted arr, target number
Output: [4 sorted ascended values === target] *output first*

input:  arr = [2, 7, 4, 0, 9, 5, 1, 3], target = 20

output: [0, 4, 7, 9]

input: arr = [1] target = 1
output: []

input: arr =[-1,-5,0,0,5] target = 0
output: [-5,0,0,5]
*/

/*
Time Complexity: O(n^3)

Space Complexity: O(1)
*/

function findArrayQuadruplet(arr, target) {
  // if array length is less than four return an empty array
  if (arr.length < 4) return [];
  // sort array in ascending order
  arr.sort((a, b) => a - b);
  // loop through the array and set first pointer
  for (let i = 0; i <= arr.length - 4; i++) {
    // loop through and set second pointer
    for (let j = i + 1; j <= arr.length - 3; j++) {
      // find remainder of target === sum of first + second pointer
      let remainder = target - (arr[i] + arr[j]);
      // initiate our third and fourth pointer
      let low = j + 1;
      let high = arr.length - 1;
      // if our pointers don't collide we have possiblities
      while (high > low) {
        // if our third + fourth pointer (second half) < remainder, increase third pointer to right
        if (arr[low] + arr[high] < remainder) low++;
        // if our third + fourth pointer (second half) > remainder, decrease fourth pointer to left
        else if (arr[low] + arr[high] > remainder) high--;
        // else our remainders are equal - just return the array values from first to fourth, since it is sorted.
        else return [arr[i], arr[j], arr[low], arr[high]];
      }
    }
  }
  // return an empty array if we don't have valid quadruplets
  return [];
}
