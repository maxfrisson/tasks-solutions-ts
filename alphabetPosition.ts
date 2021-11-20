function alphabetPosition(text: string): string {
  let alphabet = " abcdefghijklmnopqrstuvwxyz";
  return text
    .toLowerCase()
    .replace(/[^a-z]/gi, "")
    .split("")
    .map((l) => alphabet.indexOf(l))
    .join(" ");
}

console.log(alphabetPosition("4!0_wq,e"));

///////////////////// SOLUTION WITH CHARCODEAT /////////////////////
function alphabetPosition2(text: string): string {
  let alphabet = " abcdefghijklmnopqrstuvwxyz";
  return text
    .toLowerCase()
    .replace(/[^a-z]/gi, "")
    .split("")
    .map((l) => l.charCodeAt(0) - 96)
    .join(" ");
}

console.log(alphabetPosition2("4!0_wq,e"));
////////////////////////////////////////////////////////////////////
