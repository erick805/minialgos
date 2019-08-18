// Binary Heap

// Very similar to a binary search tree, but with some different rules

// In a max binary heap parent nodes are always larger than child nodes.

// In a min binary heap parent nodes are always smaller than child nodes.

// Each parent has at most two nodes.
// The value of each parent node is always greater than its children, but there are no guarantees between sibling nodes.

// A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

class maxBinaryHeap {
  constructor() {
    this.values = [];
  }
}
