function groupBy(array: any[], fn: any) {
  const res = {};

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const key = typeof fn === "function" ? fn(current) : current[fn];

    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(current);
  }

  return res;
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(["one", "two", "three"], "length"));

function groupByReduce(array: any, fn: any): any {
  return array.reduce((res: { [x: string]: any[] }, current: { [x: string]: any }) => {
    const key = typeof fn === "function" ? fn(current) : current[fn];

    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(current);

    return res;
  }, {});
}

console.log(groupByReduce([6.1, 4.2, 6.3], Math.floor));
console.log(groupByReduce(["one", "two", "three"], "length"));
