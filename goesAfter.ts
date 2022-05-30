function goesAfter(word: string, first: string, second: string): boolean {
  const sec = new RegExp(`(?<!${first})${second}`, 'g');
  const re = new RegExp(`${first}(?=${second})`, 'g');
  return !sec.test(word) && re.test(word);
}

console.log(goesAfter("world", "w", "o"));

console.log(goesAfter("world", "w", "r"));

console.log(goesAfter("almaz","m","a"));
