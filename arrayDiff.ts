function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter((x) => !b.includes(x));
}

console.log(arrayDiff([1, 2, 3], [1, 2]));
