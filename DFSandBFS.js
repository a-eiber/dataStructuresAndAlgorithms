// O(v + e) time | O(v) space
// v is the number of vertices of the input graph
// e is the number of edges of the input graph
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }

  breadthFirstSearch(array) {
    const queue = [this];
    while (queue.length > 0) {
      const current = queue.shift();
      array.push(current.name);
      for (const child of current.children) {
        queue.push(child);
      }
    }
    return array;
  }
}

const graph = new Node('A');
graph.addChild('B').addChild('C').addChild('D');
graph.children[0].addChild('E').addChild('F');
graph.children[2].addChild('G').addChild('H');
graph.children[0].children[1].addChild('I').addChild('J');
graph.children[2].children[0].addChild('K');

console.log(graph.depthFirstSearch([]));
// [A, B, E, F, I, J, C, D, G, K, H]

console.log(graph.breadthFirstSearch([]));
// [A, B, C, D, E, F, G, H, I, J, K]
