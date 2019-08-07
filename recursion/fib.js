// write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequernce.

// (4) => 3
// (10) => 55
// (28) => 317811

function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}
