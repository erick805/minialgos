'''
Write a function that takes in an array of integers and returns an array of minimum length 2 representing the
longest range of numbers contained in that array. The first number in the output array should be the first
number in the range while the second number should be the last number in the range.

A range of numbers is defined as a set of numbers that come right after each other in the set of original
integers. For instance, the output array [1,3] represents the range [1,2,3], which is a range of length 3.

Note that numbers do not need to be ordered or adjacent in the array in order to form a range.
Assume there will only be one longest range.

Input: [1,11,3,0,15,5,2,4,10,7,12,6]
Output: [0,7]
'''


def longestRange(array):
    largestRange = []
    longestLen = 0
    visited = {}

    for num in array:
        visited[num] = False

    for num in array:
        if visited[num]:
            continue
        visited[num] = True
        currentLen = 1
        left = num - 1
        right = num + 1

        while left in visited:
            currentLen += 1
            visited[left] = True
            left -= 1

        while right in visited:
            currentLen += 1
            visited[right] = True
            right += 1

        if currentLen > longestLen:
            longestLen = currentLen
            largestRange = [left + 1, right - 1]

    return largestRange
