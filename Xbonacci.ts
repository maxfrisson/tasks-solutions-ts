function Xbonacci(signature: number[], n: number): number[] {
  let result = [...signature];
  for (let i = 0; i < n - signature.length; i++) {
    result.push(
      result.reduceRight(function (prev, cur, index, arr): number {
        if (index >= result.length - signature.length) return prev + cur;
        return prev;
      })
    );
  }
  return result.slice(0, n);
}

console.log(Xbonacci([19, 20, 7, 9, 2, 16, 0, 17, 6, 14, 7, 0, 11, 7, 18, 5, 19, 1, 12], 12));
////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////// SOLUTION WITH WHILE ///////////////////////////////////////
function Xbonacci2(signature: number[], n: number): number[] {
  let result = signature.slice(0, n);
  let length = signature.length;
  while (result.length < n) {
    result.push(result.slice(-length).reduce((a, b) => a + b));
  }
  return result;
}

console.log(Xbonacci2([19, 20, 7, 9, 2, 16, 0, 17, 6, 14, 7, 0, 11, 7, 18, 5, 19, 1, 12], 12));
////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////// SOLUTION WITH FOR /////////////////////////////////////////
function Xbonacci3(signature: number[], n: number): number[] {
  let len = signature.length;
  for (let i = len; i < n; i++) {
    signature[i] = signature.slice(i - len).reduce((a, b) => a + b);
  }
  return signature.slice(0, n);
}

console.log(Xbonacci3([19, 20, 7, 9, 2, 16, 0, 17, 6, 14, 7, 0, 11, 7, 18, 5, 19, 1, 12], 12));
