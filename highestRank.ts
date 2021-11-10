function highestRank(arr: number[]): number {
  let res = [];
  for (let x of arr) {
    let count = 0;

    for (let i of arr) {
      if (i == x) {
        count++;
      }
    }
    res.push(count);
  }
  return arr[res.indexOf(Math.max(...res))];
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));

//////////////////////////// CLEAR SOLUTION ////////////////////////////////

function highestRank2(arr: number[]): number {
  return arr.sort(
    (a, b) => arr.filter((i) => i === b).length - arr.filter((i) => i === a).length
  )[0];
}

console.log(highestRank2([12, 10, 8, 12, 7, 6, 4, 10, 12]));
