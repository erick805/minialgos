/*
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

1. Only one letter can be changed at a time.
2. Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

Note:
- Return 0 if there is no such transformation sequence.
- All words have the same length.
- All words contain only lowercase alphabetic characters.
- You may assume beginWord and endWord are non-empty and are not the same.

Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
*/

const transformationLength = (begWord, endWord, wordList) => {
  const dict = new Set(wordList);
  // if our set does not have the final end word - we can't reach it - return zero
  if (!dict.has(endWord)) return 0;

  let listLen = 1;
  let queue = [begWord];
  const seen = new Set(queue);

  // BFS
  while (queue.length) {
    const next = [];
    for (let word of queue) {
      if (word === endWord) return listLen;

      const letters = word.split("");

      for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < 26; j++) {
          letters[i] = String.fromCharCode(97 + j);
          let temp = letters.join("");
          // if we haven't seen it yet and it is a word within our list, add it
          if (!seen.has(temp) && dict.has(temp)) {
            next.push(temp);
            seen.add(temp);
          }
          // reset it back
          letters[i] = word[i];
        }
      }
    }
    // move to next value - increment length by one
    queue = next;
    listLen++;
  }
  // if we never enter our loop - we don't have any transformations
  return 0;
};
