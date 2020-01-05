'''
Write a function that takes in a non-empty array of integers and returns the maximum sum that can be obtained by
summing up all the numbers in a non-empty subarray of the input array. A subarray must only contain adjacent numbers.

Input: [3,5,-9,1,3,-2,3,4,7,2,-9,6,3,1,-5,4]
Output: 19 [1,3,-2,3,4,7,2,-9,6,3,1]
'''

# O(n) time | O(1) space


def kadanesAlgorithm(array):
    maxEndingHere = array[0]
    maxSoFar = array[0]

    for i in range(1, len(array)):
        num = array[i]
        maxEndingHere = max(num, num + maxEndingHere)
        maxSoFar = max(maxSoFar, maxEndingHere)

    return maxSoFar
