/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (sorted in ascending order)

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
*/

// O(nums.length) time | O(1) space
const nextPermutation = nums => {
  if (nums.length === 0) return nums;

  let option = -1;
  // find start of first decreasing sub sequence starting from back
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      option = i;
      break;
    }
  }
  // if their is an option to permutate loop from end to option
  if (option >= 0) {
    for (let i = nums.length - 1; i > option; i--) {
      // as soon as we find a number that is greater than option swap since it is least on right side
      if (nums[i] > nums[option]) {
        const temp = nums[i];
        nums[i] = nums[option];
        nums[option] = temp;
        break;
      }
    }
  }
  // reverse back again to get the lowest possible permutation for option.
  return reverse(option + 1, nums.length - 1, nums);
};

const reverse = (beg, end, arr) => {
  while (beg < end) {
    const temp = arr[beg];
    arr[beg] = arr[end];
    arr[end] = temp;
    beg++;
    end--;
  }
  return arr;
};
