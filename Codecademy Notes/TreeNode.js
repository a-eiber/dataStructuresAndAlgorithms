class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild(child) {
    if (child instanceof TreeNode) {
      this.children.push(child);
    } else {
      this.children.push(new TreeNode(child));
    }
  }

  removeChild(childToRemove) {
    const length = this.children.length;
    this.children = this.children.filter(child => {
      if (childToRemove instanceof TreeNode) {
        return childToRemove !== child;
      } else {
        return childToRemove !== child.data;
      }
    });

    if (length === this.children.length) {
      this.children.forEach(child => child.removeChild(childToRemove));
    }
  }

  print(level = 0) {
    let result = '';
    for (let i = 0; i < level; i++) {
      result += '-- ';
    }
    console.log(`${result}${this.data}`);
    this.children.forEach(child => child.print(level + 1));
  }

  depthFirstTraversal() {
    console.log(this.data);
    this.children.forEach(child => child.depthFirstTraversal());
  }

  breadthFirstTraversal() {
    let queue = [this];
    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.data);
      queue = queue.concat(current.children);
    }
  }
}

// EXAMPLE:

const menu = new TreeNode('Menu');

const entries = {
  Breakfast: ['Cereal', 'BBQ Chicken', 'Oatmeal'],
  Lunch: ['Soup', 'Sandwich', 'Lasagna'],
  Dinner: ['Yogurt', 'Filet Mignon', 'Fish Florentine'],
};

const meals = Object.keys(entries);
for (let meal = 0; meal < meals.length; meal++) {
  menu.addChild(meals[meal]);
  const entryList = entries[meals[meal]];
  entryList.forEach(entry => {
    menu.children[meal].addChild(entry);
  });
}

menu.removeChild('BBQ Chicken');
menu.removeChild('Yogurt');

menu.data = 'Corrected Menu';
menu.children[0].addChild('Yogurt');
menu.children[2].addChild('BBQ Chicken');

menu.print();
menu.depthFirstTraversal();

module.exports = TreeNode;
