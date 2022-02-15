function oddOrEven(array: number[]): string {
  return array.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}

console.log(oddOrEven([0, -1, -5]));
