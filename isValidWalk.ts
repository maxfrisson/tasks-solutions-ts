///////////////////////////////// SOLUTION WITH FOR LOOP /////////////////////////////
function isValidWalk(walk: string[]): boolean {
  let x = 0,
    y = 0;
  for (let s = 0; s < walk.length; s++) {
    if (walk[s] == "n") x++;
    if (walk[s] == "s") x--;
    if (walk[s] == "w") y++;
    if (walk[s] == "e") y--;
  }
  return walk.length === 10 && x === 0 && y === 0;
}
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
///////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// SOLUTION WITH SWITCH ////////////////////////////////
function isValidWalk2(walk: string[]): boolean {
  let x = 0,
    y = 0;
  for (let step = 0; step < walk.length; step++) {
    switch (walk[step]) {
      case "n":
        x++;
        break;
      case "s":
        x--;
        break;
      case "e":
        y++;
        break;
      case "w":
        y--;
        break;
    }
  }
  return walk.length === 10 && x === 0 && y === 0;
}

console.log(isValidWalk2(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
///////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// CLEVER SOLUTION WITH FILTER /////////////////////////
function isValidWalk3(walk: string[]) {
  function count(val: string) {
    return walk.filter((a) => a == val).length;
  }
  return walk.length == 10 && count("n") === count("s") && count("w") === count("e");
}

console.log(isValidWalk3(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
///////////////////////////////////////////////////////////////////////////////////////
