// Depth First Search
class BinaryTree {
  constructor(value, depth = 1) {
    this.value = value;
    this.depth = depth;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BinaryTree(value, this.depth + 1);
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BinaryTree(value, this.depth + 1);
      }
    }
  }

  getNodeByValue(value) {
    if (this.value === value) {
      return this;
    } else if (this.left && value < this.value) {
      return this.left.getNodeByValue(value);
    } else if (this.right) {
      return this.right.getNodeByValue(value);
    } else {
      return null;
    }
  }

  depthFirstTraversal() {
    if (this.left) {
      this.left.depthFirstTraversal();
    }
    console.log(`Depth=${this.depth}, Value=${this.value}`);
    if (this.right) {
      this.right.depthFirstTraversal();
    }
  }
}

// const bt = new BinaryTree(100);

// // insert values to the BinaryTree here
// bt.insert(50);
// bt.insert(125);
// bt.insert(75);
// bt.insert(25);

// console.log(bt.getNodeByValue(75));
// // Prints BinaryTree {value: 75, depth: 3, left: null, right: null}
// console.log(bt.getNodeByValue(55)); // Prints null

// console.log(bt);
// /* Prints:

//       100
//   50      125
// 25  75

// */

// ANOTHER EXAMPLE:
const bt2 = new BinaryTree(15);
let numbers = [12, 20, 10, 13, 18, 22, 8, 11, 12, 14, 16, 19, 21, 25];

for (let i = 0; i < numbers.length; i++) {
  bt2.insert(numbers[i]);
}
console.log(`Inserted [ ${numbers} ] to binary tree \n`);
console.log('Depth First Traversal \n');
bt2.depthFirstTraversal();

module.exports = BinaryTree;
