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
*/

const addTwoNumbers = (l1, l2) => {
  // create dummy linked list
  let sumLL = new ListNode(null);
  let head = sumLL;
  // initialize carry counter to zero
  let carry = 0;
  // loop through our linked list
  while (l1 || l2) {
    // capture current left value
    let left = l1 ? l1.val : 0;
    // capture current right value
    let right = l2 ? l2.val : 0;
    // capture sum with current carry
    let sum = carry + left + right;
    // if sum is larger than 9, add ten to next digit otherwise add zero
    carry = sum > 9 ? 1 : 0;
    // append new value with last digit of current sum
    sumLL.next = new ListNode(sum % 10);
    // move to the next dummy node
    sumLL = sumLL.next;
    // move to the next node in linked lists
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  // if we have any remainder left - append it to last node
  if (carry > 0) sumLL.next = new ListNode(carry);
  // return new linked list
  return head.next;
};
