function positiveSum(arr: number[]): number {
  return arr.reduce((a, b) => (b >= 0 ? a + b : a), 0);
}

console.log(positiveSum([1, -2, 3, 4, 5]));
