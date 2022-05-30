function factorial(n: number) {
  if (n < 0 || n > 12) throw new RangeError("The argument must be between 0 and 12.");
  if (n === 0) return 1;
  let res = 1;
  for (let i = n; i > 1; i--) {
    res *= i;
  }
  return res;
}

console.log(factorial(3));

////////////////////////// RECURSIVE SOLUTION //////////////////////////////
function factorial2(n: number) {
  if (n < 0 || n > 12) throw new RangeError("The argument must be between 0 and 12.");
  return n <= 1 ? 1 : n * factorial2(n - 1);
}

console.log(factorial2(5));
