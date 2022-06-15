class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  setTail(node) {
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {}

  removeNodesWithValue(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        this.remove(current);
      }
      current = current.next;
    }
  }

  remove(node) {
    if (!node) return;

    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;

    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;

    node.prev = null;
    node.next = null;
  }

  containsNodeWithValue(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}
