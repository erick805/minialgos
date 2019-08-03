// CHARACTER COUNT

// search for characters in string and return a count back
// input = 'abc' output = {a:1, b:1, c:1}
// anything that is not alphanumeric does not count
// input = 'hello im here.' output = {h:2,e:3, l:2, o:1, i:1, m:1, r:1}
// not case sensitive only spits out lower case as keys in object.

// TIME COMPLEXITY
// O(n) time

// SPACE COMPLEXITY
// O(n) space

function charCount(str) {
  let count = {};
  // for (let i = 0; i < str.length; i++) {

  // 1) refactored to for of loop
  for (let char of str) {
    // char = char.toLowerCase();
    // if (!"abcdefghijklmnopqrstuvwxyz0123456789".includes(char)) {
    //   continue;
    // }
    // 2) refactored to functional and compare with char codes
    if (isAlphaNemuric(char)) {
      count[char] = ++count[char] || 1;
    }
    // if (!count[char]) {
    //   count[char] = 1;
    // } else {
    //   count[char]++;
    // }
  }
  return count;
}

function isAlphaNemuric(char) {
  let code = char.charCodeAt(0);

  if (
    // numeric (0 - 9)
    !(code > 47 && code < 58) &&
    // upper alpha (A - Z)
    !(code > 64 && code < 91) &&
    // lower alpha (a - z)
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}
