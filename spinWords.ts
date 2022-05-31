function spinWords (str: string): string {
  return str.split(" ").map(x => x.length > 4 ? x.split("").reverse().join("") : x).join(" ")
}

console.log(spinWords("Welcome"))
console.log(spinWords("This is a test"))
console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("Just kidding there is still one more"))