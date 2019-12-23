/*
Alice plays the following game, loosely based on the card game "21".

Alice starts with 0 points, and draws numbers while she has less than K points. During each draw, she gains an integer number of points randomly from the range [1,W], where W is an integer. Each draw is independent and the outcomes have equal probabilities.

Alice stops drawing numbers when she gets K or more points. What is the probability that she has N or less points?

Example 1:

  Input: N = 10, K = 1, W = 10
  Output: 1.00000
  Explanation: Alice gets a single card, then stops.

Example 2:

  Input: N = 6, K = 1, W = 10
  Output: 0.60000
  Explanation: Alice gets a single card, then stops.
  In 6 out of W = 10 possibilities, she is at or below N = 6 points.

Example 3:

  Input: N = 21, K = 17, W = 10
  Output: 0.73278

Note:
  1. 0 <= K <= N <= 10000
  2. 1 <= W <= 10000
*/

// N = # of points or less, K = value to redraw, W = max value in card set

// Dynamic Programming
const new21Game = (N, K, W) => {
  if (K === 0 || N >= K + W) return 1;

  let sum = 1; // initiate sum as one - each card
  let ans = 0;

  const dp = [];
  dp[0] = 1;

  // loop for each value up until N
  for (let i = 1; i <= N; i++) {
    dp[i] = sum / W; // set each value probablity at index

    // if value is less than K
    if (i < K) {
      sum = sum + dp[i]; // accumulate probability
    } else {
      ans = ans + dp[i];
    }

    if (i - W >= 0) {
      sum = sum - dp[i - W]; // carry over
    }
  }

  return ans;
};
