/*
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
*/

// Time Complexity: O(str.length)
// Space Complexity: O(targetStr.length)

const minWindowSubStr = (str, targetStr) => {
  if (!str.length) return "";

  const dict = {};

  for (const letter of targetStr) {
    dict[letter] = dict[letter]++ || 1;
  }

  let subStr = "";
  let left = 0;
  let right = -1;
  let count = Object.keys(dict).length;

  while (right < str.length) {
    if (count === 0) {
      if (!subStr || right - left + 1 < subStr.length) {
        subStr = str.slice(left, right + 1);
      }
      // shrink window
      if (dict[str[left]] !== undefined) dict[str[left]]++;
      if (dict[str[left]] > 0) count++;
      left++;
    } else {
      // expand window because target string is not within left and right
      right++;
      if (dict[str[right]] !== undefined) dict[str[right]]--;
      if (dict[str[right]] === 0) count--;
    }
  }

  return subStr;
};
