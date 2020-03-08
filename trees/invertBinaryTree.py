'''
Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node
in the tree for its corresponding(mirrored) right node. Each Binary Tree node has a value stored in a property called
"value" and two children nodes stored in properties called "left" and "right" respectively. Children nodes can either be
Binary Tree nodes themselves or the None(null) value.

Input:  1
       / \
      2    3
     / \  / \
    4   56   7
   / \
  8   9

Output: 1
       / \
      3    2
     / \  / \
    7   65   4
            / \
           9   8
'''


# bfs iterative - O(n) time | O(n) space
def invertBinaryTreeBFS(tree):
    queue = [tree]
    while len(queue):
        current = queue.pop(0)
        if current is None:
            continue
        swapLeftAndRight(current)
        queue.append(current.left)
        queue.append(current.right)


# dfs recursive - O(n) time | O(d) space, d = depth of tree
def invertBinaryTreeDFS(tree):
    if tree is None:
        return
    swapLeftAndRight(tree)
    invertBinaryTreeDFS(tree.left)
    invertBinaryTreeDFS(tree.right)


def swapLeftAndRight(tree):
    tree.left, tree.right = tree.right, tree.left
