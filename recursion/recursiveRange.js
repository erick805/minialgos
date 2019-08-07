// write a function recursive range which accepts a number and adds up all the numbers from 0 to the number passed to function.

// (6) => 21
// (10) => 55

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}
