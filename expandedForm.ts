function expandedForm(num: number): string {
  return num
    .toString()
    .split("")
    .reverse()
    .map((a, i) => +a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join(" + ");
}
console.log(expandedForm(70304));

/////////////////////////////////////////////////////////////////
function expandedForm2(num: number): string {
  return String(num)
    .split("")
    .map((num, index, arr) => num + "0".repeat(arr.length - index - 1))
    .filter((num) => Number(num) != 0)
    .join(" + ");
}
console.log(expandedForm2(70304022));
