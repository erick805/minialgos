/*
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
*/

// O(d) time | O(1) space - d = depth of the ancestral tree
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

const youngestCommonAncestor = (topAncestor, descendantOne, descendantTwo) => {
  const depthOne = getDescendantDepth(descendantOne, topAncestor);
  const depthTwo = getDescendantDepth(descendantTwo, topAncestor);

  if (depthOne > depthTwo) {
    return backtrackAncestralTree(
      descendantOne,
      descendantTwo,
      depthOne - depthTwo
    );
  } else {
    return backtrackAncestralTree(
      descendantTwo,
      descendantOne,
      depthTwo - depthOne
    );
  }
};

const getDescendantDepth = (descendant, topAncestor) => {
  let depth = 0;
  while (descendant !== topAncestor) {
    depth++;
    descendant = descendant.ancestor;
  }
  return depth;
};

const backtrackAncestralTree = (lower, higher, diff) => {
  while (diff > 0) {
    lower = lower.ancestor;
    diff--;
  }

  while (lower !== higher) {
    lower = lower.ancestor;
    higher = higher.ancestor;
  }
  return lower;
};
