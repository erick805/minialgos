// Graphs

// A graph structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

// Nodes + Connections

// Uses for graphs
// social networks
// location/mapping
// routing algorithims
// visual hierarchy
// file system optimizations
// EVERYWHERE!

// Undirected Graph
// no direction to the connections(edge)

// Directed Graph
// direction is involved in connections(edge)

// Weighted Graph
// each edge has a weight associated with it.

// Unweighted Graph
// each edge has no weight associated with it.

// Undirected Graph

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
    if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);
  }
}
