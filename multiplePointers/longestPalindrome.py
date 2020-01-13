'''
Write a function that, given a string, returns its longest palindromic substring. A palindrome is defined as a string
that is written the same forward and backward. Assume that there will only be one longest palindromic substring.

Input: "abaxyzzyxf
Output: "xyzzyx"
'''


def longestPalindrome(string):
    currentLongest = [0, 1]

    for i in range(1, len(string)):
        odd = getLongestPalindrome(
            string, i - 1, i + 1)  # with letter as center

        # without letter as center
        even = getLongestPalindrome(string, i - 1, i)

        longest = max(odd, even, key=lambda x: x[1] - x[0])
        currentLongest = max(longest, currentLongest,
                             key=lambda x: x[1] - x[0])

    return string[currentLongest[0]: currentLongest[1]]
