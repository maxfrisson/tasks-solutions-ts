function isAnagram(test: string, original: string): boolean {
  return (
    test.toLowerCase().split("").sort().join("") ===
    original.toLowerCase().split("").sort().join("")
  );
}

console.log(isAnagram("Buckethead", "DeathCubeK"));
