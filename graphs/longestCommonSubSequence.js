/*
Implement a function that takes in two strings of arbitary length and return the longest common subsequence
based off the two strings. A subsequence is defined as a group of values or in this case characters that appear
sequentially after one another with no importance to their actual position in the string. In other words,
characters do not have to appear consecutively in order to form a sequence.
Assume there is only one longest common subsequence.

Input: str1 = "AMBHCD", str2 = "ABYCMMD"
Output: ["A", "B", "C", "D"]
*/

const longestCommonSubSequence = (str1, str2) => {
  const lcs = [];
  for (let i = 0; i < str2.length + 1; i++) {
    const row = [];
    for (let j = 0; j < str1.length + 1; j++) {
      const entry = new Array(4);
      entry[1] = 0;
      row.push(entry);
    }
    lcs.push(row);
  }

  for (let r = 1; r < str2.length + 1; r++) {
    for (let c = 1; c < str1.length + 1; c++) {
      if (str2[r - 1] === str1[c - 1]) {
        lcs[r][c] = [str2[r - 1], lcs[r - 1][c - 1][1] + 1, r - 1, c - 1];
      } else {
        if (lcs[r - 1][c][1] > lcs[r][c - 1][1]) {
          lcs[r][c] = [null, lcs[r - 1][c][1], r - 1, c];
        } else {
          lcs[r][c] = [null, lcs[r][c - 1][1], r, c - 1];
        }
      }
    }
  }
  return buildSequence(lcs);
};

const buildSequence = lcs => {
  const sequence = [];
  let i = lcs.length - 1;
  let j = lcs[0].length - 1;

  while (i !== 0 && j !== 0) {
    let current = lcs[i][j];
    if (current[0]) {
      sequence.unshift(current[0]);
    }
    i = current[2];
    j = current[3];
  }
  return sequence;
};
