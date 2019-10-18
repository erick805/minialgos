/*
Given a binary tree, return all root-to-leaf paths.

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
