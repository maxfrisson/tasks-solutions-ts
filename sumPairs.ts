function sumPairs(ints: number[], s: number): [number, number] | void {
  if (ints.length < 2) return undefined; //not enough numbers for pair.
  let intSet = new Set();
  intSet.add(ints[0]);
  for (let i = 1; i < ints.length; ++i) {
    let needed = s - ints[i];
    if (intSet.has(needed)) {
      //check if we have already seen the number needed to complete the pair.
      return [needed, ints[i]];
    }
    intSet.add(ints[i]); //if not insert the number in set and continue.
  }
  return undefined; //No answer found
}

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));

///////////////////////////////// CLEAR SOLUTION ///////////////////////////////////////
function sumPairs2(ints: number[], s: number): [number, number] | void {
  let intSet = new Set();
  for (let i of ints) {
    if (intSet.has(s - i)) return [s - i, i];
    intSet.add(i);
  }
}

console.log(sumPairs2([1, 4, 8, 7, 3, 15], 8));
