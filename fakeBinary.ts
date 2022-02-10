function fakeBinary(x: string): string {
  return x.replace(/\d/g, (d) => (+d < 5 ? "0" : "1"));
}

console.log(fakeBinary("45385593107843568"));
