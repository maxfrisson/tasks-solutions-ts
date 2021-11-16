// Return the highest and lowest number
function highAndLow(numbers: string) {
  let arr = numbers.split(" ").map((n) => +n);
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

console.log(highAndLow("1 9 3 4 -5"));
