// Find an index of the second occurrence of the second string in the first one.

function secondIndex(text: string, symbol: string): number | undefined {
  let result = text.indexOf(symbol, text.indexOf(symbol) + 1)
  return result < 0 ? undefined : result;
}

console.log(secondIndex("sims", "s"))