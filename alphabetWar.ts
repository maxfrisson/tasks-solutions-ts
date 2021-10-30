// There is a war and nobody knows - the alphabet war!

function alphabetWar(fight: string): string {
  let left = 0;
  let rigth = 0;
  console.log(fight[2]);
  for (let i = 0; i < fight.length; i++) {
    switch (fight[i]) {
      case "w":
        left += 4;
        break;
      case "p":
        left += 3;
        break;
      case "b":
        left += 2;
        break;
      case "s":
        left += 1;
        break;
      case "m":
        rigth += 4;
        break;
      case "q":
        rigth += 3;
        break;
      case "d":
        rigth += 2;
        break;
      case "z":
        rigth += 1;
        break;
    }
  }
  if (left > rigth) {
    return "Left side wins!";
  } else if (left < rigth) {
    return "Right side wins!";
  }
  return "Let's fight again!";
}

console.log(alphabetWar("zdqmwpbs"));

////////////////////////// CLEAR SOLUTION ////////////////////////////////////////////////
function alphabetWar2(figth: string) {
  let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
  let result = figth.split("").reduce((a, b) => a + (map[b] || 0), 0);
  return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}
console.log(alphabetWar2("zdqmwpbs"));
//////////////////////////////////////////////////////////////////////////////////////////
