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

class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}
