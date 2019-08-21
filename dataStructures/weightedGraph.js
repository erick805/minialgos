class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjancyList[vertex1].push({
      vertex2,
      weight
    });
    this.adjacencyList[vertex2].push({
      vertex1,
      weight
    });
  }
}
