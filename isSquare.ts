// Return 'true' if values square is integer
function isSquare(n: number): boolean {
  return Number.isInteger(Math.sqrt(n));
}

console.log(isSquare(26));
