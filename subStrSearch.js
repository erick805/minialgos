// write a function that checks whether or not a substring exists in a string, return the number of matched strings.

// ('hello my name is bob', 'bob') => 1
// ('123', -4) => 0

// TIME COMPLEXITY
// O(n * m)

// SPACE COMPLEXITY
// O(1)

function subStrSearch(str, subStr) {
  let matched = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < subStr.length; j++) {
      if (subStr[j] !== str[i + j]) break;
      if (j === subStr.length - 1) matched++;
    }
  }
  return matched;
}
