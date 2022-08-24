function reverseLetter (str: string): string | undefined {
  return str.match(/[a-z]/g)?.reverse().join("")
}

console.log(reverseLetter("ultr53o?n"));
