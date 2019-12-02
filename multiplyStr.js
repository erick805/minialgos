/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"

Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"

Note:

1. The length of both num1 and num2 is < 110.
2. Both num1 and num2 contain only digits 0-9.
3. Both num1 and num2 do not contain any leading zero, except the number 0 itself.
4. You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

const multiplyStr = (num1, num2) => {
  // if any of our num is zero just return zero
  if (num1 === "0" || num2 === "0") return "0";
  // initiate array to keep track of current sums and their respective place
  const sum = [];

  // loop through our num strings and populate our sum array with updated sums and their respective place
  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      if (!sum[i + j]) {
        sum[i + j] = num1[i] * num2[j];
      } else {
        sum[i + j] += num1[i] * num2[j];
      }
    }
  }
  // reverse in place now ones and tens are in beginning of array
  sum.reverse();

  //loop through our temp sum array
  for (let i = 0; i < sum.length; i++) {
    // if our current number is higher than 9
    if (sum[i] > 9) {
      // and our next character is undefined, then this is the front of number
      if (sum[i + 1] === undefined) {
        // set next digit of return number as the higher digit of current sum
        sum[i + 1] = Math.floor(sum[i] / 10);
      } else {
        // there is a number, add onto the digit, so it can carry over
        sum[i + 1] += Math.floor(sum[i] / 10);
      }
      // modulo ten to get the current last digit
      sum[i] = sum[i] % 10;
    }
  }
  // return it back reversed and joined as a string
  return sum.reverse().join("");
};
