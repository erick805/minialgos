/*
Given a singly linked list, group all odd nodes together followed by even nodes.
Please note here we are talking about the node number and not the values of the nodes.

You should try to do it in place. The program should run in O(1) space complexity and time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL

Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
*/

const oddEvenList = head => {
  if (!head) return head;

  let oddHead = head;
  let evenHead = head.next;

  while (oddHead.next && oddHead.next.next) {
    let even = oddHead.next;
    oddHead.next = oddHead.next.next;
    oddHead = oddHead.next;
    even.next = oddHead.next;
  }
  oddHead.next = evenHead;
  return head;
};
