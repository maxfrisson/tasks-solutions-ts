function stringEndsWith(str: string, ending: string) {
  let x = ":-(";
  console.log(/:-\(/.test(x));
  x.replace(/\(\)/g, "s");
  console.log(x.replace(/(\()|(\))/g, "\\$1$2"));

  return !!str.match(new RegExp(`${ending.replace(/(\()|(\))/g, "\\$1$2")}$`));
}

console.log(stringEndsWith("abcde", "cde"));

/////////////////////////////////// CLEAR SOLUTION /////////////////////////////
function stringEndsWith2(str: string, ending: string): boolean {
  return str.endsWith(ending);
}

console.log(stringEndsWith2("abcde", "abc"));
////////////////////////////////////////////////////////////////////////////////
