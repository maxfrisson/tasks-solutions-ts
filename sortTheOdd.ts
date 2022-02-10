function sortTheOdd(array: number[]): number[] {
  let oddArr = array.filter((n) => n % 2).sort((a, b) => b - a);
  return array.map((n) => (n % 2 ? oddArr.pop() : n));
}

console.log(sortTheOdd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
