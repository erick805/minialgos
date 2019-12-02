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
  let index = 0;
  let letter;
  let letterCount;
  let typedIndex = 0;
  let typedCount;

  while (index < name.length) {
    letter = name[index];
    letterCount = 1;
    index++;

    while (name[index] === letter) {
      letterCount++;
      index++;
    }
    typedCount = 0;

    while (typedIndex < typed.length && typed[typedIndex] === letter) {
      typedCount++;
      typedIndex++;
    }

    if (letterCount > typedCount) return false;
  }

  return index === name.length && typedIndex === typed.length;
};
