function stray (numbers: number[]): number {
  return numbers.filter((x,i,arr) => arr.indexOf(x) === arr.lastIndexOf(x))[0]
}

console.log(stray([1,1,2]));

function stray2 (numbers: number[]): number {
  return numbers.reduce((a,b) => a ^ b)
}

console.log(stray([1,2,1, 1]));