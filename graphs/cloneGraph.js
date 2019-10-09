/*
Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

Example:

Input:
{"$id":"1","neighbors":[{"$id":"2","neighbors":[{"$ref":"1"},{"$id":"3","neighbors":[{"$ref":"2"},{"$id":"4","neighbors":[{"$ref":"3"},{"$ref":"1"}],"val":4}],"val":3}],"val":2},{"$ref":"4"}],"val":1}

Explanation:
Node 1's value is 1, and it has two neighbors: Node 2 and 4.
Node 2's value is 2, and it has two neighbors: Node 1 and 3.
Node 3's value is 3, and it has two neighbors: Node 2 and 4.
Node 4's value is 4, and it has two neighbors: Node 1 and 3.
*/

/*
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */

// deep copy = each copy of the node and connections needs to be a new copy.

// Approach
// starting node - do a BFS, get the neighbors, check if we have made node, if not we create node.
// use hash map - where the value is the key, node itself is the value
// check priority queue, and see if nodes are in hash map, if not add to hash map.
/* {
  (1: node(1)), (2, node(2), (4: node(4)))
}
*/
// use a queue
// queue = [3]
// node = 1

// v = # number of vertices in the graph

function cloneGraph(node) {
  // base case when graph is empty return null
  if (!node) return null;
  // if not empty, initiliaze queue with reference node: node
  let pq = [node];
  // create root node (reference node)
  let rootCopy = new Node(node.val, []);
  // initialize hashMap
  // put the root in hashMap
  let hashMap = new Map();
  hashMap.set(node, rootCopy);
  // perform bfs, continue as long as queue is not empty
  while (pq.length) {
    // take the current element from queue
    let currNode = pq.shift();
    // iterate neighbors
    for (let neighbor of currNode.neighbors) {
      // check if neighbors is in hashMap, if neighbors are not in hashmap
      if (!hashMap.has(neighbor)) {
        // create node(neighbor)
        let newNode = new Node(neighbor.val, []);
        // add node to hashMap key is value, and value is node(neighbor)
        hashMap.set(neighbor, newNode);
        // append original neighbor node to queue
        pq.push(neighbor);
      }
      // add the neighbor to current node.neighbors
      hashMap.get(currNode).neighbors.push(hashMap.get(neighbor));
    }
  }
  return hashMap.get(node);
}
