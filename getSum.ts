function getSum(a: number, b: number): number {
  let res = 0;
  if (a <= b) {
    for (let i = a; i <= b; i++) {
      res += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      res += i;
    }
  }
  return res;
}
console.log(getSum(-1, 4));

///////////////////// RECURSIVE METHOD //////////////////////////////
function getSum2(a: number, b: number): number {
  if (a == b) return a;
  else if (a < b) return a + getSum2(a + 1, b);
  else return a + getSum2(a - 1, b);
}
console.log(getSum2(-1, 4));

/////////////////////// SHORTEST SOLUTION ////////////////////////////
function getSum3(a: number, b: number): number {
  return ((Math.abs(a - b) + 1) * (a + b)) / 2;
}
console.log(getSum3(-1, 4));
