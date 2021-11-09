// To square every digits of a number and concatenate them
function squareDigits(num: number): number { 
  return +num
    .toString()
    .split("")
    .map((x) => Math.pow(+x, 2))
    .join("");
}

console.log(squareDigits(3212));
