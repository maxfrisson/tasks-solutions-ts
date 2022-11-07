function getDivisorsCnt(n: number) {
  let arr: number[] = [];
  for (let i = n; i > 0; i--) {
    if (n % i === 0) arr.push(i);
  }
  return arr.length;
}

console.log(getDivisorsCnt(4));
console.log(getDivisorsCnt(10));
console.log(getDivisorsCnt(12));
