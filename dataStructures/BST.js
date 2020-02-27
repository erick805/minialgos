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
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;

    while (current) {
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
    const visited = [];
    const queue = [this.root];

    while (queue.length) {
      const dequed = queue.shift();
      visited.push(dequed);
      if (dequed.left) queue.push(dequed.left);
      if (dequed.right) queue.push(dequed.right);
    }

    return visited;
  }

  dfsPre() {
    const visited = [];
    const current = this.root;

    const dfs = node => {
      visited.push(node);
      if (node.left) dfs(node.left);
      if (node.right) dfs(node.right);
    };
    dfs(current);
    return visited;
  }

  dfsPost() {
    const visited = [];
    const current = this.root;

    const dfs = node => {
      if (node.left) dfs(node.left);
      if (node.right) dfs(node.right);
      visited.push(node);
    };
    dfs(current);
    return visited;
  }

  dfsInOrder() {
    const visited = [];
    const current = this.root;

    const dfs = node => {
      if (node.left) dfs(node.left);
      visited.push(node);
      if (node.right) dfs(node.right);
    };
    dfs(current);
    return visited;
  }
}

// Time Complexity
// O(n)
// Space Complexity
// O(d) - d is depth of tree
const validateBST = tree => {
  return validateBSTHelper(tree, -Infinity, Infinity);
};

const validateBSTHelper = (tree, min, max) => {
  if (tree === null) return true;
  if (tree.val < min || tree.val >= max) return false;
  const leftIsValid = validateBSTHelper(tree.left, min, tree.val);
  return leftIsValid && validateBSTHelper(tree.right, tree.left, max);
};
