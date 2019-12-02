/*
Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, the key might get long pressed and the character will be typed 1 or more times.

You examine the typed characters of the keyboard.  Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

Example 1:

Input: name = "alex", typed = "aaleex"
Output: true
Explanation: 'a' and 'e' in 'alex' were long pressed.

Example 2:

Input: name = "saeed", typed = "ssaaedd"
Output: false
Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.

Example 3:

Input: name = "leelee", typed = "lleeelee"
Output: true

Example 4:

Input: name = "laiden", typed = "laiden"
Output: true
Explanation: It's not necessary to long press any character.
*/

const isLongPressedName = (name, typed) => {
  // initiate index for name and name count
  let index = 0;
  let letter;
  let letterCount;
  // initiate index for typed and typed count
  let typedIndex = 0;
  let typedCount;
  // linear search through our names string
  while (index < name.length) {
    // find the first letter of names string
    letter = name[index];
    // initiate current letter count for letter
    letterCount = 1;
    // increment to next letter
    index++;
    // if we have a duplicate letter, increment letter count and index
    while (name[index] === letter) {
      letterCount++;
      index++;
    }
    // initiate typedCount for current letter in typed
    typedCount = 0;
    // as long as we can loop our typed string and our current letter in type is equal to name letter
    // increment typed count for typed letter and index
    while (typedIndex < typed.length && typed[typedIndex] === letter) {
      typedCount++;
      typedIndex++;
    }
    // if current letter count is bigger than current typed count we know this is not long pressed and typed is missing a unique letter
    if (letterCount > typedCount) return false;
  }
  // since we are incrementing index and typed index if we complete the loop and our pointers reach the end we can return true
  return index === name.length && typedIndex === typed.length;
};
