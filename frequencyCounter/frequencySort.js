/*
Given a string, sort it in decreasing order based on the frequency of characters

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
*/

/*
Time Complexity: O(nlogn)
Space Complexity: O(n)
*/

const frequencySort = str => {
  if (str.length < 2) return str;

  const letterFreq = {};

  for (let letter of str) {
    if (!letterFreq[letter]) letterFreq[letter] = 1;
    else letterFreq[letter]++;
  }
  let result = "";
  Object.keys(letterFreq)
    .sort((a, b) => letterFreq[b] - letterFreq[a])
    .forEach(letter => {
      for (let i = 0; i < letterFreq[letter]; i++) {
        result += letter;
      }
    });

  return result;
};
