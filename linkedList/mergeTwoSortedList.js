/*
Given two sorted linked lists merge them into a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

Definition for singly-linked list.
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
*/

const mergeTwoSortedList = (l1, l2) => {
  const mergedList = new ListNode(null);
  let cur = mergedList;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 || l2;

  return mergedList.next;
};
