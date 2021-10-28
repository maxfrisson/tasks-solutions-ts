function findCapitals(word: string): number[] {
  console.log(
    word.match(/[A-Z]/g).map((x) => {
      return word.indexOf(x);
    })
  );

  let capArr = word.match(/[A-Z]/g);
  let resArr = [];
  for (let i = 0; i < capArr.length; i++) {
    resArr.push(word.indexOf(word.match(/[A-Z]/g)[i]));
  }

  return resArr;
}

console.log(findCapitals("CodEWaRs"));

////////////////////// CLEAR SOLUTION /////////////////////////////
function findCapitals2(word: string): number[] {
  return word.match(/[A-Z]/g).map((x) => word.indexOf(x));
}

console.log(findCapitals2("CodEWaRs"));
///////////////////////////////////////////////////////////////////
