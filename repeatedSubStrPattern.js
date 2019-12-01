/*
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

Example 1:

Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.

Example 2:

Input: "aba"
Output: False

Example 3:

Input: "abcabcabcabc"
Output: True
Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
*/

const repeatedSubStrPattern = str => {
  // add a copy of the string to itself and cut off head and tail.
  // if string is inside the new string, it can be constructed with copies of it's substrings
  return str
    .concat(str.slice())
    .slice(1, -1)
    .includes(str);
};
