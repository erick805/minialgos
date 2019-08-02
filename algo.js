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
  for (let i = 0; i < str.length; i++) {
    if (!"abcdefghijklmnopqrstuvwxyz0123456789".includes(str[i])) {
      continue;
    }
    if (!count[str[i].toLowerCase()]) {
      count[str[i].toLowerCase()] = 1;
    } else {
      count[str[i].toLowerCase()]++;
    }
  }
  return count;
}
