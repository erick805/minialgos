/*
A string s represents a list of words.

Each letter in the word has 1 or more options. If there is one option, the letter is represented as is. If there is more than option, then curly braces delimit the options. For example, "{a,b,c}d{e,f}" represents the list ["ade", "adf", "bde", "bdf", "cde", "cdf"].

Return all the words that can be formed in this manner, in lexicographical order.

Example 1:
Input: "{a,b}c{d,e}f"
Output: ["acdf", "acef", "bcdf", "bcef"]

Example 2:

Input: "abcd"
Output: ["abcd"]

Note:

1. 1 <= S.length <= 50
2. There are no nested curly brackets.
3. All characters inside a pair of consecutive opening and ending curly brackets are different.
*/

// Create sorted array of options and do a dfs on each option
const expand = S => {
  const options = createOptions(S);

  return dfs(options);
};

const createOptions = optionStr => {
  let start = 0;
  const options = [];

  for (let i = 0; i < optionStr.length; i++) {
    if (optionStr[i] === "{" || optionStr[i] === "}") {
      if (i > start) {
        options.push(optionStr.substring(start, i));
      }
      start = i + 1;
    }
  }

  if (start < optionStr.length) options.push(optionStr.substring(start));
  // sort into alphabetical order
  return options.map(str => str.split(",").sort());
};

const dfs = (arr, index = 0, selected = "", output = []) => {
  if (index >= arr.length) {
    output.push(selected);
    return output;
  }

  for (const letter of arr[index]) {
    dfs(arr, index + 1, selected + letter, output);
  }

  return output;
};
