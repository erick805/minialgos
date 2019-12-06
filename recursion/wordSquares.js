/*
Given a set of words (without duplicates), find all word squares you can build from them.

A sequence of words forms a valid word square if the kth row and column read the exact same thing, where 0 <= k <= max(numRows, numColumns).

For example, the word sequence ["ball", "area", "lead", "lady"] forms a word square because each word reads the same both horizontally and vertically.

b a l l
a r e a
l e a d
l a d y

Note:

1. There are at least 1 and at most 1000 words.
2. All words will have the exact same length.
3. Word length is at least 1 and at most 5.
4. Each word contains only lowercase English alphabet a-z.

Input:
["area","lead","wall","lady","ball"]

Output:
[
  [ "wall",
    "area",
    "lead",
    "lady"
  ],
  [ "ball",
    "area",
    "lead",
    "lady"
  ]
]

Explanation:
The output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).

Example 2:

Input:
["abat","baba","atan","atal"]

Output:
[
  [ "baba",
    "abat",
    "baba",
    "atan"
  ],
  [ "baba",
    "abat",
    "baba",
    "atal"
  ]
]
*/

class Trie {
  constructor() {
    this.isWord = false;
    this.children = new Map();
  }

  add(word) {
    let cur = this;
    for (let i = 0; i < word.length; i++) {
      if (!cur.children.has(word[i])) {
        cur.children.set(word[i], new Trie());
      }
      cur = cur.children.get(word[i]);
    }
    cur.isWord = true;
  }

  startWith(prefix) {
    let cur = this;
    for (let i = 0; i < prefix.length; i++) {
      if (cur.children.has(prefix[i])) {
        cur = cur.children.get(prefix[i]);
      } else {
        return [];
      }
    }

    let res = [];
    const findWords = (res, cur, str) => {
      if (!cur.isWord) {
        for (let [key, val] of cur.children) {
          findWords(res, val, str + key);
        }
      } else {
        res.push(str);
      }
    };
    findWords(res, cur, prefix);
    return res;
  }
}

const wordSquares = words => {
  const res = [];
  const trie = new Trie();

  for (let word of words) {
    trie.add(word);
  }

  findWordSquare(res, [], trie);
  return res;
};

const findWordSquare = (result, temp, trie) => {
  if (temp.length > 0 && temp.length === temp[0].length) {
    result.push(temp);
    return;
  }

  let prefix = "";
  let j = temp.length;

  for (let i = 0; i < temp.length; i++) {
    prefix += temp[i][j];
  }

  let startWith = trie.startWith(prefix);

  for (let word of startWith) {
    findWordSquare(result, temp.concat([word]), trie);
  }
};
