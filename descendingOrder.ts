function descendingOrder(n: number): number {
  return +`${n}`
    .split("")
    .sort((a, b) => +b - +a)
    .join("");
}

console.log(descendingOrder(1021345));
