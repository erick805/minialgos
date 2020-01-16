'''
Write a function that takes in an array of integers at least 2. The function should return an array of the starting
and ending indices of the smallest subarray in the input array that needs to be sorted in place in order for the
entire input array to be sorted. If the input array is already sorted, the function should return [-1,-1].

Input: [1,2,4,7,10,11,7,12,6,7,16,18,19]
Output: [3,9]
'''


def subarraySort(array):
    minimumUnsorted = float("inf")
    maximumUnsorted = float("-inf")

    for i in range(len(array)):
        num = array[i]
        if isUnsorted(i, num, array):
            minimumUnsorted = min(minimumUnsorted, num)
            maximumUnsorted = max(maximumUnsorted, num)

    if minimumUnsorted == float("inf"):
        return [-1, -1]

    leftUnsortedIdx = 0
    while array[leftUnsortedIdx] <= minimumUnsorted:
        leftUnsortedIdx += 1

    rightUnsortedIdx = len(array) - 1
    while maximumUnsorted <= array[rightUnsortedIdx]:
        rightUnsortedIdx -= 1

    return [leftUnsortedIdx, rightUnsortedIdx]


def isUnsorted(idx, num, array):
    if idx == 0:
        return num > array[idx + 1]
    if idx == len(array) - 1:
        return num < array[idx - 1]

    return num > array[idx + 1] or num < array[idx - 1]
