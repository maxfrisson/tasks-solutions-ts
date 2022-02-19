function order(words: string): string {
  if (words.length === 0) return "";
  let result = [];
  words.split(" ").map((w: any) => (result[w.match(/\d/)[0] - 1] = w));
  return String(result).replace(/,/g, " ");
}

console.log(order("is2 Thi1s T4est 3a"));

function order2(words: string): string {
  return words
    .split(" ")
    .sort(function (a, b) {
      return +a.match(/\d/) - +b.match(/\d/);
    })
    .join(" ");
}

console.log(order2("is2 Thi1s T4est 3a"));
