/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.
*/

const removeNthFromEnd = (head, n) => {
  const nullHead = new Listnode(null);
  nullHead.next = head;

  let follow = nullHead;
  let guide = nullHead;

  for (let i = 1; i <= n + 1; i++) guide = guide.next;

  while (guide !== null) {
    guide = guide.next;
    follow = follow.next;
  }
  follow.next = follow.next.next;
  return nullHead.next;
};
