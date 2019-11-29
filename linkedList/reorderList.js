/*
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:

Given 1->2->3->4, reorder it to 1->4->2->3.

Example 2:

Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
*/

const reorderList = head => {
  // if there is no head return
  if (!head || !head.next) return;
  // initiate two pointers to split our linked list in half
  let slow = head;
  let fast = head;
  // as long as there's more to traverse with fast
  while (fast.next && fast.next.next) {
    // we can divide our ll into two
    fast = fast.next.next;
    slow = slow.next;
  }
  // slow should be our mid node
  let middle = slow;
  let cur = slow.next;

  while (cur.next) {
    let next = cur.next;
    cur.next = next.next;
    next.next = middle.next;
    middle.next = next;
  }
  // 2 -> 4 -> 3 -> null
  // start reorder one by one
  let p1 = head;
  let p2 = middle.next;

  while (p1 !== middle) {
    let p1Next = p1.next;
    let p2Next = p2.next;

    p1.next = p2;
    p2.next = p1Next;
    middle.next = p2Next;

    p1 = p1Next;
    p2 = p2Next;
  }
};
