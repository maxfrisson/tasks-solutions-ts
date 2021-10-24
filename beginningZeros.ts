// Fint how many zero digits are at the beginning of the given string

function beginningZeros(text: string): number {
  let result = 0;
  for (let i = 0; i < text.length; i++) {
    if (+text[i] === 0) {
      result++;
    }
    return result;
  }
  return result;
}

console.log(beginningZeros("0000123000"));

//////////////////// CLEAR SOLUTION ////////////////////////
function beginningZeros2(text: string): number {
  return text.length - text.replace(/^0*/, "").length;
}
////////////////////////////////////////////////////////////
