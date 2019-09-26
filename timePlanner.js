// Implement a function meetingPlanner that given the availability, slotsA and slotsB, of two people and a meeting duration dur, returns the earliest time slot that works for both of them and is of duration dur. If there is no common time slot that satisfies the duration requirement, return an empty array.

// Each person’s availability is represented by an array of pairs. Each pair is an epoch array of size two. The first epoch in a pair represents the start time of a slot. The second epoch is the end time of that slot. The input variable dur is a positive integer that represents the duration of a meeting in seconds. The output is also a pair represented by an epoch array of size two.

// input:  slotsA = [[10, 50], [60, 120], [140, 210]]
//         slotsB = [[0, 15], [60, 70]]
//         dur = 8
// output: [60, 68]

// [60                  120]
// [60    70]

// [60         70]
// [60        70]
// dur = 12

// input:  slotsA = [10, 20][30, 40]
//         slotsB = [20, 30][31, 40]
//          dur = 8
// output: [31, 39]

// input:  slotsA = [[10, 50], [60, 120], [140, 210]]
//         slotsB = [[0, 15], [60, 70]]
//         dur = 12
// output: [] # since there is no common slot whose duration is 12

// Approach
// Compare each array length and see which one is shorter, and grab the element of the shorter array.
// Once you have the element do a comparison to each element in the longer array.
// the matching element + duration has to be bigger than the elements end - start time, for both slots.
// if that is true return [firstMatchingslot, firstMatchingSlot + duration]

//Time Complexity
//O(slotsAlength or slotsBLength) time

//Space Complexity
//O(1) space

function timePlanner(slotsA, slotsB, duration) {
  const slotsALength = slotsA.length;
  const slotsBLength = slotsB.length;

  if (slotsALength => slotsBLength) {
    for (let i = 0; i < slotsBLength; i++) {
      const startTimeB = slotsB[i][0];

      const endTimeB = slotsB[i][1];
      const startTimeA = slotsA[i][0];
      const endTimeA = slotsA[i][1];

      if (
        startTimeA <= startTimeB + duration &&
        startTimeB + duration <= endTimeA
      ) {
        if (endTimeA + duration)
          if (
            startTimeA + duration <= endTimeA &&
            startTimeA + duration <= endTimeB
          )
            return [startTimeB, startTimeB + duration];
      }
    }
  } else {
    for (let i = 0; i < slotsALength; i++) {
      const startTimeA = slotsA[i][0];
      const endTimeA = slotsA[i][1];
      const startTimeB = slotsB[i][0];
      const endTimeB = slotsB[i][1];

      if (
        startTimeB <= startTimeA + duration &&
        startTimeB + duration <= endTimeA
      ) {
        if (
          startTimeB + duration <= endTimeB &&
          startTimeB + duration <= endTimeA
        )
          return [startTimeA, startTimeA + duration];
      }
    }
  }
  return [];
}
