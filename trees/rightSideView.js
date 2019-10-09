/*
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
*/

// top to bottom usually means BFS
// right most node on each level is what we will add to our visible list.

//Time Complexity
// O(n) time

//Space Complexity
//O(n) space

function rightSideView(root) {
  // set a queue for bfs, initiate node as root, and current level as zero
  let next = [{ node: root, level: 0 }];
  // set a visibleValues array to return
  let visibleValues = [];

  // while our priority queue has a length
  while (next.length) {
    // lets pop off our most recent node in our queue
    let curr = next.pop();
    // if there is no node, move to the next iteration.
    if (!curr.node) continue;
    // if the curr node's level is equal to our length for visibleValues, we know that we are on the same level!, we can only have a maximum of one node for each level in our visible values array!
    if (curr.level === visibleValues.length) {
      visibleValues.push(curr.node.val);
    }
    // bfs check if curr node has a left, and add it to the queue and increment curr node's left level by 1
    if (curr.node.left) {
      next.push({ node: curr.node.left, level: curr.level + 1 });
    }
    // likewise if our curr node has a right, add it to the queue and increment our curr node's right level by 1 ** our right node will be the most recent in our queue ** // this ensures we take the right most element and add it to our visibles array.
    if (curr.node.right) {
      next.push({ node: curr.node.right, level: curr.level + 1 });
    }
  }
  // return our right side view
  return visibleValues;
}
