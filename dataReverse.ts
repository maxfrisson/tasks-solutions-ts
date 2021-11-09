function dataReverse(data: number[]): number[] {
  console.log("123");
  let arr = [];
  for (let i = 0; i < data.length; i += 8) {
    arr.unshift(...data.slice(i, i + 8));
  }
  return arr;
}

console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0,
  ])
);

///////////////////////// CLEAR SOLUTION //////////////////////////////////////////////////////////
const dataReverse2 = (data: number[]) =>
  data.join("").match(/\d{8}/g).reverse().join("").split("").map(Number);

console.log(
  dataReverse2([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0,
  ])
);
///////////////////////////////////////////////////////////////////////////////////////////////////
