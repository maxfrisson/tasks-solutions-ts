// You need to count the number of digits in a given string.

function countDigits(text: string): number {
  return text.match(/[/0-9]/g) ? text.match(/[/0-9]/g).length : 0;
}

console.log(countDigits("hi"));
