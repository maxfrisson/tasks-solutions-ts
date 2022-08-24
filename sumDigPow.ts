function sumDigPow(a: number, b: number): number[] {
  let result: number[] = [];

  for (let i = a; i <= b; i++) {
    let res = i
      .toString()
      .split("")
      .map((n, i) => Math.pow(+n, i + 1))
      .reduce((a, b) => a + b);
    if (res === i) result.push(res);
  }

  return result;
}

console.log(sumDigPow(1, 2646799));

/////////////////////// O(n) SOLUTION //////////////////////////////
function sumDigPow2(a: number, b: number): number[] {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 135, 175, 518, 598, 1306, 1676, 2427, 2646798];
  return arr.filter((n) => n >= a && n <= b);
}

console.log(sumDigPow2(1, 10000000));
