function queueTime(customers: number[], n: number): number {
  let w = new Array(n).fill(0);
  for (let t of customers) {
    
    let idx = w.indexOf(Math.min(...w));
    console.log(w);
    w[idx] += t;
  }
  return Math.max(...w);
}

console.log(queueTime([2,2,3,3,4,4], 2));
