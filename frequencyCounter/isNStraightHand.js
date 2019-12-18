/*
Alice has a hand of cards, given as an array of integers.

Now she wants to rearrange the cards into groups so that each group is size W, and consists of W consecutive cards.

Return true if and only if she can.

Example 1:

  Input: hand = [1,2,3,6,2,3,4,7,8], W = 3
  Output: true
  Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8].

Example 2:

  Input: hand = [1,2,3,4,5], W = 4
  Output: false
  Explanation: Alice's hand can't be rearranged into groups of 4.

Note:
  1. 1 <= hand.length <= 10000
  2. 0 <= hand[i] <= 10^9
  3. 1 <= W <= hand.length
*/

const isNStraightHand = (hand, W) => {
  // if it's not divisible return false immediately
  if (hand.length % W !== 0) return false;

  hand.sort((a, b) => a - b); // sort least to greatest with duplicates together

  const cardFreq = new Map();

  // store dictionary of each card and it's frequency
  for (const card of hand) {
    cardFreq.set(card, (cardFreq.get(card) || 0) + 1);
  }

  for (const [card, freq] of cardFreq) {
    // if there is at least one occurence
    if (freq > 0) {
      // loop up to W
      for (let i = 1; i < W; i++) {
        // if next consecutive has no occurences or less than current - return false
        if ((cardFreq.get(card + i) || 0) < freq) return false;

        // update new frequency since we used it
        cardFreq.set(card + i, cardFreq.get(card + i) - freq);
      }
    }
  }

  return true;
};
