function spinWords(str: string): string {
  return str
    .split(" ")
    .map((x) => (x.length > 4 ? x.split("").reverse().join("") : x))
    .join(" ");
}

console.log(spinWords("Welcome"));
console.log(spinWords("This is a test"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("Just kidding there is still one more"));

/////////////////////////////// REGEX REPLACE SOLUTION /////////////////////////////////////

function spinWords2(string: string): string {
  return string.replace(/\w{5,}/, (w) => w.split("").reverse().join(""));
}

console.log(spinWords2("Welcome"));
console.log(spinWords2("This is a test"));
console.log(spinWords2("Hey fellow warriors"));
console.log(spinWords2("Just kidding there is still one more"));
