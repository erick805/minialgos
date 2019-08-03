// Write a function that accepts two arrays.
// The function should return true if every value of the array has its corresponding value squared in the second array. The frequency of values must be the same.

// TIME COMPLEXITY
// O(n) time complexity

// SPACE COMPLEXITY
// O(1) space complexity

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
