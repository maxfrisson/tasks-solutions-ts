// You are given a string where you have to find its first word.

function firstWord(text: string): string {
  return /[\w]+/.exec(text)![0];
}

console.log(firstWord("Hello world"));
