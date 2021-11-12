function findEvenIndex(arr: number[]): number {
  let sum = arr.reduce((a, b) => a + b),
    leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];

    if (sum === leftSum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));

///////////////////////////// CLEVER SOLUTION ////////////////////////////////
function findEvenIndex2(arr: number[]): number {
  const sum = (arr) => arr.reduce((a, b) => a + b, 0);

  return arr.findIndex((val, idx) => sum(arr.slice(0, idx)) === sum(arr.slice(idx + 1)));
}

console.log(findEvenIndex2([1, 2, 3, 4, 5, 6]));
