// Write a function called are there duplicates which accepts a varied amount of arguments.
// Check whether there are any duplicates among the arguments passed in.

// Ex 1) (1,2,3) => false
//       (1,2,2) => true
//       ('a','b','c','a') => true

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
