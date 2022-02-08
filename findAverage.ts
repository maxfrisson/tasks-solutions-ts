function findAverage(array: number[]) {
  return array.length > 0 ? array.reduce((a, b) => a + b) / array.length : 0;
}

console.log(findAverage([]));
