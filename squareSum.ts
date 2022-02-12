function squareSum(numbers: number[]): number {
  return numbers.length && numbers.map((n) => Math.pow(n, 2)).reduce((a, b) => a + b);
}

console.log(squareSum([]));
