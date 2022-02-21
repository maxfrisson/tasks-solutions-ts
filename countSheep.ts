function countSheep(num: number): string {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`;
  }
  return result;
}

console.log(countSheep(3));
/////////////////////////////////////////////////////////////////

////////////////////// RECURSION SOLUTION ///////////////////////
function countSheep2(num: number): string {
  return num > 0 ? countSheep(num - 1) + `${num} sheep...` : "";
}

console.log(countSheep2(5));
/////////////////////////////////////////////////////////////////
