// O(log(n)) time | O(1) space
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let potentialMatch = array[middle];

    if (target === potentialMatch) return middle;
    if (target < potentialMatch) right = middle - 1;
    if (target > potentialMatch) left = middle + 1;
  }
  return -1;
}

// Tests
console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33)); // 3
console.log(binarySearch([1, 5, 23, 111], 111)); // 3
console.log(binarySearch([1, 5, 23, 111], 5)); // 1
