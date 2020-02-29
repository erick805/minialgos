/*
Implement a document scanning function wordCountEngine, which receives a string document and returns a list of all unqiue words in it and their number of occurences, sorted by the number of occurences in a descending order. If two or more words have the same count, they should be sorted according to their order in the original sentence. Assume that all letters are in english alphabet. The function should be case-insentitive, so for instance, the words "Perfect" and "perfect" should be considered same word.

The engine should strip out punctuation (even in the middle of a word) and use whitespaces to seperate words.

Examples:

input:  document = "Practice makes perfect. you'll only
                    get Perfect by practice. just practice!"

output: [ ["practice", "3"], ["perfect", "2"],
          ["makes", "1"], ["youll", "1"], ["only", "1"],
          ["get", "1"], ["by", "1"], ["just", "1"] ]
*/

/*
Time Complexity: O(n * m)
Space Complexity: O(1)
*/

const wordCountEngine = document => {
  document = document.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newAlpha = "";

  for (let i = 0; i < document.length; i++) {
    if (alphabet.includes(document[i]) || document[i] === " ") {
      newAlpha += document[i];
    }
  }

  const wordFreq = {};
  newAlpha = newAlpha.split(" ");

  for (const word of newAlpha) {
    wordFreq[word] = ++wordFreq[word] || 1;
  }

  return Object.entries(wordFreq).sort((a, b) => b[1] - a[1]);
};
