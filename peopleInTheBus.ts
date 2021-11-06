// Return number of people who are still in the bus

function peopleInTheBus(busStops:[number,number][]): number {
  let people = 0;
  busStops.map((stop) => people += stop[0] - stop[1])
  return people
}

console.log(peopleInTheBus([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));

////////////////////// CLEAR SOLUTION ////////////////////////////////////
function peopleInTheBus2(busStops:[number,number][]): number {
  return busStops.reduce((rem,[on,off]) => rem + on - off, 0)
}

console.log(peopleInTheBus2([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));
