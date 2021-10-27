// Check if a given string has all symbols in upper case.
// If the string is empty or doesn't have any letter in it - function should return False.

function isAllUpper2(text: string): boolean {
  return text.length != 0 ? !/[a-z]/g.test(text) : false;
}

console.log(isAllUpper2(""));
