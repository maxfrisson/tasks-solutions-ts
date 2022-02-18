function DNAStrand(dna: string): string {
  return dna
    .split("")
    .map((x) => (x == "A" ? "T" : x == "T" ? "A" : x == "C" ? "G" : "C"))
    .join("");
}

console.log(DNAStrand("ACGA"));

/////////////////////// REPLACE SOLUTION ///////////////////////////////////

function DNAStrand2(dna: string): string {
  let pairs = { A: "T", T: "A", C: "G", G: "C" };
  return dna.replace(/./g, (x) => pairs[x]);
}

console.log(DNAStrand2("ATCG"));