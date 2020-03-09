// Write a function that takes in an array and returns the first recurring number in the array.

// Ex findRecurring([2,5,1,2,3,5,1,2,4]) => 2
//                 ([2,1,1,2,3,5,1,2,4]) => 1
//                 ([2,3,4,5]) => undefined

// O(arr.length) time | O(arr.length) space
const findRecurring = arr => {
  // loop through the array and save each value as a key with a boolean true if seen.
  // if the dictionary contains a key with a boolean true on the next iteration of array.
  // we can return the key in dictionary or value of the array.
  // if no value is seen, return undefined.
  const seen = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (!seen[num]) seen[num] = true;
    else if (seen[num]) return num;
  }

  return undefined;
};
