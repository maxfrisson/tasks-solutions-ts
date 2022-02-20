function getMiddle(s: string): string {
  let mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : s[mid - 1] + s[mid];
}

console.log(getMiddle("middle"));
////////////////////////////////////////////////////////////////////////////////

////////////////////////////  SUBSTRING SOLUTION  //////////////////////////////
function getMiddle2(s: string): string {
  return s.substring(Math.ceil(s.length / 2) - 1, Math.floor(s.length / 2) + 1);
}

console.log(getMiddle2("middle"));
////////////////////////////////////////////////////////////////////////////////

/////////////////////////////  SLICE SOLUTION  /////////////////////////////////
function getMiddle3(s: string): string {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

console.log(getMiddle3("test"));
////////////////////////////////////////////////////////////////////////////////
