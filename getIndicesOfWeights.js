/*
Given a package with a weight limit and an array arr of item weights, implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit. Your function should return a pair [i, j] of the indices of the item weights, ordered such that i > j. If such a pair doesn’t exist, return an empty array.
*/

// input = 2 arguments, first arg = arr, second arg = limit integer
// *postive integers only
//           indexA > indexB
// output = [indexA, indexB] === lim

// Edge cases
// ([],0) => []
// ([1],1) => []
// ([3,1], 5) => []
// ([3,2], 5) => [1,0]

// Brute Force solution

// Time Complexity
// O(n^2)

// Space Complexity
// O(1)

function getIndicesOfItemWeights(arr, limit) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] + arr[j] === limit) {
        return [i, j];
      }
    }
  }
  return [];
}

// Hash Table solution
// save it in a hash map with the current value as the key and the index as the value.
// check if the difference is already a key, if it is just return that index, and your current index

// Time Complexity
// O(n)

// Space Complexity
// O(n)

function getIndicesOfItemWeights(arr, limit) {
  const hash = {};

  for (let i = arr.length - 1; i >= 0; i--) {
    const currVal = arr[i];
    const findIndex = hash[limit - currVal];

    if (findIndex !== undefined) return [findIndex, i];
    else {
      hash[currVal] = i;
    }
  }
  return [];
}

// Multiple pointers solution

// Time Complexity
// O(logn)

// Space Complexity
// O(1)

function getIndicesOfItemWeights(arr, limit) {
  if (arr.length < 2) return [];

  let first = 0;
  let second = arr.length - 1;

  while (second > first) {
    let sumPackages = arr[first] + arr[second];
    if (sumPackages === limit) return [second, first];
    else if (sumPackages > limit) second--;
    else first++;
  }

  return [];
}
