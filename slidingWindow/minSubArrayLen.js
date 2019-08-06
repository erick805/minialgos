// write a function minimum sub array length that takes in an array and a number.
// function should return the minimum array length that is greater than or equal to number.
// If there isnt it should return 0 otherwise

// Ex 1) ([2,3,1], 1) => 1
//       ([1], 9) => 0
//       ([2,3,1,2,4,3], 7) => 2

// TIME COMPLEXITY
// O(n) time

// SPACE COMPLEXITY
// O(1) space

function minSubArrayLen(arr, num) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    // if current window does not add up to sum, move window to right
    if (total < num && end < arr.length) {
      total += arr[end];
      end++;
    }
    // if current window adds up to at least the sum given then shrink window
    else if (total >= num) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    }
    // current total is less than required and we have reached end
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
