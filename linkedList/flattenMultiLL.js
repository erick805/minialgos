/*
You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or my not point to a seperate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure.

Flatten the list so that all nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

Example:

Input:
 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL

Output:
1-2-3-7-8-11-12-9-10-4-5-6-NULL
*/

function flattenMultiLL(head) {
  if (head === null) return head;
  const stack = [];
  let cur = head;

  while (cur !== null) {
    // if our current node has a child and a next
    if (cur.child !== null) {
      if (cur.next !== null) {
        // push the next node into stack
        stack.push(cur.next);
      }
      // point the cur next to child
      cur.next = cur.child;
      // if we have pointer to child, set child's previous to current
      if (cur.next !== null) cur.next.prev = cur;
      // severe child refernce
      cur.child = null;
      // if we are at the end of the list and we have something in our stack
    } else if (cur.next === null && stack.length) {
      // set the current's next to recent popped node
      cur.next = stack.pop();
      // if their is a node, set the node's previous to curr
      if (cur.next !== null) cur.next.prev = cur;
    }
    // traverse to the next level or node
    cur = cur.next;
  }
  return head;
}
