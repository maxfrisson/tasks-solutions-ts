function evenOddCapitalize(s: string): [string, string] {
  return [
    s
      .split("")
      .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char))
      .join(""),
    s
      .split("")
      .map((char, index) => (index % 2 !== 0 ? char.toUpperCase() : char))
      .join(""),
  ];
}

console.log(evenOddCapitalize("abcdef"));
