// write a function that takes in a num and outputs the factorial of num.

// (1) => 1
// (2) => 2
// (4) => 24

function factorial(num) {
  if (num <= 1) return 1;

  return num * factorial(num - 1);
}
