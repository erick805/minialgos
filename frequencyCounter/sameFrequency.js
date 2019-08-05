// Write a function called sameFrequency. Given two positive integers, find out if the two numers have the same frequency of digits
// return true if they do, otherwise return false.

// Ex 1) (182,218) => true
//       (34, 14) => false
//       (22, 222) => false

// TIME COMPLEXITY
// O(n) time

// SPACE COMPLEXITY
// O(n) space

function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();

  if (num1.length !== num2.length) return false;

  let count = {};

  for (let val of num1) {
    if (!(val in count)) {
      count[val] = 1;
    } else {
      count[val]++;
    }
  }

  for (let i = 0; i < num2.length; i++) {
    let num = num2[i];
    if (!(num in count)) return false;
    else count[num]--;
  }

  return true;
}
