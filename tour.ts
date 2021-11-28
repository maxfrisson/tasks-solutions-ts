var friends1 = ["A1", "A2", "A3", "A4", "A5"];
var fTowns1 = [
  ["A1", "X1"],
  ["A2", "X2"],
  ["A3", "X3"],
  ["A4", "X4"]
];
var distTable1 = ["X1", 100.0, "X2", 200.0, "X3", 250.0, "X4", 300.0];

let distTableArr = [];
  for (let i = 0; i < distTable1.length; i+=2) {
    distTableArr.push([distTable1[i],distTable1[i+1]])
  }
  
let objDistTables = Object.fromEntries(distTableArr)

function calculateDistance(friends, distances) {
  let total = 0;
  for (let x = 0; x < friends.length; x++) 
    if (friends[x].length === 2) 
      total += (distances[friends[x][1]] * 2);
  return total;
}
console.log(calculateDistance(fTowns1, objDistTables));


// function tour(friends: string[], fTowns: string[][], distTable: (string | number)[]): number {
//   let result = 0

//   let dist = (d1: number, d2: number) => {
//     return Math.round(Math.sqrt(d1 ** 2 - d2 ** 2));
//   };
  
//   let visitedFriends = friends.filter((x) => fTowns.some((t) => t[0].includes(x)));

//   let distTableArr = [];
//   for (let i = 0; i < distTable.length; i+=2) {
//     distTableArr.push([distTable[i],distTable[i+1]])
//   }
  
//   let objDistTables = Object.fromEntries(distTableArr)
//   let arrFromDistTables = Object.values(objDistTables);
  
//   for (let i = 0; i < visitedFriends.length-1; i++) {
//     switch (visitedFriends[i]) {
//       case (fTowns[i][0]):
//         result += dist (arrFromDistTables[i+1],arrFromDistTables[i])        
//         break;
    
//       default:
//         break;
//     }    
    
//   }

//   return arrFromDistTables[0] + result + arrFromDistTables[arrFromDistTables.length - 1];
// }

// console.log(tour(friends1, fTowns1, distTable1));
