/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807

(2 -> 4 -> 3) + (5 -> 6 -> 4) => 7 -> 0 -> 8
(0 -> 4 -> 3) + (5 -> 6 -> 4) => 5 -> 0 -> 8
(2 -> 4 -> 3) + (0 -> 6 -> 4) => 2 -> 0 -> 8
(2 -> 4) + (0 -> 6 -> 4) => 2 -> 0 -> 5
*/

const addTwoNumbers = (l1, l2) => {
  let sumLL = new ListNode(null);
  let head = sumLL;
  let carry = 0;

  while (l1 || l2) {
    let left = l1 ? l1.val : 0;
    let right = l2 ? l2.val : 0;
    let sum = carry + left + right;
    carry = sum > 9 ? 1 : 0;

    sumLL.next = new ListNode(sum % 10);
    sumLL = sumLL.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (carry > 0) sumLL.next = new ListNode(carry);

  return head.next;
};
