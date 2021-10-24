// Determine wich digit is the biggest

function maxDigit(value: number): number {
  return +value
    .toString()
    .split("")
    .sort((a: any, b: any) => b - a)[0];
}

console.log(maxDigit(3745));

///////////////// CLEAR SOLUTION //////////////////////////////
function maxDigit2(value: number): number {
  const digits = String(value)
    .split("")
    .map((c) => +c);
  return Math.max(...digits);
}
console.log(maxDigit2(37459));
///////////////////////////////////////////////////////////////
