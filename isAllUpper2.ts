// Check if a given string has all symbols in upper case.
// If the string is empty or doesn't have any letter in it - function should return False.

function isAllUpper2(text: string): boolean {
  return text.length == 0 || /^[\s || 0-9]/.test(text) ? false : !/[a-z]/g.test(text);
}

console.log(isAllUpper2("ASD"));
