function isIsogram(str: string): boolean {
  let lowerStr = str.toLowerCase();
  let uniq = new Set(lowerStr);
  return Array.from(uniq).join("") === lowerStr;
}

console.log(isIsogram("Dermatoglyphics"));

/////////////////////////////// SOLUTION WITH REGEXP ///////////////////////
function isIsogram2(str: string): boolean {
  return str.match(/([a-z]).*\1/i) ? false : true;
}

console.log(isIsogram2("Dermatoglyphics"));
////////////////////////////////////////////////////////////////////////////
