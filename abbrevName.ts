function abbrevName(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0].toUpperCase())
    .join(".");
}

console.log(abbrevName("Patrick Feenan"));

function abbrevName2(name: string): string {
  return name && name.match(/\b\w/g)!.join(".").toUpperCase();
}

console.log(abbrevName2("Alex Fisher"));
