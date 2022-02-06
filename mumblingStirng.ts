function mumblingString(str: string): string {
  return str
    .toLowerCase()
    .split("")
    .map((l, i) => l.toUpperCase() + l.repeat(i))
    .join("-");
}

console.log(mumblingString("RqaEzty"));
