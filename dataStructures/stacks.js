// Stacks

// LIFO principle = the last element in is the first element out.

// TIME COMPLEXITY
// insertion - O(1)
// removal - O(1)
// searching - O(n)
// access - O(n)

class Node {
  construtor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.last) {
      this.last = node;
      this.first = node;
    } else {
      let currentFirst = this.first;
      this.first = node;
      this.first.next = currentFirst;
    }
    return ++this.size;
  }

  pop() {
    if (!this.last) return null;
    if (this.size === 1) this.last = null;

    let removedNode = this.first;
    this.first = removedNode.next;
    this.size--;
    return removedNode.val;
  }
}
