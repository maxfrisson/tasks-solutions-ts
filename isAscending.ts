function isAscending(values: number[]): boolean {
  let arr2 = values.slice(0).sort((a, b) => a - b);

  return values.length != 0 && values.every((n) => n == values[values.indexOf(n) + 1])
    ? false
    : arr2.every((x) => arr2.indexOf(x) == values.indexOf(x));
}

console.log(isAscending([-5, 10, 99, 123456]));
