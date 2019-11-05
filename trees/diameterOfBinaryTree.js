/*
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \
      4   5

Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.

Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
*/

/*
Max diameter with root node
Find the height of the left subtree + height of the right subtree + 1 = diameter of tree with root node

Max diameter without root node
max(height of left subtree, height of right sub tree) = diameter of tree without root node

max(max diameter with root node, max diameter without root node) = max diameter of tree
*/
