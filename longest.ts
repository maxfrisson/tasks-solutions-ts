function longest(s1: string, s2: string): string {
  return new Array(...new Set(s1 + s2)).sort().join("");
}

console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
