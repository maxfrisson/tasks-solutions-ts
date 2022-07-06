function sumTwoArrays(array1: number[], array2: number[]): number[] {
  if (array1.length === 0 && array2.length === 0) return [];
  let res = (+array1.join("") + +array2.join("")).toString().split("");
  if (res[0] === "-") return [res[0] + res[1], ...res.slice(2)].map((x) => Number(x));
  return res.map((x) => Number(x));
}

console.log(sumTwoArrays([], []));

///////////////////////////////////////////////////////////////////////////////////////

const sumTwoArrays2 = (arr1: number[], arr2: number[]) =>
  arr1.length || arr2.length
    ? `${+arr1.join("") + +arr2.join("")}`.match(/-?\d/g)!.map(Number)
    : [];
console.log(sumTwoArrays2([3, 2, 6, 6], [-7, 2, 2, 8]));
