// Write a function that takes in an array of sorted integers and returns a count of the amount of unique values.
// Ex 1) ([0,0,1,1,1,]) => 2
//       ([]) => 0
//       ([-3,-2,-1]) => 3

// TIME COMPLEXITY
// O(n) time

// SPACE COMPLEXITY
// O(1) space

function countUniqueValues(arrOfNums) {
  if (arrOfNums.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arrOfNums.length; j++) {
    if (arrOfNums[i] !== arrOfNums[j]) {
      i++;
      arrOfNums[i] = arrOfNums[j];
    }
  }

  return i + 1;
}
