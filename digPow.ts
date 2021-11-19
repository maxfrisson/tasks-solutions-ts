function digPow(n: number, p: number): number {
  let nStr = `${n}`;
  let result = 0;
  for (let i = 0; i < nStr.length; i++) {
    result += Math.pow(+nStr[i], p + i) / n;
  }
  return Number.isInteger(result) ? result : -1;
}

console.log(digPow(114, 3));

////////////////////////////// SOLUTION WITH REDUCE ////////////////////////////////
function digPow2(n: number, p: number): number {
  let sum = `${n}`
    .split("")
    .map((char) => parseInt(char))
    .reduce((sum, int, index) => sum + Math.pow(int, p + index), 0);
  let result = sum / n;
  return Number.isInteger(result) ? result : -1;
}

console.log(digPow2(114, 3));
////////////////////////////////////////////////////////////////////////////////////