function towerBuilder(nFloors: number): string[] {
  let tower = [];
  let floorSize = nFloors * 2 - 1;
  let zeroL = 0;
  let zeroR = 0;
  for (let n = nFloors; n > 0; n--) {
    tower.unshift(` `.repeat(zeroL++) + `*`.repeat(floorSize) + ` `.repeat(zeroR++));
    floorSize -= 2;
  }
  return tower;
}

console.log(towerBuilder(10));
///////////////////////////// SOLUTION WITH ARRAY-FROM ////////////////////////////////
function towerBuilder2(nFloors: number): string[] {
  return Array.from({ length: nFloors }, function (floor, index) {
    const spaces = " ".repeat(nFloors - index - 1);
    return (floor = spaces + "*".repeat(index * 2 + 1) + spaces);
  });
}

console.log(towerBuilder2(5));

///////////////////////////////////////////////////////////////////////////////////////
