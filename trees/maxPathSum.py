'''
Write a function that takes in a binary tree and returns its max path sum. A path is a collection of connected nodes
where no node is connected to more than two other nodes; a path sum is the sum of the values of the nodes in a
particular path. Each binary tree node has a value stored in a property called "value" and two children nodes stored
in properties called "left" and "right", respectively. Children nodes can either be binary tree nodes themselves or
the None(null) value.

Input:  1
       / \
      2   3
     / \  / \
    4  5 6   7

Output: 18
'''


def maxPathSum(tree):
    _, maxSum = findMaxSum(tree)

    return maxSum


def findMaxSum(tree):
    if tree is None:
        return (0, 0)

    LSB, LRS = findMaxSum(tree.left)
    RSB, RRS = findMaxSum(tree.right)

    maxChildSumAsBranch = max(LSB, RSB)

    value = tree.value
    maxSumAsBranch = max(maxChildSumAsBranch + value, value)
    maxSumAsRootNode = max(LSB + value + RSB, maxSumAsBranch)
    maxPathSum = max(LRS, RRS, maxSumAsRootNode)

    return (maxSumAsBranch, maxPathSum)
