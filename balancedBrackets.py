'''
Write a function that takes in a string made up of brackets("(","[",""{",")","]","}") and other optional characters.
The function should return a boolean representing whether or not the string is balanced in regards to brackets.
A string is said to be balanced if it has as many opening brackets of a given type as it has closing brackets of that
type and if no bracket is unmatched. Note that a closing bracket cannot match a corresponding opening bracket that
comes after it. Similarly, brackets cannot overlap each other as in "[(])".

Input: "([])(){}(())()()"
Output: True
'''


# O(n) time | O(n) space
def balancedBrackets(string):
    openingBrackets = "([{"
    closingBrackets = ")]}"
    matchingBrackets = {")": "(", "]": "[", "}": "{"}
    stack = []

    for char in string:
        if char in openingBrackets:
            stack.append(char)
        elif char in closingBrackets:
            if len(stack) == 0:
                return False

            if stack[-1] == matchingBrackets[char]:
                stack.pop()
            else:
                return False

    return len(stack) == 0
