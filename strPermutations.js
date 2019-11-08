/*

Given a string, return an array of all the permutations of that string. The permutations of the string should be the same length as the original string and (use each letter in the string once) but do not need to be actual words.

The array that is returned should only contain unique values and its elements should be in alphabetical order.

stringPermutations('one');
// should return  [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one']
stringPermutations('app');
// should return  [ 'app','pap','ppa']
stringPermutations('nn'); //should return  [ 'nn' ]
*/
// Recursive Approach

function strPermutationsRecur(str) {
  // base case
  if (str.length === 1) return [str];

  const results = [];

  let i = 0;
  while (i < str.length) {
    // grab first letter of string
    const letter = str[i];
    // get other letters
    const otherLetters = str.slice(0, i) + str.slice(i + 1);
    // get permutations of other letters
    const perms = strPermutationsRecur(otherLetters);
    // attach letter to start of other permutations
    perms.forEach(perm => results.push(letter + perm));
    // go through any remaining letters, avoid duplicates at same callstack level
    while (str[i] === letter) i++;
  }
  return results.sort();
}

// Iterative approach
// Time Complexity
// O(n!) time

// Space Complexity
// O(n!) space

function strPermutationsIter(str) {
  let results = [];
  let letters = str.split("");
  // add first letter (as an array) into results
  results.push([letters.shift()]);

  while (letters.length) {
    let currLetter = letters.shift();
    let tempResults = [];

    results.forEach(function(currResult) {
      for (let i = 0; i <= currResult.length; i++) {
        // make a copy so we can modify
        let tmp = currResult.slice();
        // insert letter into current position at i
        tmp.splice(i, 0, currLetter);
        tempResults.push(tmp);
      }
    });
    // overwrite previous results
    results = tempResults;
  }
  return (
    results
      .map(perm => perm.join(""))
      // filter out non-unique perms, only keep first occurence
      .filter((perm, index, self) => self.indexOf(perm) === index)
      .sort()
  );
}
