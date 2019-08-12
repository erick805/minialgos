// Radix Sort

// Radix sort is a special sorting algorithm that works on lists of numbers.
// It never makes comparisons between elements.
// It exploits the fact that information about the size of a number is encoded in the number of digits.
// More digits means a bigger number.

// Radix Sort Helpers

// In order to implement radix sort, it's helpful to build a few helper functions first:

// getDigit(num, place) - returns the digit in num at the given place value.

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// digiCount(num) - returns the number of digits in num.
