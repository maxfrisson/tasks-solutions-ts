function multiplesThreeOrFive(s:number) {
  let res:number[] = [];
  for (let i = 1; i < s; i++) {
    if (i % 3 === 0 || i % 5 === 0) res.push(i)
  }
  return res.length ? res.reduce((a,b) => a+b) : 0
}

console.log(multiplesThreeOrFive(10));
