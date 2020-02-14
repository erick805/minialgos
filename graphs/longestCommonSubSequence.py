'''
Implement a function that takes in two strings of arbitary length and return the longest common subsequence
based off the two strings. A subsequence is defined as a group of values or in this case characters that appear
sequentially after one another with no importance to their actual position in the string. In other words,
characters do not have to appear consecutively in order to form a sequence.
Assume there is only one longest common subsequence.

Input: str1 = "AMBHCD", str2 = "ABYCMMD"
Output: ["A", "B", "C", "D"]
'''


# O(n * m) time | O(n * m) space
def longestCommonSubSequence(str1, str2):
    lcs = [[[None, 0, None, None]
            for x in range(len(str1) + 1)] for y in range(len(str2) + 1)]

    for r in range(1, len(str2) + 1):
        for c in range(1, len(str1) + 1):
            if str2[r - 1] == str1[c - 1]:
                lcs[r][c] = [str2[r - 1], lcs[r - 1]
                             [c - 1][1] + 1, r - 1, c - 1]
            else:
                if lcs[r - 1][c][1] > lcs[r][c - 1][1]:
                    lcs[r][c] = [None, lcs[r - 1][c][1], r - 1, c]
                else:
                    lcs[r][c] = [None, lcs[r][c - 1][1], r, c - 1]

    return buildSequence(lcs)


def buildSequence(lcs):
    sequence = []
    i = len(lcs) - 1
    j = len(lcs[0]) - 1

    while i != 0 and j != 0:
        current = lcs[i][j]
        if current[0] is not None:
            sequence.append(current[0])
        i = current[2]
        j = current[3]

    return list(reversed(sequence))
