/*
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
*/

// Time Complexity: O(n + m)
// Space Complexity: O(n + m)

const minWindow = (str, targetStr) => {
  if (!str.length) return "";
  // store all our keys and frequences from target string
  const dict = {};
  for (let letter of targetStr) {
    dict[letter] = dict[letter] ? ++dict[letter] : 1;
  }
  let subStr = "";
  let left = 0;
  let right = -1;
  let count = Object.keys(dict).length;

  while (right < str.length) {
    // shrink window because target string is within left and right
    if (count === 0) {
      // if there is no subString or current length is less than substring set new sub string
      if (!subStr || right - left + 1 < subStr.length) {
        subStr = str.slice(left, right + 1);
      }
      // get rid of current letter and then move left
      if (dict[str[left]] !== undefined) {
        dict[str[left]]++;
      }

      if (dict[str[left]] > 0) {
        count++;
      }
      left++;
    } else {
      // expand window because target string is not within left and right
      right++;
      if (dict[str[right]] !== undefined) {
        dict[str[right]]--;
      }
      if (dict[str[right]] === 0) {
        count--;
      }
    }
  }

  return subStr;
};
