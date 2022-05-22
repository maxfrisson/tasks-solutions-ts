function isUnique(str: string): boolean {
  return str
    .split("")
    .sort()
    .every((a, i, arr) => a !== arr[i + 1]);
}

console.log(isUnique("12345"));

//////////////////////// SET SOLUTION /////////////////////
function isUnique2(str: string): boolean {
  let unique = new Set(str);
  return str.length === unique.size;
}

console.log(isUnique2("afghFa"));
