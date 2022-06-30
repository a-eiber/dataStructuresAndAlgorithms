const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    if (removedHead.next) {
      this.head = removedHead.next;
    }
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.next;
    }
    output += '<tail>';
    console.log(output);
  }

  findNodeIteratively(data) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  findNodeRecursively(data, currentNode = this.head) {
    if (currentNode === null) {
      return null;
    } else if (currentNode.data === data) {
      return currentNode;
    } else {
      return this.findNodeRecursively(data, currentNode.next);
    }
  }

  swapNodes(data1, data2) {
    console.log(`Swapping ${data1} and ${data2}:`);

    let node1Prev = null;
    let node2Prev = null;
    let node1 = this.head;
    let node2 = this.head;

    if (data1 === data2) {
      console.log('Elements are the same - no swap to be made');
      return;
    }

    while (node1 !== null) {
      if (node1.data === data1) {
        break;
      }
      node1Prev = node1;
      node1 = node1.getNextNode();
    }

    while (node2 !== null) {
      if (node2.data === data2) {
        break;
      }
      node2Prev = node2;
      node2 = node2.getNextNode();
    }

    if (node1 === null || node2 === null) {
      console.log('Swap not possible - one or more element is not in the list');
      return;
    }

    if (node1Prev === null) {
      this.head = node2;
    } else {
      node1Prev.setNextNode(node2);
    }

    if (node2Prev === null) {
      this.head = node1;
    } else {
      node2Prev.setNextNode(node1);
    }

    let temp = node1.getNextNode();
    node1.setNextNode(node2.getNextNode());
    node2.setNextNode(temp);
  }
}

// const seasons = new LinkedList();
// seasons.printList();

// seasons.addToHead('summer');
// seasons.addToHead('spring');
// seasons.printList();

// seasons.addToTail('fall');
// seasons.addToTail('winter');
// seasons.printList();

// seasons.removeHead();
// seasons.printList();

// seasons.swapNodes('summer', 'fall');
// seasons.printList();

module.exports = LinkedList;
