// TIME COMPLEXITY
// Insertion - O(logn) avg case
// Searching - O(logn) avg case

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return !found;
      }
    }
    return found;
  }

  bfs() {
    let visited = [];
    let queue = [this.root];

    while (queue.length) {
      let dequedNode = queue.shift();
      visited.push(dequedNode.val);
      if (dequedNode.left) queue.push(dequedNode.left);

      if (dequedNode.right) queue.push(dequedNode.right);
    }

    return visited;
  }

  // DFS - PreOrder
  dfsPre() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);

    return visited;
  }

  dfsPost() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    }
    traverse(current);

    return visited;
  }

  dfsInOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      node.left && traverse(node.left);
      visited.push(node.val);
      node.right && traverse(node.right);
    }
    traverse(current);

    return visited;
  }
}
