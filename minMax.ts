function minMax(arr: number[]): number[] {
  return [Math.min(...arr), Math.max(...arr)]
}

console.log(minMax([1,2,3,4,5]));
