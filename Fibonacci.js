// O(n) time | O(1) space
const getNthFib = n => {
  let first = 0;
  let second = 1;
  let counter = 3;

  if (n === 1) return 0;

  while (counter <= n) {
    const nextFib = first + second;
    first = second;
    second = nextFib;
    counter += 1;
  }

  return second;
};

console.log(getNthFib(6)); // 5
console.log(getNthFib(7)); // 8
console.log(getNthFib(8)); // 13

