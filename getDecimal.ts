function getDecimal(n: number): number {
  return Math.abs(n) % 1;
}
console.log(getDecimal(-1.23252352757457788));

///////////////////////////////////////////////////////////////////////

function getDecimal2(n: number): number {
  if (!n.toString().includes(`.`)) return 0;
  return +n.toString().replace(/(-?\d+)([.])(\d+)/, `0.` + "$3");
}

console.log(getDecimal2(-1.2));

///////////////////////////////////////////////////////////////////////

