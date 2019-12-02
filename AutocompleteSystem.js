/*
Design a search autocomplete system for a search engine. Users may input a sentence (at least one word and end with a special character '#'). For each character they type except "#", you need to return the top 3 historical hot sentences that have prefix the same as the part of sentence already typed. Here are the specific rules:

1. The hot degree for a sentence is defined as the number of times a user typed the exactly same sentence before.

2. The returned top 3 hot sentences should be sorted by hot degree (The first is the hottest one).

3. If several sentences have the same degree of hot, you need to use ASCII-code order (smaller one appears first).

4. If less than 3 hot sentences exist, then just return as many as you can.

5. When the input is a special character, it means the sentence ends, and in this case, you need to return an empty list.

Your job is to implement the following functions:

The constructor function:

AutocompleteSystem(String[] sentences, int[] times): This is the constructor. The input is historical data. Sentences is a string array consists of previously typed sentences. Times is the corresponding times a sentence has been typed. Your system should record these historical data.

Now, the user wants to input a new sentence. The following function will provide the next character the user types:

List<String> input(char c): The input c is the next character typed by the user. The character will only be lower-case letters ('a' to 'z'), blank space (' ') or a special character ('#'). Also, the previously typed sentence should be recorded in your system. The output will be the top 3 historical hot sentences that have prefix the same as the part of sentence already typed.

Example:
Operation: AutocompleteSystem(["i love you", "island","ironman", "i love leetcode"], [5,3,2,2])
The system have already tracked down the following sentences and their corresponding times:
"i love you" : 5 times
"island" : 3 times
"ironman" : 2 times
"i love leetcode" : 2 times
Now, the user begins another search:

Operation: input('i')
Output: ["i love you", "island","i love leetcode"]
Explanation:
There are four sentences that have prefix "i". Among them, "ironman" and "i love leetcode" have same hot degree. Since ' ' has ASCII code 32 and 'r' has ASCII code 114, "i love leetcode" should be in front of "ironman". Also we only need to output top 3 hot sentences, so "ironman" will be ignored.

Operation: input(' ')
Output: ["i love you","i love leetcode"]
Explanation:
There are only two sentences that have prefix "i ".

Operation: input('a')
Output: []
Explanation:
There are no sentences that have prefix "i a".

Operation: input('#')
Output: []
Explanation:
The user finished the input, the sentence "i a" should be saved as a historical sentence in system. And the following input will be counted as a new search.

Note:

The input sentence will always start with a letter and end with '#', and only one blank space will exist between two words.
The number of complete sentences that to be searched won't exceed 100. The length of each sentence including those in the historical data won't exceed 100.
*/

// First character indexing approach
const AutocompleteSystem = function(sentences, times) {
  // create a hashmap of letters and object sentence frequency relationships
  this.searchHistory = {};
  "abcdefghijklmnopqrstuvwxyz".split("").forEach(char => {
    this.searchHistory[char] = {};
  });
  // initiate variables
  this.inputStr = "";
  this.MAX_OUTPUT = 3;
  // loop through our frequency and populate our search history with corresponding character and sentence frequency
  for (let i = 0; i < times.length; i++) {
    const sentence = sentences[i];
    this.searchHistory[sentence[0]][sentence] = times[i];
  }
};

AutocompleteSystem.prototype.input = function(char) {
  // if our char is # grab the firstchar and if inputStr doesn't exist set freq to zero
  if (char === "#") {
    const firstChar = this.inputStr[0];
    if (!this.searchHistory[firstChar][this.inputStr]) {
      this.searchHistory[firstChar][this.inputStr] = 0;
    }
    // save into our search history
    this.searchHistory[firstChar][this.inputStr]++;
    this.inputStr = "";
    return [];
  }
  // else it is a valid character
  this.inputStr += char;
  // grab the first character
  const firstChar = this.inputStr[0];
  // grab only the filtered sentences that starts with the current input string
  const filtered = Object.keys(this.searchHistory[firstChar]).filter(
    sentence => {
      return sentence.startsWith(this.inputStr);
    }
  );

  filtered.sort((a, b) => {
    const aFreq = this.searchHistory[firstChar][a];
    const bFreq = this.searchHistory[firstChar][b];
    // sort by highest frequency, if they are the same freq return the less unicode of the two.
    return aFreq !== bFreq ? bFreq - aFreq : a > b ? 1 : -1;
  });
  // only return the top 3
  return filtered.slice(0, this.MAX_OUTPUT);
};
