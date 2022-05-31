function toCamelCase(str: string): string {
  function upperToHyphenLower(match: string) {
    return match.replace(/[-_]/, "").toUpperCase();
  }
  return str.replace(/(.)((?<=[_-]).)/gi, upperToHyphenLower);
}

console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase(""));
console.log("asd".toUpperCase());

////////////////////////// SOLUTION #2 /////////////////////////////////
function toCamelCase2(str: string): string {
  return str.replace(/[-_]\w/gi, function (match: string) {
    return match.charAt(1).toUpperCase();
  });
}

console.log(toCamelCase2("The-Stealth-Warrior"));
console.log(toCamelCase2(""));

////////////////////////// SOLUTION #3 /////////////////////////////////
function toCamelCase3(str: string): string {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

console.log(toCamelCase3("The-Stealth-Warrior"));
console.log(toCamelCase3(""));
