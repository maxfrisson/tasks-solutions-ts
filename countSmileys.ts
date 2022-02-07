function countSmileys(arr: string[]): number {
  return arr.filter((s) => s.match(/^[:;][~-]?[)D]$/g)).length;
}

console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]));
