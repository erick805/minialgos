// Binary Heap

// Very similar to a binary search tree, but with some different rules

// In a max binary heap parent nodes are always larger than child nodes.

// In a min binary heap parent nodes are always smaller than child nodes.

// Each parent has at most two nodes.
// The value of each parent node is always greater than its children, but there are no guarantees between sibling nodes.

// A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12, 55];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;

    let childVal = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentVal = this.values[parentIndex];
      if (childVal <= parentVal) break;
      this.values[parentIndex] = childVal;
      this.values[index] = parentVal;
      index = parentIndex;
    }
  }
}
