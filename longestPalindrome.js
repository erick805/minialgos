/*
Given a string s, find the longest palindromic substring in s. You may assume the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:

Input: "cbbd"
Output: "bb"
*/

const longestPalindrome = s => {
  if (!s) return "";

  let maxPalindrome = "";

  for (let i = 0; i < s.length; i++) {
    // check for cases if only one letter or start case of two duplicate letter
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j;

      // if left is within bounds and our pointers are equal than expand
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      // if our current substring's length is bigger than maxPalindrome, set substring as new maxPalindrome
      if (right - left - 1 > maxPalindrome.length) {
        // because we decremented we have to add one to left
        maxPalindrome = s.substring(left + 1, right);
      }
    }
  }

  return maxPalindrome;
};
