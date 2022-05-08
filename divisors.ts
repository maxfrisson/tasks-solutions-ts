function divisors(n: number): number[] | string {
  let res = [];
  for (let i = n - 1; i > 1; i--) {
    let dif = n / i;
    if (Number.isInteger(dif)) res.push(dif);
  }

  return res.length === 0 ? `${n} is prime` : res;
}

console.log(divisors(12));
console.log(divisors(25));
console.log(divisors(13));
