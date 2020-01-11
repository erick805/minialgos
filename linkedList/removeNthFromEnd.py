'''
Write a function that takes in the head of a singly linked list and an integer n (assume that the list has at least n nodes).
The function should remove the nth node from the end of the list. Note that every node in the singly linked list has
a "value" property storing its value as well as a "next" property pointing to the next node in the list or None(null)
if it is the tail of the list.

Input: head = 0->1->2->3->4->5->6->7->8->9, n = 4
Output: head = 0->1->2->3->4->5->7->8->9
'''


class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None
