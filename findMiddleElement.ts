function gimme (triplet: number[]): number {
  return triplet.indexOf([...triplet].sort((a,b)=>a-b)[1])
}

console.log(gimme([2.1, 3.2, 1.4]));
