'''
You are given an array of integers and an integer. Write a function that moves all instances of that integer in the
array to the end of the array. The function should perform this in place and does not need to maintain the order of
the other integers.

Input: array = [2,1,2,2,2,3,4,2], toMove = 2
Output: [1,3,4,2,2,2,2,2] (the numbers 1,3 and 4 could be ordered differently)
'''


def moveElementToEnd(array, toMove):
    beg = 0
    end = len(array) - 1

    while beg < end:
        while beg < end and array[end] == toMove:
            end -= 1
        if array[beg] == toMove:
            array[beg], array[end] = array[end], array[beg]
        beg += 1

    return array
