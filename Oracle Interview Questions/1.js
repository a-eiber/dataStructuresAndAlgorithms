// windowSize = 3;

// add(1) => getAverage() = 1 / 1 = 1;
// add(5) => getAverage() = 1 + 5 / 2 = 3;
// add(10) => getAverage() = 1 + 5 + 10 / 3 = ?;
// add(7) => getAverage() = 5 + 10 + 7 / 3 = ?;
// add(8) => getAverage() = 10 + 7 + 8 / 3 = ?;

// add() and getAverage() in O(1)

class List {
  constructor(windowSize) {
      this.windowSize = windowSize
      this.sum = 0
      this.queue = []
  }

  add(n) {
      if (this.queue.length >= this.windowSize) {
          let oldNum = this.queue.shift()
          this.queue.push(n)
          this.sum = this.sum - oldNum + n
      }
      if (this.queue.length < this.windowSize) {
          this.queue.push(n)
          this.sum = this.sum + n
      }
  }

  getAverage() {
      if (this.queue.length < this.windowSize) {
          return this.sum / this.queue.length
      }
      return this.sum / this.windowSize
  }
}

const list = new List (3)
list.add(1)
console.log(list.getAverage())
list.add(5)
console.log(list.getAverage())
list.add(10)
console.log(list.getAverage())
list.add(7)
console.log(list.getAverage())


// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();
// });

// function readLine() {
//     return input_stdin_array[input_currentline++];
// }

// function addNumbers(a, b) {
//   return a+b
// }


// function main() {
//     var a = parseInt(readLine());
//     var b = parseInt(readLine());;

//     var res = addNumbers(a, b);
//     console.log("The sum is " + res);
// }
