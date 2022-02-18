function DNAStrand(dna: string): string {
  return dna
    .split("")
    .map((x) => (x == "A" ? "T" : x == "T" ? "A" : x == "C" ? "G" : "C"))
    .join("");
}

console.log(DNAStrand("ACGA"));