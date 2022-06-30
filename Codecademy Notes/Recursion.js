const recursiveFactorial = n => {
  if (n === 0) {
    return 1;
  }
  if (n > 0) {
    return n * recursiveFactorial(n - 1);
  }
};

const iterativeFactorial = n => {
  result = 1;
  while (n > 0) {
    result *= n;
    n -= 1;
  }
  return result;
};

const recursiveSum = n => {
  if (n === 1) {
    return 1;
  }
  if (n > 0) {
    return n + recursiveSum(n - 1);
  }
};

module.exports = {
  recursiveFactorial,
  iterativeFactorial,
  recursiveSum,
};

console.log(recursiveSum(10)); // Prints 55
