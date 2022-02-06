// Convert binary to integer

function binaryToInt(arr: number[]): number {
  return parseInt(arr.join(""), 2);
}

console.log(binaryToInt([1, 0, 1, 1]));
