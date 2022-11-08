function minValue(values: number[]): number {
  let res: number[] = [];
  let unique = new Set(values.sort((a: number, b: number) => a - b));
  res.push(...unique);
  return +res.reduce((a, b) => a + b, "");
}

console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]));
