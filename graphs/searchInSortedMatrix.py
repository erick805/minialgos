'''
You are given a two-dimensional array (matrix) of distinct integers where each row is sorted and each column is
also sorted. The matrix does not necessarily have the same height and width. You are also given a target number,
and you must write a function that returns an array of the row and column indices of the target number if it is
contained in the matrix and [-1,-1] if it is not contained in the matrix.

Input:
[
  [1,4,7,12,15,1000],
  [2,5,19,31,32,1001],
  [3,8,24,33,35,1002],
  [40,41,42,44,45,1003],
  [99,100,103,106,128,1004]
], 44

Output: [3,3]
'''


# O(n + m) time | O(1) space
def searchInSortedMatrix(matrix, target):
    row = 0
    col = len(matrix[0]) - 1

    while row < len(matrix) and col >= 0:
        if matrix[row][col] > target:
            col -= 1
        elif matrix[row][col] < target:
            row += 1
        else:
            return [row, col]

    return [-1, -1]
