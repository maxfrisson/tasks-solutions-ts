function digitalRoot(n: number) {
  if (n <= 9) return n
  let a = n.toString().split('').reduce((a,b) => +a + +b, 0)
  return digitalRoot(a)
}

console.log(digitalRoot(456));

///////////////////////// CLEVER SOLUTION /////////////////////////
let digitalRoot2 = (n: number) => (n - 1) % 9 + 1;

console.log(digitalRoot2(456));

