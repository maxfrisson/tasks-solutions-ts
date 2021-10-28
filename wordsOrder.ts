// Check if the  words in a list appear in the same order as in the given text.

function wordsOrder(text: string, words: string[]): boolean {
  if (new Set(words).size != words.length) return false;
  let ar = [];
  for (let i of text.split(" ")) {
    for (let j of words) {
      if (i == j) {
        ar.push(i);
        break;
      }
    }
  }
  return words.every((e, i) => e == ar[i]);
}

console.log(wordsOrder("hi world world im here", ["world", "world"]));
