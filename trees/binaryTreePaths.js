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

// Recursive Solution
// Time Complexity
// O(n)

// Space Complexity
// O(n)

function binaryTreePaths(root) {
  // create our paths array
  const paths = [];
  // helper function to populate our paths array
  function constructPaths(start, path) {
    // if our current node exists
    if (start) {
      // add to our current path
      path += String(start.val);
      // if we hit a leaf
      if (!start.left && !start.right) {
        // we are done, lets move on to the next path.
        paths.push(path);
      } else {
        // if not we have more children
        // create the connection and attach to current path.
        path += "->";
        // do a recursive call on left subtree
        constructPaths(start.left, path);
        // do a recursive call on right subtree
        constructPaths(start.right, path);
      }
    }
  }
  // call our function with our tree, and an empty string
  constructPaths(root, "");
  // return our root to leaf paths
  return paths;
}
