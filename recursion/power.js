// write a function that takes in a base and exponent and returns the base to the exponent.
// ignore negative numbers

// Ex (2,0) => 1
//    (2,2) => 4
//    (2,4) => 16

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, --exp);
}
