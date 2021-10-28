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

console.log(findCapitals2("CoCdEWaRs"));
///////////////////////////////////////////////////////////////////

////////////////////// SOLUTION FOR 2 AND MORE SAME LETTERS ///////
function findCapitals3(word: string): number[] {
  var caps = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps;
}

console.log(findCapitals3("CoCdEWaRsRsdEEW"));
