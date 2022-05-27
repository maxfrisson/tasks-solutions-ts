function firstNonConsecutive(arr: number[]): number {
  if (arr.length < 1) return null
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === undefined) return null
    if ((arr[i + 1] - arr[i]) !== 1 ) return arr[i + 1]
  }
  return null
}

console.log(firstNonConsecutive([1, 2, 3, 5, 6, 7, 8]));
console.log(firstNonConsecutive([8,9,10,11,12,13,14,15,16,17]));
