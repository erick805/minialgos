// Write a function maxSubSum that takes in an array of mixed integers, n number of consecutive numbers to equal sum and returns the largest sum possible of n consecutive numbers.

// return null otherwise

// Ex 1) ([],4) => return null
//       ([0,4,2,6,8], 2) => 14
//       ([4,3,4,-2,0,5,3,2], 4) => 10

// BRUTE FORCE APPROACH

// TIME COMPLEXITY
// O(n)^2 time

// SPACE COMPLEXITY
// O(1) space

function maxSubSum(arr, num) {
  if (num > arr.length) return null;

  let max = -Infinity;
  let temp;

  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// second approach quick sort and then grab last nth elements.

// TIME COMPLEXITY
// O(n logn) time

// SPACE COMPLEXITY
// O(log(n))

function maxSubSum(arr, num) {
  if (num > arr.length) return null;

  arr.sort((a, b) => a - b);

  let sum = 0;

  for (let i = arr.length - num; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// sliding window solution

// TIME COMPLEXITY
// O(n) time

// SPACE COMPLEXITY
// O(1) space

function maxSubSum(arr, num) {
  if (num > arr.length) return null;
  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}
