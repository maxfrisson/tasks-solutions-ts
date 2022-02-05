// Write the function that returns reverse string

function reversedString(str: string) {
  return str.split("").reverse().join("");
}

console.log(reversedString("world"));
