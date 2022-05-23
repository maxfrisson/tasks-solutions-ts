function highestFrequency(array: string[]): string {
  return array.reduce(
    (acc: string, item: string) =>
      array.filter((v: string) => v === acc).length >=
      array.filter((v: string) => v === item).length
        ? acc
        : item,
    null
  );
}

console.log(
  highestFrequency(["abc", "bce", "ctr", "bce", "bcewe", "bce", "abc", "ctr", "fgh", "bce", "abc"])
);
