function findShortestWord(s: string): number {
  return s.split(" ").sort((a, b) => a.length - b.length)[0].length;
}

console.log(findShortestWord("bitcoin take over the world maybe who knows perhaps"));
