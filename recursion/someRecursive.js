// write a recursive function which accepts an array and a callback. The function returns true if any single value in the array returns true. Otherwise returns false.

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, callback) {
  if (arr.length === 0) return false;

  while (arr.length) {
    if (callback(arr[0])) return true;
    else {
      arr = arr.slice(1);
    }
  }

  return false;
}
