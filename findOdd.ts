function findOdd(A: number[]): number {
  return A.reduce((a, b) => a ^ b);
}

console.log(findOdd([2, 1, 2, -2, 5, 2, 4, 4, 4, 1, 4, -1, -2, 5, -1, 5, 5]));

//////////////////////////////////////////////////////////////////////////////////
function findOdd2(A: number[]): number {
  for (let i = 0; i < A.length; i++) {
    let elmLength = A.filter((elm) => elm === A[i]).length;
    console.log(elmLength);

    if (elmLength % 2 !== 0) {
      return A[i];
    }
  }
}

console.log(findOdd2([1, 2, -2, 5, 2, 4, 4, 4, 1, 4, -1, -2, 5, -1, 5, 5, 4]));
///////////////////////////////////////////////////////////////////////////////////

////////////////////////// SOLUTION WITH FIND AND FILTER///////////////////////////
function findOdd3(A: number[]): number {
  return A.find((item) => A.filter((el) => el == item).length % 2);
}

console.log(findOdd3([5, 1, 2, -2, 5, 2, 4, 4, 4, 1, 4, -1, -2, 5, -1, 5, 5]));
///////////////////////////////////////////////////////////////////////////////////
