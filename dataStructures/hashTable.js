// Hash Tables

// What makes a good hash?
// Fast(constant time)
// Doesn't cluster outputs at specific indices, but distributes uniformly.
// Deterministic (same input yields same output)

// simple hash function (only works on strings!)
const hash = (key, arrayLen) => {
  let total = 0;
  const WEIRD_PRIME = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const char = key[i];
    const value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
};

// Dealing with Collisions

// Even with a large array and a great hash function, collisions are inevitable'

// There are many strategies for dealing with collisions: but we'll focus on two:
// 1. Seperate Chaining - nested data structures
// 2. Linear Probing - store in next available slot

// Seperate Chaining

// TIME COMPLEXITY (average case)
// Insert - O(1)
// Deletion - O(1)
// Access - O(1)

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, val) {
    const idx = this._hash(key);

    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }

    this.keyMap[idx].push([key, val]);
  }

  get(key) {
    const idx = this._hash(key);

    if (this.keyMap[idx]) {
      for (let i = 0; i < this.keyMap[idx].length; i++) {
        if (this.keyMap[idx][i][0] === key) {
          return this.keyMap[idx][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keys.includes(this.keyMap[i][j][0])) {
            keys.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!values.includes(this.keyMap[i][j][1])) {
            values.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return values;
  }
}
