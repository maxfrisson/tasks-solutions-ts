function allAnagrams(array: string[]): boolean {
  return array
    .map((x) => x.split("").sort().join(""))
    .every((a, _, arr) => a == arr[arr.length - 1]);
}

console.log(allAnagrams(["abcd", "bcda", "cabd", "cabd"]));
