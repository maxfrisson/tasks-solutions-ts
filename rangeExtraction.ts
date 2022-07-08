function rangeExtraction(arr: any[]) {
  let res = [arr[0]];
  arr.reduce((acc, cur, curIdx, arr) => {
    if (Math.abs(acc - cur) === 1 && Math.abs(cur - arr[curIdx + 1]) === 1) {
      return (acc = cur);
    } else if (Math.abs(acc - cur) !== 1 && Math.abs(cur - arr[curIdx + 1]) === 1) {
      res.push(cur);
      return (acc = cur);
    } else if (Math.abs(acc - cur) === 1 && Math.abs(cur - arr[curIdx + 1]) !== 1) {
      if (Math.abs(cur - res[res.length - 1]) === 1) {
        res.push(cur);
        return (acc = cur);
      }
      res[res.length - 1] += "-" + cur;
      return (acc = cur);
    } else if (Math.abs(acc - cur) !== 1 && Math.abs(cur - arr[curIdx + 1]) !== 1) {
      res.push(cur);
      return (acc = cur);
    }
  });

  return res.join(",");
}

console.log(
  rangeExtraction([
    -13, -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ])
);

/////////////////////////////////////////////////////////////////////////////////////

const solution = (list: any[]) =>
  list.reduce((acc, curr, i) => {
    if (i == 0) return curr.toString();
    if (list[i - 1] == curr - 1 && list[i + 1] == curr + 1) return acc;
    if (list[i - 2] == curr - 2 && list[i - 1] == curr - 1) return acc + "-" + curr;
    return acc + "," + curr;
  });

console.log(
  solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])
);
