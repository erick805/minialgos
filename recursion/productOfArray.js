// write a function which takes in an array and spits out the product of all the values in the array.
// if nothing in array return 1

// ([1,2,3]) => 6
// ([1,2,3,10]) => 60

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}
