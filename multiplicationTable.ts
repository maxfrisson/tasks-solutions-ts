function multiplicationTable(size: number): number[][] {
  return Array.apply(null, new Array(size)).map(function (val, i) {
    return Array.apply(null, new Array(size)).map(function (val, j) {
      return (i + 1) * (j + 1);
    });
  });
}

console.log(multiplicationTable(3));

////////////////////////////////// SOLUTION WITH FOR LOOP ////////////////////////////////
function multiplicationTable2(size: number): number[][] {
  let result = [];
  for (let i = 0; i < size; i++) {
    result[i] = [];
    for (let j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }
  return result;
}

console.log(multiplicationTable2(4));
////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////// SOLUTION WITH ARRAY FROM ////////////////////////////////
function multiplicationTable3(size: number): number[][] {
  return Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, j) => (i + 1) * (j + 1))
  );
}
console.log(multiplicationTable3(5));
////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////// SOLUTION WITH ARRAY FILL ////////////////////////////////
function multiplicationTable4(size: number): number[][] {
  return Array(size).fill(0).map((_,i) => Array(size).fill(0).map((_,j) => (i + 1) * (j + 1))) 
}
console.log(multiplicationTable4(5));
