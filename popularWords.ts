// Determine the popularity of certain words in the text

function popularWords(text: string, words: string[]) {
  let str = text.toLowerCase().split(/\s+/);
  let dic = {};
  for (let i of words) {
    dic[i] = str.filter((x) => x == i).length;
  }
  return dic;
}

console.log(
  popularWords(
    `
When I was One
I had just begun
When I was Two
I was nearly new`,
    ["i", "was", "three", "near"]
  )
);
