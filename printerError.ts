function printerError(s: string) {
  return `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
}

console.log(printerError("aaabbbbhaijjjmxxxewewe"));
