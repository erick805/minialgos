// Write a function that accepts two arrays.
// The function should return true if every value of the array has its corresponding value squared in the second array. The frequency of values must be the same.

// TIME COMPLEXITY
// O(n) time complexity

// SPACE COMPLEXITY
// O(1) space complexity

// ORDER MATTERS

const sameArray = (arrOne, arrTwo) => {
  if (arrOne.length === 0 && arrTwo.length === 0) return true;
  if (arrOne.length !== arrTwo.length) {
    return false;
  }

  let pt1 = 0;
  let pt2 = 0;
  while (arrTwo[pt2] === arrOne[pt1] ** 2) {
    pt1++;
    pt2++;
    if (pt1 === arrOne.length && pt2 === arrTwo.length) return true;
  }
  return false;
};

// Brute force approach

// TIME COMPLEXITY
// O(n)^2 - time complexity

// SPACE COMPLEXITY
// O(1) - space complexity

// ORDER DOES NOT MATTER

const sameArray = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  let matchedNums = 0;
  for (let i = 0; i < arrOne.length; i++) {
    for (let j = 0; j < arrTwo.length; j++) {
      if (arrTwo[j] === arrOne[i] ** 2) matchedNums++;
    }
  }
  if (matchedNums === arrOne.length) return true;
  return false;
};

// Optimized Approach

// TIME COMPLEXITY
// O(n) - time complexity

// ORDER DOES NOT MATTER

const sameArray = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  const frequencyCounterOne = {};
  const frequencyCounterTwo = {};

  for (const val of arrOne) {
    frequencyCounterOne[val] = (frequencyCounterOne[val] || 0) + 1;
  }

  for (const val of arrTwo) {
    frequencyCounterTwo[val] = (frequencyCounterTwo[val] || 0) + 1;
  }

  for (const key in frequencyCounterOne) {
    if (!(key ** 2 in frequencyCounterTwo)) {
      return false;
    }
    if (frequencyCounterTwo[key ** 2] !== frequencyCounterOne[key])
      return false;
  }
  return true;
};
