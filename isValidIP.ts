function isValidIP(str: string) {
  let strCut = str.split(".").filter((x) => !/\D^0./g.test(x) && +x <= 255 && +x >= 0);
  return strCut.length === 4;
}

console.log(isValidIP("12.255.56.2"));
