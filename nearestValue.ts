// Find the nearest value to the given one

function nearestValue(values: number[], search: number): number {
  let diff = values.sort((a, b) => a - b).map((a) => Math.abs(a - search));
  return values[diff.indexOf(Math.min(...diff))];
}

console.log(nearestValue([5, 10, 8, 12, 89, 100], 7));
