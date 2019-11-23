/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.
*/

const removeNthFromEnd = (head, n) => {
  // create dummy head
  const nullHead = new Listnode(null);
  nullHead.next = head;
  // initiate two pointers one to guide and one to follow
  let follow = nullHead;
  let guide = nullHead;
  // loop until we go one more than the n, this is to keep an indicator of prev node of nth node from end
  for (let i = 1; i <= n + 1; i++) guide = guide.next;
  // while guide is not at the end, reassign follow to be equal to prev node of nth node from end
  while (guide !== null) {
    guide = guide.next;
    follow = follow.next;
  }
  // set the prev node next to nth node's next.
  follow.next = follow.next.next;
  // return dummy head
  return nullHead.next;
};
