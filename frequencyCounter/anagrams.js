// Write a function that takes in two strings and returns a boolean if both strings are anagrams of each other.
// Ex) ('','') => true
//     ('car', 'ra') => false
//     ('anagram, 'naagram') => true

// TIME COMPLEXITY
// O(n) time complexity

// SPACE COMPLEXITY
// O(1) space complexity

const anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let countOne = {};
  let countTwo = {};

  for (let val of str1) {
    if (!countOne[val]) countOne[val] = 1;
    else countOne[val]++;
  }

  for (let val of str2) {
    if (!countTwo[val]) countTwo[val] = 1;
    else countTwo[val]++;
  }

  for (let key in countOne) {
    if (!(key in countTwo)) return false;
    if (countTwo[key] !== countOne[key]) {
      return false;
    }
  }

  return true;
};

// more optimized O(n) time approach

const anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let count = {};

  for (let val of str1) {
    if (!count[val]) count[val] = 1;
    else count[val]++;
  }

  for (let val of str2) {
    if (!count[val]) return false;
    else count[val] -= 1;
  }

  return true;
};
