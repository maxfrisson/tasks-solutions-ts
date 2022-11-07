function sortByLength(array: string[]): string[] {
  return array.sort((a: string, b: string) => a.length - b.length);
}

console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]));
