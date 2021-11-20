function duplicateCount(text: string) {
  let str2 = text.toLowerCase().split("");
  let res = new Set();
  str2.map(function (l, _, arr) {
    if (arr.indexOf(l) != arr.lastIndexOf(l)) {
      res.add(l);
    } else return l;
  });
  return res.size;
}

console.log(duplicateCount("aadfeaabgsdDdgthdd"));

///////////////////////////////CLEAR SOLUTION WITH MATCH ///////////////////////////
function duplicateCount2(text: string) {
  return (text.split('').sort().join('').match(/([^])\1+/gi) || []).length
}

console.log(duplicateCount2("aadfeaabgsdDdgthdd"));
////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////// SOLUTION WITH MATCH 2 //////////////////////////////
function duplicateCount3(text: string) {
  return (text.match(/(\w)(?=(?!.*\1.*\1).*\1)/gi) || []).length
}

console.log(duplicateCount3("aadfeaabgsdDdgthdd"));
////////////////////////////////////////////////////////////////////////////////////

////////////////////////////// CLEAR SOLUTION WITH SET /////////////////////////////
function duplicateCount4(text: string) {
  return new Set(text.toLowerCase().match(/(.)(?=.*\1)/g)).size
}

console.log(duplicateCount4("aadfeaabgsdDdgthdd"));
////////////////////////////////////////////////////////////////////////////////////