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

// O(name.length) time | O(1) space
const isLongPressedName = (name, typed) => {
  let idx = 0;
  let typedIdx = 0;

  while (idx < name.length) {
    const letter = name[idx];
    let letterCount = 1;
    idx++;

    while (name[idx] === letter) {
      letterCount++;
      idx++;
    }
    let typedCount = 0;

    while (typedIdx < typed.length && typed[typedIdx] === letter) {
      typedCount++;
      typedIdx++;
    }

    if (letterCount > typedCount) return false;
  }

  return typedIdx === typed.length;
};
