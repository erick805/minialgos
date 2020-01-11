'''
Implement a Min Heap class. The class should support insertion, removal(of the minimum/root value),
peeking(of the minimum/root value), as well as sifting a value up and down the heap and building the heap
from an input array. The heap should be represented in the form of an array.

Input: array = [48,12,24,7,8,-5,24,391,24,56,2,6,8,41]

buildHeap(array)
insert(76)
remove()
remove()
insert(87)

Output:

[-5,2,6,7,8,8,24,391,24,56,12,24,48,41]
[-5,2,6,7,8,8,24,391,24,56,12,24,48,41,76]
[2,6,7,24,8,8,24,391,76,56,12,24,48,41]
[6,7,8,24,8,24,24,391,76,56,12,41,48]
[6,7,8,24,8,24,24,391,76,56,12,41,48,87]
'''


class MinHeap:
    def __init__(self, array):
        self.heap = self.buildHeap(array)

    def buildHeap(self, array):
        firstParentIdx = (len(array) - 2) // 2
        for currentIdx in reversed(range(firstParentIdx + 1)):
            self.siftDown(currentIdx, len(array) - 1, array)

        return array

    def siftDown(self, currentIdx, endIdx, heap):
        childOneIdx = currentIdx * 2 + 1
        while childOneIdx <= endIdx:
            childTwoIdx = currentIdx * 2 + 2 if currentIdx * 2 + 2 <= endIdx else -1
            if childTwoIdx != -1 and heap[childTwoIdx] < heap[childOneIdx]:
                idxToSwap = childTwoIdx
            else:
                idxToSwap = childOneIdx
            if heap[idxToSwap] < heap[currentIdx]:
                self.swap(currentIdx, idxToSwap, heap)
                currentIdx = idxToSwap
                childOneIdx = currentIdx * 2 + 1
            else:
                return

    def swap(self, i, j, heap):
        heap[i], heap[j] = heap[j], heap[i]
