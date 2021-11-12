function findUniq(arr: number[]): number {
  return arr.sort()[0] !== arr.sort()[1] ? +arr.sort()[0] : arr.sort()[arr.length - 1];
}
console.log(findUniq([1, 1, 10, 1, 1, 1]));

//////////////////////////// SECOND SOLUTION //////////////////////////////////////
function findUniq2(arr: number[]): number {
  return +arr.filter((value) => {
    console.log(arr.lastIndexOf(value));

    return arr.indexOf(value) == arr.lastIndexOf(value);
  });
}

console.log(findUniq2([1, 1, 10, 1, 1, 1]));
