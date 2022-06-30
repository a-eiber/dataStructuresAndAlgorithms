const LinkedList = require('./LinkedList');
const Node = require('./Node');

class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null).map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }
    return hashCode % this.hashmap.length;
  }

  assign(key, value) {
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmap[arrayIndex];
    console.log(`Storing ${value} at index ${arrayIndex}`);
    if (linkedList.head === null) {
      linkedList.addToHead({ key, value });
      return;
    }
    let current = linkedList.head;
    while (current) {
      if (current.data.key === key) {
        current.data = { key, value };
      }
      if (!current.next) {
        let newTail = new Node({ key, value });
        current.setNextNode(newTail);
        break;
      }
      current = current.next;
    }
  }

  retrieve(key) {
    const arrayIndex = this.hash(key);
    let current = this.hashmap[arrayIndex].head;
    while (current) {
      if (current.data.key === key) {
        console.log(
          `\nRetrieving ${current.data.value} from index ${arrayIndex}`
        );
        return current.data.value;
      }
      current = current.next;
    }
    return null;
  }
}

const myHashMap = new HashMap(3);
console.log(myHashMap.hash('id')); // Prints 1
console.log(myHashMap.hash('id')); // Prints 1

const employees = new HashMap(3);
employees.assign('34-567', 'Mara');
console.log(employees.hashmap); // Prints [null, 'Mara', null]

const glossary = new HashMap(3);
glossary.assign('semordnilap', 'Words that form different words when reversed');
console.log(glossary.retrieve('semordnilap')); // Prints Words that form different words when reversed

const birdCensus = new HashMap(16);

birdCensus.assign('mandarin duck', 'Central Park Pond'); // Prints Storing Central Park Pond at index 5
birdCensus.assign('monk parakeet', 'Brooklyn College'); // Prints Storing Brooklyn College at index 10
birdCensus.assign('horned owl', 'Pelham Bay Park'); // Prints Storing Pelham Bay Park at index 6

console.log(birdCensus.retrieve('mandarin duck')); // Prints Central Park Pond
console.log(birdCensus.retrieve('monk parakeet')); // Prints Brooklyn College
console.log(birdCensus.retrieve('horned owl')); // Prints Pelham Bay Park

module.exports = HashMap;
