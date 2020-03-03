'''
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
'''


def findMedianSortedArrays(nums1, nums2):
    if len(nums1) > len(nums2):
        return findMedianSortedArrays(nums2, nums1)

    x, y = len(nums1), len(nums2)

    lo, hi = 0, x

    while lo <= hi:
        partX = (lo + hi) // 2  # partition for shorter set
        # partition for longer set including partX
        partY = ((x + y + 1)) // 2 - partX

        # create boundaries
        maxLeftX = float("-inf") if partX == 0 else nums1[partX - 1]
        minRightX = float("inf") if partX == x else nums1[partX]

        maxLeftY = float("-inf") if partY == 0 else nums2[partY - 1]
        minRightY = float("inf") if partY == y else nums2[partY]

        if maxLeftX <= minRightY and maxLeftY <= minRightX:
            if (x + y) % 2 == 0:
                # even length
                return float(max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2
            else:
                # odd length
                return float(max(maxLeftX, maxLeftY))
        elif maxLeftX > minRightY:
            hi = partX - 1
        else:
            lo = partX + 1
