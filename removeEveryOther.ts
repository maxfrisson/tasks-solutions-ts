function removeEveryOther(arr: (string | number | number[])[]): (string | number | number[])[] {
  return arr.filter((n, i, arr) => !(i % 2));
}

console.log(removeEveryOther([[1, 2]]));
