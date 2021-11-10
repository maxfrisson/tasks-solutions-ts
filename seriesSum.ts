function seriesSum(n: number): string {
  let series = 1 + 1 / 4;
  let x = 4;
  if (n === 0) {
    series = 0;
  } else if (n === 1) {
    series = 1;
  } else if (n === 2) {
    series = 1.25;
  } else {
    for (let i = 0; i < n - 2; i++) {
      x += 3;
      series += 1 / x;
      console.log(series);
    }
  }
  return series.toFixed(2);
}

console.log(seriesSum(3));

//////////////////////////////// CLEAR SOLUTION ///////////////////////////////////
function seriesSum2(n: number): string {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + i * 3);    
  }
  return sum.toFixed(2);
}
console.log(seriesSum2(3));
///////////////////////////////////////////////////////////////////////////////////
