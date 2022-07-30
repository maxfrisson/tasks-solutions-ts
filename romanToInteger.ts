function romanToInteger(s: string): number {
  let res = 0;
  let dictionary = {
    "": 0,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  s.replace(/IV|IX|CD|CM|XL|XC|\w/g, function (match) {
    res += dictionary[match];
    return "";
  });
  return res;
}

console.log(romanToInteger("III"));
