// find out how many zeros a given number has at the end

function endZeros(value: number): number {
  let str = value.toString().split("").reverse();
  console.log(str[0]);
  let n = 0;
  if (str.length < 2 && str[0] == `0`) {
    return 1;
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str[i] == `0`) {
        n++;
      } else {
        return n;
      }
    }
  }
}

console.log(endZeros(9000));

/////////////////// CLEAR SOLUTION ////////////////////////////////////////
function endZeros2(value: number): number {
  return value == 0 ? 1 : value % 10 == 0 ? 1 + endZeros(value / 10) : 0;
}
///////////////////////////////////////////////////////////////////////////
