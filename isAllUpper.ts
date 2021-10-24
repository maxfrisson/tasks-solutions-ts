// Check if a given string has all symbols in upper case

function isAllUpper(text: string): boolean {
  return !/[a-z]/g.test(text);
}

console.log(isAllUpper("mixed UPPER and lower"));
