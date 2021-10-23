// You have to split a given array into two arrays.

function splitList(values: number[]): number[][] {
  let arr1 = [];
  let arr2 = [];
  if (values.length % 2 === 0) {
    for (let i = 0; i < values.length / 2; i++) {
      arr1.push(values[i]);
    }
    for (let x = values.length - 1; x >= values.length / 2; x--) {
      arr2.unshift(values[x]);
    }
  } else {
    let a = Math.ceil(values.length / 2);
    for (let i = 0; i < a; i++) {
      arr1.push(values[i]);
    }
    for (let x = values.length - 1; x >= a; x--) {
      arr2.unshift(values[x]);
    }
  }
  console.log(Math.ceil(values.length / 2));
  return [arr1, arr2];
}

console.log(splitList([]));

//////////////// Clear solution/////////////////////////////////
function splitList2(values: number[]): number[][] {
  const seam = Math.ceil(values.length / 2);
  return [values.slice(0, seam), values.slice(seam)];
}
////////////////////////////////////////////////////////////////
