/*
Given an undirected graph, return true if and only if it is bipartite.

A graph is considered bipartite if we can split it's set of nodes into two independent subsets A and B
such that every edge in the graph has one one node in A and another node in B.

The graph is given in the form: graph[i] is a list of indexes j for which the edge between nodes i and j exists.
Each node is an integer between 0 and graph.length - 1. There are no self edges or parallel edges: graph[i] does not contain
i, and it doesn't contain any element twice.

Example 1:
Input: [[1,3], [0,2], [1,3], [0,2]]
Output: true

Explanation:
The graph looks like this:
0----1
|    |
|    |
3----2
We can divide the vertices into two groups: {0, 2} and {1, 3}.

Example 2:
Input: [[1,2,3], [0,2], [0,1,3], [0,2]]
Output: false
Explanation:
The graph looks like this:
0----1
| \  |
|  \ |
3----2
We cannot find a way to divide the set of nodes into two independent subsets.

*/

function isBipartite(graph) {
  const colors = new Map();

  for (let edges = 0; edges < graph.length; edges++) {
    if (!dfs(graph, colors, edges, 0)) return false;
  }
  return true;
}

function dfs(graph, colors, edges, color) {
  if (!colors.has(edges)) {
    colors.set(edges, color);

    for (const vertex of graph[edges]) {
      if (
        !dfs(graph, colors, vertex, 1 - color) ||
        colors.get(vertex) === color
      )
        return false;
    }
  }
  return true;
}
