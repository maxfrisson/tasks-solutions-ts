function dir(arr: string[]) {
  const opposites = { NORTH: "SOUTH", EAST: "WEST", SOUTH: "NORTH", WEST: "EAST" };
  return arr.reduce(
    (acc: any, cur: any) => (opposites[acc.slice(-1)] === cur ? acc.pop() : acc.push(cur), acc),
    []
  );
}

console.log(dir(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));

function dirReduc(arr) {
  let str = arr.join("");
  let pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/g;
  while (pattern.test(str)) {
    str = str.replace(pattern, "");
  }

  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}
