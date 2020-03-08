'''
You're given three inputs, all of which are instances of a class that have an "ancestor" property pointing to their youngest ancestor.
The first input is the top ancestor in an ancestral tree (i.e., the only instance that has no ancestor),
and the other two inputs are descendants in the ancestral tree. Write a function that returns the youngest common ancestor to the two descendants.

Input: Node A, Node E, Node I
        A
      /  \
     B    C
    / \  / \
   D   EF   G
  / \
 H   I

Output: Node B
'''


# O(d) time d = depth of tree, O(1) space
class AncestralTree:
    def __init__(self, name):
        self.name = name
        self.ancestor = None


def youngestCommonAncestor(topAncestor, descendantOne, descendantTwo):
    depthOne = getDescendantDepth(descendantOne, topAncestor)
    depthTwo = getDescendantDepth(descendantTwo, topAncestor)

    if depthOne > depthTwo:
        return backtrackAncestralTree(descendantOne, descendantTwo, depthOne - depthTwo)
    else:
        return backtrackAncestralTree(descendantTwo, descendantOne, depthTwo - depthOne)


def getDescendantDepth(descendant, topAncestor):
    depth = 0
    while descendant != topAncestor:
        depth += 1
        descendant = descendant.ancestor
    return depth


def backtrackAncestralTree(lower, higher, diff):
    while diff > 0:
        lower = lower.ancestor
        diff -= 1
    while lower != higher:
        lower = lower.ancestor
        higher = higher.ancestor
    return lower
