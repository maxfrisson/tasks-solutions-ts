let XO = (str) => {
  let xLen = str.match(/x/gi) ? str.match(/x/gi).length : false;
  let oLen = str.match(/o/gi) ? str.match(/o/gi).length : false;
  return xLen === oLen;
};

console.log(XO("xxxooo"));
