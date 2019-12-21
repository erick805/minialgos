/*
Merge K sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

  Input:

  [
    1->4->5,
    1->3->4,
    2->6
  ]


  Output: 1->1->2->3->4->4->5->6

function ListNode(val) {
  this.val = val
  this.next = null
}
*/

// PriorityQueue

// Time Complexity: O(nlog(k)) k = number of sorted lists
// Space Complexity: O(k)

const mergeKLists = lists => {
  const pq = new PriorityQueue();
  lists.forEach(list => {
    if (list) pq.enqueue(list, list.val);
  });

  const res = new ListNode(null);

  let cur = res;

  while (!pq.isEmpty()) {
    cur.next = pq.dequeue();
    cur = cur.next;
    if (cur.next) pq.enqueue(cur.next, cur.next.val);
  }

  return res.next;
};

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const node = new Node(val, priority);

    this.values.push(node);
    this.bubbleUp();
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return min.val;
  }

  isEmpty() {
    return !this.values.length;
  }

  bubbleUp(index = this.values.length - 1) {
    if (index <= 0) return;
    const parentIdx = Math.floor((index - 1) / 2);

    if (this.values[index].priority <= this.values[parentIdx].priority) {
      [this.values[index], this.values[parentIdx]] = [
        this.values[parentIdx],
        this.values[index]
      ];
      this.bubbleUp(parentIdx);
    }
  }

  bubbleDown(index = 0, swapIdx = null) {
    let leftIdx = index * 2 + 1,
      rightIdx = index * 2 + 2,
      length = this.values.length;

    if (leftIdx < length) {
      if (this.values[leftIdx].priority <= this.values[index].priority)
        swapIdx = leftIdx;
    }

    if (rightIdx < length) {
      if (
        (swapIdx === null &&
          this.values[rightIdx].priority <= this.values[index].priority) ||
        (swapIdx !== null &&
          this.values[rightIdx].priority < this.values[leftIdx].priority)
      )
        swapIdx = rightIdx;
    }

    if (swapIdx !== null) {
      [this.values[index], this.values[swapIdx]] = [
        this.values[swapIdx],
        this.values[index]
      ];
      this.bubbleDown(swapIdx, null);
    }
  }
}

// using JS .shift() method - optimize space

const mergeKLists_shift = lists => {
  // keep merging until we hit length zero
  if (lists.length === 0) return null;

  while (lists.length > 1) {
    // shift out first two elements and merge
    const a = lists.shift();
    const b = lists.shift();

    const merged = mergedLists(a, b);
    lists.push(merged);
  }

  return lists[0]; // return first item in list
};

const merge = (a, b) => {
  const dummy = new ListNode(null);
  let temp = dummy;

  while (a !== null && b !== null) {
    if (a.val < b.val) {
      temp.next = a;
      a = a.next;
    } else {
      temp.next = b;
      b = b.next;
    }
    temp = temp.next;
  }
  if (a !== null) temp.next = a;
  if (b !== null) temp.next = b;

  return dummy.next;
};
