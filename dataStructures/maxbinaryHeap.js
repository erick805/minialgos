// Binary Heap

// Very similar to a binary search tree, but with some different rules

// In a max binary heap parent nodes are always larger than child nodes.

// In a min binary heap parent nodes are always smaller than child nodes.

// Each parent has at most two nodes.
// The value of each parent node is always greater than its children, but there are no guarantees between sibling nodes.

// A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

// TIME COMPLEXITY
// insertion - O(logn)
// removal - O(logn)
// search - O(logn)

class MaxBinaryHeap {
  constructor() {
    this.values = [];
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

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}
