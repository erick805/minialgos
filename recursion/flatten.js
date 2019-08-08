// write a recursive function called flatten that returns a flattened array of the input array.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

function flatten(oldArr) {
  let flatArr = [];
  for (let val of oldArr) {
    if (Array.isArray(val)) {
      flatArr = flatArr.concat(flatten(val));
    } else {
      flatArr.push(val);
    }
  }
  return flatArr;
}
