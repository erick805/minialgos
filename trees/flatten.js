/*
Given a binary tree, flatten it to a linked list in-place.
Do not return anything, modify root in-place instead.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6

The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
*/

/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// Time Complexity
// O(n) time

// Space Complexity
// O(n) space

function flatten(root) {
  let head = root;
  const stack = [];

  while (head) {
    if (head.right) {
      stack.push(head.right);
      head.right = null;
    }
    if (head.left) {
      head.right = head.left;
      head.left = null;
    }

    if (!head.left && !head.right && stack.length > 0) {
      let node = stack.pop();
      head.right = node;
    }
    head = head.right;
  }
}
