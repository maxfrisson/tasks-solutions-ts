function removeSmallest(numbers: number[]): number[] {
  let res = [...numbers];
  let min = Math.min(...res);
  res.splice(numbers.indexOf(min), 1);
  return res;
}

console.log(removeSmallest([2, 2, 1, 2, 1]));

//////////////////////// FILTER SOLUTION /////////////////////////
function removeSmallest2(numbers: number[]): number[] {
  let min = Math.min(...numbers);
  return numbers.filter((_, i, arr) => i !== arr.indexOf(min));
}

console.log(removeSmallest2([2, 2, 1, 2, 1]));
