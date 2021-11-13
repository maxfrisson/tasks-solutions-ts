function uniqueInOrder(iterable: string | number[]) {
  let res: string[] | number[];
  if (typeof iterable === "string") {
    res = iterable.split("").filter((x, i, arr) => x != arr[i + 1]);
  } else if (typeof iterable === "object") {
    res = iterable.filter((x, i, arr) => x != arr[i + 1]);
  }

  return res;
}

console.log(uniqueInOrder([1, 2, 2, 2, 2, 3, 3, 4, 5]));

//////////////////////////// SOLUTION WITH LOOP FOR ///////////////////////////
function uniqueInOrder2(iterable: string | number[]): string[] | number[] {
  let res = [];

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] != iterable[i + 1]) res.push(iterable[i]);
  }

  return res;
}

console.log(uniqueInOrder2([1, 2, 2, 2, 2, 3, 3, 4, 5]));
///////////////////////////////////////////////////////////////////////////////

//////////////////////////// CLEAR SOLUTION WITH FILTER ///////////////////////
function uniqueInOrder3(iterable: string | (string | number)[]): string | (string | number)[] {
  return [...iterable].filter((a, i) => a !== iterable[i + 1]);
}

console.log(uniqueInOrder3([1, 2, 2, 2, 2, 3, 3, 4, 5, 4, 4, 3, 2]));
///////////////////////////////////////////////////////////////////////////////

//////////////////////////// CLEAR SOLUTION WITH FILTER.CALL //////////////////
function uniqueInOrder4(iterable: string | (string | number)[]): string[] | number[] {
  return [].filter.call(iterable, (a: string | number, i: number) => a != iterable[i + 1]);
}

console.log(uniqueInOrder4(["Saab", "Volvo", "Volvo", "Volvo", "Volvo", "BMW"]));
