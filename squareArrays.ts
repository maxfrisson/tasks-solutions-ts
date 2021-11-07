// Checks the two arrays have the "same" elements.
let a = [121, 144, 19, 161, 19, 144, 19, 11];
let b = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];

function squareArrays(array1: number[], array2: number[]): boolean {
  return array1 && array2
    ? array2
        .sort((a, b) => a - b)
        .map((x) => Math.sqrt(x))
        .every((x, i) => x === array1.sort((a, b) => a - b)[i])
    : false;
}

console.log(squareArrays(a, b));


////////////////////////////////// CLEAR SOLUTION ////////////////////////////////////////
function squareArrays2(array1:number[],array2:number[]) {
  return !!array1 && !!array2 && array1.map(x=>x*x).sort().join() == array2.sort().join()
}

console.log(squareArrays2(a,b))