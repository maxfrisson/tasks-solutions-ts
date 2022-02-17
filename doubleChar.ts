function doubleChar(str: string): string {
  return str
    .split("")
    .map((l) => l + l)
    .join("");
}

console.log(doubleChar("abcd"));

function doubleChar2(str: string): string {
  return str.replace(/(.)/g, "$1$1");
}

console.log(doubleChar2("abcd"));
