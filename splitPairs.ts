// Split the string into pairs

function splitPairs(text: string): any[] {
  let arr = [];
  var a = text.length % 2 != 0 ? text + "_" : text;
  for (let i = 0; i < a.length - 1; i += 2) {
    arr.push(a[i] + a[i + 1]);
  }
  console.log(arr);

  return arr;
}

console.log(splitPairs("abcd"));
