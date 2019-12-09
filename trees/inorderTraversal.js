/*
Given a binary tree, return the inorder traversal of its nodes values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]

Challenge: Approach the solution iteratively
*/

// Time Complexity: O(n)
// Space Complexity: O(n)

const inorderTraversal = root => {
  if (!root) return [];

  const inorder = [];
  // initialize stack to keep track of in order traversal
  const stack = [];

  let cur = root;

  while (cur || stack.length) {
    while (cur) {
      // left
      stack.push(cur);
      cur = cur.left;
    }
    // root
    cur = stack.pop();
    inorder.push(cur.val);
    // right
    cur = cur.right;
  }

  return inorder;
};
