/*
Given a set of points in the xy-plane, determine the minimum area of a rectangle formed from these points, with sides parallel to the x and y axes.

If there isn't any rectangle, return 0.

Example 1:

Input: [[1,1], [1,3], [3,1], [3,3], [2,2]]
Output: 4

Example 2:

Input: [[1,1], [1,3], [3,1], [3,3], [4,1], [4,3]]
Output: 2

Note:

1. 1 <= points.length <= 500
2. 0 <= points[i][0] <= 40000
3. 0 <= points[i][1] <= 40000
4. All points are distinct.
*/

const minAreaRect = points => {
  if (points.length < 4) return 0;

  const coords = new Map();

  for (const [x, y] of points) {
    if (!coords.has(x)) coords.set(x, new Set());
    coords.get(x).add(y);
  }

  let minArea = Infinity;
  for (const [x1, y1] of points) {
    for (const [x2, y2] of points) {
      if (x1 === x2 || y1 === y2) continue;

      if (coords.get(x1).has(y2) && coords.get(x2).has(y1)) {
        minArea = Math.min(Math.abs(x1 - x2) * Math.abs(y1 - y2));
      }
    }
  }

  return minArea === Infinity ? 0 : minArea;
};
