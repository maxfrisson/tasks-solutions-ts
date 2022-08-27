function sum(nums: number[], target: number): number[] {
  let result: number[] = [];
  nums.map((x) => {
    for (let i = 0; i < nums.length; i++) {
      if (x + nums[i] === target && i !== nums.indexOf(x)) result.push(nums.indexOf(x), i);
    }
  });
  return [result[0], result[1]];
}

console.log(sum([2, 7, 11, 15], 9));
