// Remove from the array all  of the elements before the given one

function removeAllBefore(values: number[], b: number): number[] {
  return values.indexOf(b) == -1 ? values : values.slice(values.indexOf(b));
}

console.log(removeAllBefore([1, 1, 5, 6, 7], 2));
