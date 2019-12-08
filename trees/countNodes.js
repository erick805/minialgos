/*
Given a complete binary tree, count the number of nodes.

Note:

Definition of a complete binary tree: In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2^h nodes inclusive at the last level h.

Example:

Input:
    1
   / \
  2   3
 / \  /
4  5 6

Output: 6
*/

/*
Complete Tree:
Time Complexity: O(n * h) h = height of tree
Space Complexity: O(h or logn)

Perfect Tree:
Time Complexity: O(h) h = height of tree
Space Complexity: O(1)
*/

const countNodes = root => {
  if (!root) return 0;
  // keep count of height for far side left and far side right
  let hLeft = 0;
  let hRight = 0;
  // initiate pointers to root
  let pLeft = root;
  let pRight = root;
  // as long as pLeft exists, traverse and get the height
  while (pLeft) {
    ++hLeft;
    pLeft = pLeft.left;
  }
  // likewise for right
  while (pRight) {
    ++hRight;
    pRight = pRight.pRight;
  }
  // if they are equal we know it is a perfect tree, and we can return 2 to height - 1 to get total number of nodes
  if (hLeft === hRight) return 2 ** hLeft - 1;

  // else brute force because it is not a perfect binary tree
  return countNodes(root.left) + countNodes(root.right) + 1;
};
