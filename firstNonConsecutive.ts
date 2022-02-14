function firstNonConsecutive (arr: number[]): number {
  return arr.map((n, i, array) => ((array[i+1] - n) > 1) ? return array[i+1] : false)
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8]));
