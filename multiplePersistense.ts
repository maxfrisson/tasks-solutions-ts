function per (n: number) {
  let arr = [];
  for (let i = 0;; i++) {
    if (n.toString().length === 1) {break}
    n = n.toString().split("").reduce((a:number,b:any) => a*b*1, 1);
    arr.push(n)
  }
  return arr
}
console.log(per(69));