/*
You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

Example:

  Input: [5,2,6,1]
  Output: [2,1,1,0]
  Explanation:
  To the right of 5 there are 2 smaller elements (2 and 1).
  To the right of 2 there is only 1 smaller element (1).
  To the right of 6 there is only 1 smaller element (1).
  To the right of 1 there is 0 smaller element.
*/

// BST approach
class BST {
  constructor(v, s = 0) {
    this.value = v;
    this.left = null;
    this.right = null;
    this.size = s;
  }

  insert(val, s = 0) {
    if (val > this.value) {
      if (this.right) {
        return this.right.insert(val, s + this.size + 1); // increment one because we care about greater
      } else {
        this.right = new BST(val);
        return this.size + s + 1;
      }
    } else {
      this.size++;
      if (this.left) {
        return this.left.insert(val, s);
      } else {
        this.left = new BST(val);
        return s;
      }
    }
  }
}

const countSmaller = nums => {
  const bst = new BST(nums[nums.length - 1]);

  const count = new Array(nums.length);

  count[count.length - 1] = 0;

  // right -> left means greater
  for (let i = nums.length - 2; i >= 0; i--) {
    count[i] = bst.insert(nums[i]);
  }

  return count;
};

// Merge-sort approach

const countSmaller = nums => {
  if (nums.length === 0) return [];
  if (nums.length === 1) return [0];

  let items = nums.map(function(n, i) {
    return { n, i, count: 0 };
  });

  const helper = items => {
    const len = items.length;
    const half = Math.floor(len / 2);

    if (len <= 1) return items;

    if (len === 2) {
      if (items[1].n < items[0].n) {
        items[0].count++;
        const temp = items[1];
        items[1] = items[0];
        items[0] = temp;
      }

      return items;
    }

    let left = items.slice(0, half + 1);
    let right = items.slice(half + 1);

    (left = helper(left)), (right = helper(right));

    const res = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      let item1 = left[i];
      let item2 = right[j];

      if (item1.n <= item2.n) {
        res.push(item1);
        i++;
        item1.count += j;
      } else {
        res.push(item2);
        j++;
      }
    }

    while (i < left.length) {
      let item1 = left[i++];
      res.push(item1);
      item1.count += j;
    }

    while (j < right.length) {
      res.push(right[j++]);
    }
    return res;
  };
  items = helper(items);
  items.sort((a, b) => a.i - b.i);

  return items.map(item => item.count);
};
