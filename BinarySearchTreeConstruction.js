class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Average: O(log(n)) time | O(1) space
  // Worst: O(n) time | O(1) space
  insert(value) {
    let currentNode = this;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }

  // Average: O(log(n)) time | O(1) space
  // Worst: O(n) time | O(1) space
  contains(value) {
    let currentNode = this;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // Average: O(log(n)) time | O(1) space
  // Worst: O(n) time | O(1) space
  remove(value, parentNode = null) {
    let currentNode = this;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        if (currentNode.left && currentNode.right) {
          currentNode.value = currentNode.right.getMinValue();
          // currentNode.value = smallest value of right subtree
          currentNode.right.remove(currentNode.value, currentNode);
        } else if (parentNode === null) {
          if (currentNode.left) {
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right) {
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
            currentNode.value === null;
          }
        } else if (parentNode.left === currentNode) {
          parentNode.left =
            currentNode.left !== null ? currentNode.left : currentNode.right;
        } else if (parentNode.right === currentNode) {
          parentNode.right =
            currentNode.left !== null ? currentNode.left : currentNode.right;
        }
        break;
      }
    }
    return this;
  }

  getMinValue() {
    let currentNode = this;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}

// Test Cases
function testCase() {
  const root = new BST(10);
  root.left = new BST(5);
  root.left.left = new BST(2);
  root.left.left.left = new BST(1);
  root.left.right = new BST(5);
  root.right = new BST(15);
  root.right.left = new BST(13);
  root.right.left.right = new BST(14);
  root.right.right = new BST(22);

  root.insert(12);
  console.log(root.right.left.left.value); // 12

  root.remove(10);
  console.log(root.contains(10)); // false
  console.log(root.value); // 12
  console.log(root.contains(15)); // true
}

testCase();
