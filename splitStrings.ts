function splitStrings(str: string): string[] {
  let res = [];
  let splitArr = str.split("");
  if (splitArr.length % 2) splitArr.push("_");
  console.log(splitArr);

  for (let i = splitArr.length / 2; i > 0; i--) {
    res.push(splitArr.splice(0, 2).reduce((a, b) => a + b));
  }
  return res;
}

console.log(splitStrings("abcdef"));

function splitStrings2(str: string): string[] {
  return (str + "_").match(/.{2}/g) || [];
}

console.log(splitStrings2("abcdef"));
