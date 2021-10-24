// Return a given string in reverse order

function backwardString(value: string): string {
  return value.split("").reverse().join("");
}

console.log(backwardString("123456"));
