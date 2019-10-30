/*
A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.

Each node is a constructor class with a .val, .left, and .right property.

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

.val = the current value of node
.left = left child
.right = right child

Given a binary tree, return all root-to-leaf paths. If there are no paths, just return an empty array.
Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
*/

//Time Complexity
//O(n)

//Space Complexity
//O(n)

function binaryTreePaths(root) {
  const paths = [];

  function constructPaths(start, path) {
    if (start) {
      path += String(start.val);
      if (!start.left && !start.right) {
        paths.push(path);
      } else {
        path += "->";
        constructPaths(start.left, path);
        constructPaths(start.right, path);
      }
    }
  }
  constructPaths(root, "");
  return paths;
}
