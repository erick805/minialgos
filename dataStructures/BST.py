'''
Write a Binary Search Tree(BST) class. The class should have a "value" property set to be an integer, as well as "left" and "right" properties, both of which should point to either the None(null) value or to another BST. A node is said to be a BST node
if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and both of its children nodes are either BST nodes themselves or None(null) values. The BST class should support insertion, searching, and removal of values. The removal method should only remove the first instance of the target value.

Input:  10
       /  \
      5    15
     / \   / \
    2   5 13 22
   /       \
  1         14

Output (after inserting 12):
        10
       /  \
      5    15
     / \   / \
    2   5 13 22
   /      / \
  1      12   14

Output (after removing 10):
        12
       /  \
      5    15
     / \   / \
    2   5 13 22
   /       \
  1         14

Output (searching for 15): True
'''


class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    # average: O(log(n)) time | O(1) space
    # worst: O(n) time | O(1) space

    def insert(self, value):
        current = self
        while True:
            if value < current.value:
                if current.left is None:
                    current.left = BST(value)
                    break
                else:
                    current = current.left
            else:
                if current.right is None:
                    current.right = BST(value)
                    break
                else:
                    current = current.right
        return self

    # average: O(log(n)) time | O(1) space
    # worst: O(n) time | O(1) space

    def contains(self, value):
        current = self
        while current is not None:
            if value < current.value:
                current = current.left
            elif value > current.value:
                current = current.right
            else:
                return True
        return False

    # average: O(log(n)) time | O(1) space
    # worst: O(n) time | O(1) space

    def remove(self, value, parent=None):
        current = self
        while current is not None:
            if value < current.value:
                parent = current
                current = current.left
            elif value > current.value:
                parent = current
                current = current.right
            else:
                if current.left is not None and current.right is not None:
                    current.value = current.right.getMinValue()
                    # current.value = smallest value of right subtree
                    current.right.remove(current.value, current)
                elif parent is None:  # if node to remove is root
                    if current.left is not None:  # one left child
                        current.value = current.left.value
                        current.right = current.left.right
                        current.left = current.left.left  # order of assignment matters

                    elif current.right is not None:  # one right child
                        current.value = current.right.value
                        current.left = current.right.left
                        current.right = current.right.right
                    else:  # no child
                        current.value = None

                elif parent.left == current:
                    parent.left = current.left if current.left is not None else current.right
                elif parent.right == current:
                    parent.right = current.left if current.left is not None else current.right
                break
        return self
