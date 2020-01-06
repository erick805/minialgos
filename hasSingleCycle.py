'''
You are given an array of integers. Each integer represents a jump of its value in the array. For instance, the
integer 2 represents a jump of 2 indices forward in the array; the integer -3 represents a jump of 3 indices
backward in the array. If a jump goes past the array's bounds, it wraps over to the other side. For instance, a jump
of 1 at the last index in the array brings us to the index 0. Write a function that returns a boolean representing
whether the jumps in the array form a single cycle. A single cycle occurs if, starting at any index in the array and
following the jumps, every element is visited exactly once before landing back on the starting index.

Input: [2,3,1,-4,-4,2]
Output: True
'''
