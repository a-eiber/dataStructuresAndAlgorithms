// Breadth First Search
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length;

  while (right > left) {
    const indexToCheck = Math.floor((left + right) / 2);
    const checking = arr[indexToCheck];
    console.log(
      `Checking value at index ${indexToCheck}: ${arr[indexToCheck]}`
    );

    if (checking === target) {
      return indexToCheck;
    } else if (target > checking) {
      left = indexToCheck + 1;
    } else {
      right = indexToCheck;
    }
  }
  return null;
};

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 71;

const targetIndex = binarySearch(searchable, target);

console.log(
  `Found! The target is at index ${targetIndex}: ${searchable[targetIndex]}`
);

module.exports = { binarySearch };
