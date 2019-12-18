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
