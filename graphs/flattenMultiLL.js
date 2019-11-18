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
    if (cur.child !== null) {
      if (cur.next !== null) {
        stack.push(cur.next);
      }
      cur.next = cur.child;
      if (cur.next !== null) cur.next.prev = cur;
      cur.child = null;
    } else if (cur.next === null && stack.length) {
      cur.next = stack.pop();
      if (cur.next !== null) cur.next.prev = cur;
    }
    cur = cur.next;
  }
  return head;
}
