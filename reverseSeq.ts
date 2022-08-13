const reverseSeq = (n: number) => {
  let arr: number[] = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  return arr.reverse();
};

console.log(reverseSeq(5));

/////////////////////////////////////////////////
const reverseSeq2 = (length: number) => {
  return Array.from({ length }, () => length--);
};

console.log(reverseSeq2(5));
