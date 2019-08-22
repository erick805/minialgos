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

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(val, priority) {
    this.queue.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.queue.shift();
  }

  sort() {
    this.queue.sort((a, b) => a.priority - b.priority);
  }
}
