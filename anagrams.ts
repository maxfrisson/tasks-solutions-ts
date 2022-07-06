function anagrams(word: string, words: string[]): string[] {
  return words.filter((x) => x.split("").sort().join("") === word.split("").sort().join(""));
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada", "aba"]));
