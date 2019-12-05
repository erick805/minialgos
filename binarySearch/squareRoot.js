/*
Re-implement the square root function given a number x and a number n calculate the nth root of x within an error of 0.001

i.e. suppose the real root is y, the solution must satisfy |y-root(x,n)| < 0.001.

Examples:

input:  x = 7, n = 3
output: 1.913

input:  x = 9, n = 2
output: 3
*/

const squareRoot = (x, n) => {
  // if our base is zero, the square root is zero
  if (x === 0) return 0;
  // intiate our lower and upperbounds
  let lowerBound = 0;
  // upperbound can't be less than one
  let upperBound = Math.max(1, x);

  let approxRoot = (upperBound + lowerBound) / 2;
  // as long as their is a window - traverse
  while (approxRoot - lowerBound >= 0.001) {
    if (Math.pow(approxRoot, n) > x) upperBound = approxRoot;
    else if (Math.pow(approxRoot, n) < x) lowerBound = approxRoot;
    else break;
    approxRoot = (upperBound + lowerBound) / 2;
  }

  return approxRoot;
};
