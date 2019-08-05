// Write a function called are there duplicates which accepts a varied amount of arguments.
// Check whether there are any duplicates among the arguments passed in.

// Ex 1) (1,2,3) => false
//       (1,2,2) => true
//       ('a','b','c','a') => true

// frequency count solution

// TIME COMPLEXITY
// O(n) time

// SPACE COMPLEXITY
// O(n) space

function areThereDuplicates() {
  let count = {};
  for (let val in arguments) {
    let value = arguments[val];
    if (!count[value]) count[value] = 1;
    else count[value]++;
  }

  for (let key in count) {
    if (count[key] > 1) return true;
  }
  return false;
}

// multiple pointers solution

// TIME COMPLEXITY
// O(n logn) time

// SPACE COMPLEXITY
// O(1) space

function areThereDuplicates(...args) {
  args.sort((a, b) => a > b);

  let left = 0;
  let right = 1;

  while (right < args.length) {
    if (args[left] === args[right]) return true;
    left++;
    right++;
  }

  return false;
}
