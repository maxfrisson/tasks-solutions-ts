var friends1 = ["A1", "A2", "A3", "A4", "A5"];
var fTowns1 = [
  ["A1", "X1"],
  ["A2", "X2"],
  ["A3", "X3"],
  ["A4", "X4"]
];
var distTable1 = ["X1", 100.0, "X2", 200.0, "X3", 250.0, "X4", 300.0];

function tour(friends: string[], fTowns: string[][], disTables: (string | number)[]): number {
  let result = 0
  let dist = (d1: number, d2: number) => {
    return Math.round(Math.sqrt(d1 ** 2 - d2 ** 2));
  };
  
  let visitedFriends = friends.filter((x) => fTowns.some((t) => t[0].includes(x)));

  for (let i = 0; i < visitedFriends.length; i++) {
    switch (visitedFriends[i]) {
      case (fTowns[i][0]):
        result += dist (+disTables[disTables.indexOf(fTowns[i][1])+1], +disTables[disTables.indexOf(fTowns[i][1])+1])        
        break;
    
      default:
        break;
    }    
    
  }
  console.log(result);


  // for (let i = 0; i < visitedFriends.length; i++) {
  //   fTowns[i].findIndex(x => x == visitedFriends[i])
  // }



  dist(200, 100) + dist(250, 200) + dist(300, 250) + 100 + 300;

  return 1;
}

console.log(tour(friends1, fTowns1, distTable1));
