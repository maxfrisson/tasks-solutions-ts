function replaceVowelsToMark(s: string) {
  return s.replace(/[aeiou]/gi, "!");
}
console.log(replaceVowelsToMark("!Hi! Hi!"));
