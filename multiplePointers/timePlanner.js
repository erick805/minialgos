// Implement a function meetingPlanner that given the availability, slotsA and slotsB, of two people and a meeting duration dur, returns the earliest time slot that works for both of them and is of duration dur. If there is no common time slot that satisfies the duration requirement, return an empty array.

// Each person’s availability is represented by an array of pairs. Each pair is an epoch array of size two. The first epoch in a pair represents the start time of a slot. The second epoch is the end time of that slot. The input variable dur is a positive integer that represents the duration of a meeting in seconds. The output is also a pair represented by an epoch array of size two.

// input:  slotsA = [[10, 50], [60, 120], [140, 210]]
//         slotsB = [[0, 15], [60, 70]]
//         dur = 8
// output: [60, 68]

// input:  slotsA = [10, 20][30, 40]
//         slotsB = [20, 30][31, 40]
//          dur = 8
// output: [31, 39]

// input:  slotsA = [[10, 50], [60, 120], [140, 210]]
//         slotsB = [[0, 15], [60, 70]]
//         dur = 12
// output: [] # since there is no common slot whose duration is 12

/* Multiple Pointers Approach
Initiate two pointers for each slot
loop through each array until either index goes past array length
get the start time by taking the max of each slots start time
get the end time by taking the min of each slots end time
if the start time + duration is within our end time we can return immediately since it is sorted
else if one of the slots have a later end time we want to move the index of the earlier end time
*/

// Time Complexity
// O(n or m)

// Space Complexity
// O(1)

function timePlanner(slotsA, slotsB, duration) {
  let indexA = 0;
  let indexB = 0;

  while (indexA < slotsA.length && indexB < slotsB.length) {
    const start = Math.max(slotsA[indexA][0], slotsB[indexB][0]);
    const end = Math.min(slotsA[indexA][1], slotsB[indexB][1]);

    if (start + duration <= end) {
      return [start, start + duration];
    }

    if (slotsA[indexA][1] < slotsB[indexB][1]) {
      indexA++;
    } else {
      indexB++;
    }
  }
  return [];
}
