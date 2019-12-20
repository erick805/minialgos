/*
Given string S and T, find the minimum (contiguous) substring W of S, so that T is a subsequence of W.

If there is no such window in S that covers all characters in T, return the empty string "". If there are multiple such minimum-length windows, return the one with the left-most starting index.

Example 1:

  Input:
  S = "abcdebdde", T = "bde"
  Output: "bcde"
  Explanation:
  "bcde" is the answer because it occurs before "bdde" which has the same length.
  "deb" is not a smaller window because the elements of T in the window must occur in order.

Note:
  1. All the strings in the input will only contain lowercase letters.
  2. The length of S will be in the range [1, 2000].
  3. The length of T will be in the range [1, 100].
*/

// 2 pointers + sliding window

const minWindow = (S, T) => {
  let sIdx = 0;
  let tIdx = 0;
  const s = S.length;
  const t = T.length;

  let subStr = "";
  // iterate through entire string
  while (sIdx < s) {
    if (S[sIdx] === T[tIdx]) {
      tIdx++;
      if (tIdx === t) {
        const end = sIdx + 1; // capture end of last matched index
        tIdx--; // move pointer back to last matched char

        // reset t and s to beg
        while (tIdx >= 0) {
          if (S[sIdx] === T[tIdx]) tIdx--;
          sIdx--;
        }
        sIdx++; // reset s index back to first matching index

        tIdx++; // reset t index back to 0

        // reassign shortest sub string
        if (!subStr || end - sIdx < subStr.length) {
          subStr = S.substring(sIdx, end);
        }
      }
    }
    sIdx++; // iterate to next letter
  }

  return !subStr ? "" : subStr;
};
