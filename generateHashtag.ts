function generateHashtag(str: string): string | boolean {
  let result = str
    .trim()
    .split(" ")
    .map((x) => x.replace(/^(\w)/, (_, c) => c.toUpperCase()))
    .join("");
  return result.length > 139 || !str || !result ? false : "#" + result;
}

console.log(generateHashtag("Codewars is nice"));
console.log(generateHashtag("    hello     world   "));
console.log(generateHashtag(" ".repeat(200)));
