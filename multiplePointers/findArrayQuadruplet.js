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

function findArrayQuadruplet(arr, target) {
  if (arr.length < 4) return [];

  arr.sort((a, b) => a - b);

  for (let i = 0; i <= arr.length - 4; i++) {
    for (let j = i + 1; j <= arr.length - 3; j++) {
      let remainder = target - (arr[i] + arr[j]);

      let low = j + 1;
      let high = arr.length - 1;

      while (high > low) {
        if (arr[low] + arr[high] < remainder) low++;
        else if (arr[low] + arr[high] > remainder) high--;
        else return [arr[i], arr[j], arr[low], arr[high]];
      }
    }
  }
  return [];
}
