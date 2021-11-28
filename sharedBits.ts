function sharedBits(a: number, b: number): boolean {
  let x = a.toString(2).split("").reverse();
  let y = b.toString(2).split("").reverse();
  let res = 0;
  let len = Math.min(x.length, y.length);
  for (let i = 0; i < len; i++) {
    if (+x[i] + +y[i] == 2) res++;
  }
  if (res > 1) return true;
  return false;
}

console.log(sharedBits(23, 7));

////////////////////// CLEAR SOLUTION ////////////////////////
function sharedBits2(a: number, b: number): boolean {
  // return (a & b).toString(2).replace(/0/g, '').length > 1
  return a & b & ((a & b) - 1) ? true : false;
}

console.log(sharedBits2(23, 7));
//////////////////////////////////////////////////////////////

/////////////////// SOLUTION WITH REPLACE ////////////////////
function sharedBits3(a: number, b: number): boolean {
  return (a & b).toString(2).replace(/0/g, "").length > 1;
}

console.log(sharedBits3(23, 7));
//////////////////////////////////////////////////////////////
