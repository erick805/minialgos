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

function diameterOfBinaryTree(root) {
  let diameter = 0;

  findDiameter(root);

  return diameter;

  function findDiameter(node) {
    if (node === null) return 0;
    // find diameter of left sub tree
    const leftDiameter = findDiameter(node.left);
    // find diameter of right sub tree
    const rightDiameter = findDiameter(node.right);
    // update the diameter at every node
    diameter = Math.max(diameter, leftDiameter + rightDiameter);
    // find the largest number of edges so far
    return 1 + Math.max(leftDiameter, rightDiameter);
  }
}
