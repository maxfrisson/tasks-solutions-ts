// Return the values of an array that are not the odd

function noOdds(values: number[]): number[] {
  return values.filter((num) => num % 2 === 0);
}

console.log(noOdds([0, 1, 2, 3]));
