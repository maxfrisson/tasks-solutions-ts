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

/////////////////////////// REDUCE SOLUTION ///////////////////////////
function generateHashtag2(str: string): string | boolean {
  let hastag = str.split(" ").reduce(function (tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, "#");

  return hastag.length == 1 || hastag.length > 140 ? false : hastag;
}

console.log(generateHashtag2("Codewars is nice"));
console.log(generateHashtag2("    hello     world   "));
console.log(generateHashtag2(" ".repeat(200)));
