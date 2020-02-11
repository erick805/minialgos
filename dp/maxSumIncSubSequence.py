'''
Given an non-empty array of integers, write a function that returns an array of two elements.
The first element in the return array is the maximum strictly increasing sub sequence sum within our
input. The second element in the return array is the increasing sub sequence that sums up to the first
element. A sub sequence is defined as a set of numbers that are not neccesarily adjacent but are in the
same order as they appear in our input array.

Input: array = [10,20,50,70,30,40]
Output: [130, [10,50,70]]
'''


def maxSumIncSubSequence(array):
    sequences = [None for num in array]
    sums = array[:]
    maxSumIdx = 0

    for i in range(len(array)):
        currentNum = array[i]
        for j in range(0, i):
            otherNum = array[j]
            if otherNum < currentNum and sums[j] + currentNum >= sums[i]:
                sums[i] = sums[j] + currentNum
                sequences[i] = j
        if sums[i] >= sums[maxSumIdx]:
            maxSumIdx = i

    return [sums[maxSumIdx], buildIncSequence(array, sequences, maxSumIdx)]


def buildIncSequence(array, sequences, currentIdx):
    sequence = []
    while currentIdx is not None:
        sequence.append(array[currentIdx])
        currentIdx = sequences[currentIdx]
    return list(reversed(sequence))
