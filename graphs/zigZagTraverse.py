'''
Write a traversal function that prints a one-dimensional array of all the numbers within the
given matrix. The matrix is a two dimensional array with array's as child elements of the matrix.
Assuming the zig zag order starts at the top left corner of the two-dimensional array, goes down
by one element, and proceeds to traverse in a zig zag pattern all the way to the bottom right corner.

Input: matrix =
[
  [1,3,4,10],
  [2,5,9,11],
  [6,8,12,15],
  [7,13,14,16]
]

Output: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
'''


# O(n) time | O(n) space
def zigZagTraverse(matrix):
    result = []
    width = len(matrix[0]) - 1
    height = len(matrix) - 1
    row, col = 0, 0
    traverseDown = True

    while not isOutOfBounds(row, col, width, height):
        result.append(matrix[row][col])
        if traverseDown:
            if col == 0 or row == height:
                traverseDown = False
                if row == height:
                    col += 1
                else:
                    row += 1
            else:
                row += 1
                col -= 1
        else:
            if row == 0 or col == width:
                traverseDown = True
                if col == width:
                    row += 1
                else:
                    col += 1
            else:
                row -= 1
                col += 1

    return result


def isOutOfBounds(row, col, width, height):
    return row < 0 or row > height or col < 0 or col > width
