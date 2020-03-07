/*
Return any binary tree that matches the given preorder and postorder traversals.

Values in the traversals pre and post are disintct positive integers.

Example 1:

Input: pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]

Output: [1,2,3,4,5,6,7]

Note:

- 1 <= pre.length == post.length <= 30
- pre[] and post[] are both permutations of 1, 2, ...., pre.length
*/

// pre = [1,2,4,5,3,6,7] (Root L R)
// post = [4,5,2,6,7,3,1] (L R Root)

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const constructFromPrePost = (pre, post) => {
  if (pre.length === 0) return null;
  if (pre.length === 1) return new Node(pre[0]);

  const root = new Node(pre[0]);
  const left = pre[1];
  // find root of left subtree
  const leftIndex = post.indexOf(pre[1]);
  // left subtree
  root.left = constructFromPrePost(
    pre.slice(1, leftIndex + 2),
    post.slice(0, leftIndex + 1)
  );
  // right subtree
  root.right = constructFromPrePost(
    pre.slice(leftIndex + 2),
    post.slice(leftIndex + 1)
  );

  return root;
};
