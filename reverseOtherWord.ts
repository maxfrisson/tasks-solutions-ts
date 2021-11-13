// Reverse every other word in the string
function reverseOtherWord(str) {
  return str
    .split(" ")
    .filter((x) => x != "")
    .map((word, i) => {
      console.log(word.split(",").reverse().join(","));

      if (i % 2 !== 0 && word.match(/,/))
        return word.split("").reverse().join("").split(",").reverse().join(",");
      if (i % 2 !== 0 && !word.match(/,/)) return word.split("").reverse().join("");
      return word;
    })
    .join(" ");
}

console.log(reverseOtherWord(" I really don't like, reversing strings!"));
