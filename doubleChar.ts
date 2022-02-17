function doubleChar(str: string): string {
  return str
    .split("")
    .map((l) => l + l)
    .join("");
}

console.log(doubleChar("abcd"));
