function findOutlier(integers: number[]): number {
  let odd = integers.filter((n: number) => n % 2);
  let even = integers.filter((n: number) => !(n % 2));
  return odd.length === 1 ? odd[0] : even[0];
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
