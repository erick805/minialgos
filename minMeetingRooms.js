/*
Given an array of meeting time intervals consisting of start and end times [s1, e1], [s2,e2], ...] (si < ei).

Find the minimum number of conference rooms required.

Example 1:
  Input: [[0, 30], [5,10], [15,20]]
  Output: 2

Example 2:
  Input: [[7,10],[2,4]]
  Output: 1
*/

// Time Complexity: O(nlogn)
// Space Complexity: O(n)

const minMeetingRooms = intervals => {
  if (!intervals) return 0;

  const starts = intervals.map(a => a[0]).sort((a, b) => a - b);
  const ends = intervals.map(a => a[1]).sort((a, b) => a - b);

  let rooms = 0;
  let end = 0;

  for (let i = 0; i < intervals.length; i++) {
    // if current start time is less than - we need another room
    if (starts[i] < ends[end]) {
      rooms++;
    } else {
      end++; // extend from current end
    }
  }

  return rooms;
};
