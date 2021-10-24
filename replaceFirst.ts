// The first element should become the last

function replaceFirst(values: number[]): number[] {
  let arr = [];
  arr.push(...values.slice(1), values[0]);
  return arr.includes(undefined) ? values : arr;
}

console.log(replaceFirst([1, 2, 3, 4, 5]));

///////////////////// CLEAR SOLUTION //////////////////////////
function replaceFirst2(values: number[]): number[] {
  if (values.length <= 2) {
    return values;
  }
  values.push(values.shift());
  return values;
}

console.log(replaceFirst2([5, 4, 3, 2, 1]));
///////////////////////////////////////////////////////////////
