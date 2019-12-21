/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log(m + n))

You may assume nums1 and nums2 cannot be both empty.

Example 1:

  nums1 = [1, 3]
  nums2 = [2]

  The median is 2.0

Example 2:

  nums1 = [1,2]
  nums2 = [3,4]

  The median is (2 + 3) / 2 = 2.5
*/

const findMedianSortedArrays = (nums1, nums2) => {
  // perform on shorter of two arrays
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

  const x = nums1.length;
  const y = nums2.length;

  let lo = 0;
  let hi = x;

  while (lo <= hi) {
    let partitionX = ((lo + hi) / 2) | 0;
    let partitionY = ((x + y + 1) / 2 - partitionX) | 0;

    let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    let minRightX = partitionX === x ? Infinity : nums1[partitionX];

    let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    let minRightY = partitionY === y ? Infinity : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((x + y) & 1) return Math.max(maxLeftX, maxLeftY); // odd length
      return (
        (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
      ); // even length

      // binary search - move closer left
    } else if (maxLeftX > minRightY) hi = partitionX - 1;
    else lo = partitionX + 1; // move closer right
  }
};
