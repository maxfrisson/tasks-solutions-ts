let nthPower = (array: number[], n: number) => (array[n] ? Math.pow(array[n], n) : -1);

console.log(nthPower([1, 6], 2));
