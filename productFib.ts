////////////////////////////// MY SHAMEFUL SOLUTION //////////////////////////////////
function productFib(prod: number) {
  let arr = [];
  function fib(n: number) {
    return n < 2 ? n : fib(n - 1) + fib(n - 2);
  }
  let fibSize = 32;
  if (prod.toString().length > 12) fibSize = 38;
  if (prod.toString().length > 15) fibSize = 40;

  for (let i = 0; i < fibSize; i++) {
    arr.push(fib(i));
  }
  let result = arr
    .map(function (a, i, arr) {
      if (a * arr[i + 1] == prod) {
        return [a, arr[i + 1], true];
      } else if (a * arr[i + 1] < prod) {
        return [arr[i + 1], arr[i + 2], false];
      }
    })
    .filter((x) => x != undefined)
    .reverse();
  return result[0];
}

console.log(productFib(602070));
////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////// CLEAR SOLUTION //////////////////////////////////
function productFib2(prod: number) {
  let [a, b] = [0, 1];
  while (a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}

console.log(productFib2(602070));
////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////// CLEAR SOLUTION //////////////////////////////////
function productFib3(prod: number) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < prod; i++) {
    if (a * b > prod) return [a, b, false];
    if (a * b === prod) return [a, b, true];
    [a, b] = [b, a + b];
  }
}

console.log(productFib3(602070));
////////////////////////////////////////////////////////////////////////////////////////
