function mazeRunner(maze: number[][], directions: string[]) {
  let x = 0;
  let y = 0;

  for (let j = 0; j < maze.length; j++) {
    if (maze[j].indexOf(2) != -1) {
      x = j;
      y = maze[j].indexOf(2);
    }
  }

  for (let step = 0; step < directions.length; step++) {
    if (directions[step] == "N") x--;
    if (directions[step] == "E") y++;
    if (directions[step] == "W") y--;
    if (directions[step] == "S") x++;

    if (maze[x] === undefined || maze[y] === undefined || maze[x][y] === 1) return "Dead";
    if (maze[x][y] === 3) return "Finish";
  }
  return "Lost";
}

var maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];

console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E", "W", "W"]));
