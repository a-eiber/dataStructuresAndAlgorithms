class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time | O(1) space
function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
  while (currentNode) {
    let nextNode = currentNode.next;
    while (nextNode && nextNode.value === currentNode.value) {
      nextNode = nextNode.next;
    }
    currentNode.next = nextNode;
    currentNode = nextNode;
  }
  return linkedList;
}
