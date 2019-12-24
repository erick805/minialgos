/*
Equations are given in the format A / B = k, where A and B are variables represented as strings, and k is a real number (floating point number).

Given some queries, return the answers. If the answer does not exist, return -1.0

Example:
  equations = [ ["a", "b"], ["b", "c"] ],
  values = [2.0, 3.0],
  queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ].

  Given a/b = 2.0, b/c = 3.0
  queries are : a/c = ?, b/a = ?, a/e = ?, a/a = ?, x/x = ?

  Output: [6.0, 0.5, -1.0, 1.0, -1.0]

Note: The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.
*/

// Adjacency List + BFS

const calcEquation = (equations, values, queries) => {
  const graph = {};

  // initialize the adjacency list
  for (let i = 0; i < equations.length; i++) {
    graph[equations[i][0]] = [];
    graph[equations[i][1]] = [];
  }
  for (let i = 0; i < equations.length; i++) {
    graph[equations[i][0]].push([equations[i][1], values[i]]);
    graph[equations[i][1]].push([equations[i][0], 1 / values[i]]);
  }

  const res = [];
  for (const input of queries) {
    res.push(evaluateInput(input, graph));
  }
  return res;
};

const evaluateInput = (input, graph) => {
  if (!(input[0] in graph) || !(input[1] in graph)) return -1;
  if (input[0] == input[1]) return 1;

  // we start with the numerator's children in the queue.
  const queue = graph[input[0]].slice();
  const checked = [];

  while (queue.length > 0) {
    // checked
    const elem = queue.shift();

    // if our child is the input's child - return the weight
    if (elem[0] == input[1]) {
      return elem[1];
    }
    checked.push(elem[0]);

    // Otherwise add the edges to the queue with updated divisors.
    const edges = graph[elem[0]];
    for (let n = 0; n < edges.length; n++) {
      const next = edges[n];
      if (checked.includes(next[0])) {
        continue;
      }
      queue.push([next[0], next[1] * elem[1]]);
    }
  }

  return -1;
};
