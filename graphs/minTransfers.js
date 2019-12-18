/*
A group of friends went on holiday and sometimes lent each other money. For example, Alice paid for Bill's lunch for $10. Then later Chris gave Alice $5 for a taxi ride.
We can model each transaction as a tuple (x,y,z) which means person x gave person y $z. Assuming Alice, Bill, and Chris are person 0, 1, and 2 respectively (0, 1, 2 are the person's ID), the transactions can be represented as [[0,1,10],[2,0,5]].

Given a list of transactions between a group of people, return the minimum number of transactions required to settle the debt.

Note:
  1. A transaction will be given as a tuple (x,y,z). Note that x != y and z > 0.
  2. Person's IDs may not be linear, e.g. we could have the persons 0, 1, 2 or we could also have the persons 0, 2, 6.

Example 1:

Input:
[[0,1,10],[2,0,5]]

Output:
2

Explanation:
Person #0 gave person #1 $10.
Person #2 gave person #0 $5.

Two transactions are needed. One way to settle the debt is person #1 pays person #0 and #2 $5 each.

Example 2:

Input: [[0,1,10],[1,0,1],[1,2,5],[2,0,5]]

Output:
1

Explanation:
Person #0 gave person #1 $10.
Person #1 gave person #0 $1.
Person #1 gave person #2 $5.
Person #2 gave person #0 $5.

Therefore, person #1 only need to give person #0 $4, and all debt is settled.
*/

// DFS + map of each person's account balance

const minTransfers = transactions => {
  // create hashmap of each person's account balance after transactions
  const map = {};

  for (const [p1, p2, delta] of transactions) {
    map[p1] = (map[p1] || 0) - delta;
    map[p2] = (map[p2] || 0) + delta;
  }
  // find all who are in debt or positve
  const balances = Object.values(map).filter(val => val !== 0);
  return dfs(balances);
};

const dfs = (balances, start = 0, minTrans = 0) => {
  const unbalanced = findUnbalanced(balances, start);
  if (unbalanced < 0) {
    return minTrans;
  }
  let result = Infinity;
  for (let i = unbalanced + 1; i < balances.length; i++) {
    if (balances[unbalanced] * balances[i] > 0) continue;
    balances[i] += balances[unbalanced];
    result = Math.min(result, dfs(balances, unbalanced + 1, minTrans + 1));
    balances[i] -= balances[unbalanced];
  }
  return result;
};

const findUnbalanced = (balances, start) => {
  for (let i = start; i < balances.length; i++) {
    if (balances[i] !== 0) {
      return i;
    }
  }
  return -1;
};
