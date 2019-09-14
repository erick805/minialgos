// write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequernce.

// (4) => 3
// (10) => 55
// (28) => 317811

// fib iterative
function fib(num) {
  let fibArr = [0, 1];

  for (let i = 2; i <= num; i++) {
    fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
  }
  return fibArr[num];
}
// fib recursive
function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}
